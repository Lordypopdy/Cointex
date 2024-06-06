import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import FadeLoader from 'react-spinners/FadeLoader';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        comfirmPassword: ''
    })
    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { name, email, password, comfirmPassword } = data;
        try {
            const { data } = await axios.post('/register', {
                name, email, password, comfirmPassword
            })
            if (data.error) {
                toast.error(data.error);
                setLoading(false)
            } else {
                setData({});
                localStorage.setItem('pin', data.password);
                localStorage.setItem('email', email);
                toast.success("Register successful!");
                location.href = '/home'
            }
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    return (
        <>
            {/* <!-- preloade --> */}
            <div className="preload preload-container">
                <div className="preload-logo" style={{ backgroundImage: `url('/src/images/logo/144.png')` }}>
                    <div className="spinner"></div>
                </div>
            </div>
            {/* <!-- /preload -->  */}

            <div className="header fixed-top bg-surface">
                <a href="#" className="left back-btn"><i className="icon-left-btn"></i></a>
            </div>
            <div className="pt-45">
                <div className="tf-container">
                    <form onSubmit={registerUser} className="mt-32 mb-16">

                        <h2 className="text-center">Register Cointex</h2>
                        <fieldset className="mt-40">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Name</p>
                                <input
                                    type="text"
                                    value={data.name}
                                    placeholder="enter name"
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                />
                            </label>
                        </fieldset>
                        <FadeLoader
                            color="#36d7b7"
                            loading={loading}
                            speedMultiplier={3}
                            style={{ textAlign: 'center', position: 'relative', marginLeft: '50%'}}
                        />
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Email</p>
                                <input
                                    type="text"
                                    placeholder="Example@gmail"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </label>
                        </fieldset>
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type="password"
                                        required
                                        placeholder="6 -20 characters"
                                        className="password-field"
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                    <span className="show-pass">
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Confirm Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type="password"
                                        required
                                        placeholder="confirm password"
                                        className="password-field2"
                                        value={data.comfirmPassword}
                                        onChange={(e) => setData({ ...data, comfirmPassword: e.target.value })}
                                    />
                                    <span className="show-pass2">
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                    <span className="text-warning mt-" id="error4"></span>
                                </div>
                            </label>
                        </fieldset>
                        <fieldset className="group-cb cb-signup mt-12">
                            <input type="checkbox" className="tf-checkbox" id="cb-ip" checked />
                            <label for="cb-ip">I agree to <a href="#notiPrivacy" style={{ color: '#fff' }} data-bs-toggle="modal">Terms and condition</a></label>
                        </fieldset>
                        <button className="mt-20">Create an account</button>
                        <p className="mt-10 text-center mb-30">By creating an account, you’re agree to out <a href="#notiPrivacy" style={{ color: '#25c866' }} data-bs-toggle="modal">Privacy policy</a>  and <a href="#notiPrivacy" style={{ color: '#25c866' }} data-bs-toggle="modal">Term of use</a> </p>
                    </form>

                </div>
            </div>

            {/* Privacy policy and terms of use Section */}

            <div className="modal fade modalCenter" id="notiPrivacy">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-20">
                        <div className="heading">
                            <h3>Privacy</h3>
                            <div className="mt-4 text-small">
                                <p>A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.</p>
                                <p>A mobile privacy app is developed and presented to users so that mobile app developers stay compliant with state, federal, and international laws. As a result, they fulfill the legal requirement to safeguard user privacy while protecting the company itself from legal challenges.</p>
                            </div>
                            <h3 className="mt-12">Authorized Users</h3>
                            <p className="mt-4 text-small">
                                A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.
                            </p>
                            <div className="cb-noti mt-12">
                                <input type="checkbox" className="tf-checkbox" id="cb-ip" />
                                <label for="cb-ip">I agree to the Term of service and Privacy policy</label>
                            </div>

                        </div>
                        <div className="mt-20">
                            <a href="#" className="tf-btn md primary" data-bs-dismiss="modal">I Accept</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register