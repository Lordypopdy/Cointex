import { useState } from "react"
import axios from 'axios';
import toast from "react-hot-toast";
import FadeLoader from 'react-spinners/FadeLoader';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const loginUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            })
            if (!data.error) {
                setData({});
                toast.success('Login successful. Welcome!');
                localStorage.setItem('email', email);
                localStorage.setItem('pin', data._id);
                location.href = '/Home'
            } else {
                toast.error(data.error)
                setLoading(false)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error.message);
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
                <a href="Boarding2" className="left back-btn"><i className="icon-left-btn"></i></a>
            </div>
            <div className="pt-45 pb-20">
                <div className="tf-container">
                    <div className="mt-32">
                        <h2 className="text-center">Login Cointex</h2>
                        <ul className="mt-40 socials-login">
                            <li className="mt-12"><a href="Home" className="tf-btn md social dark"><img src="/src/images/logo/fb.jpg" alt="img" /> Continue with Facebook</a></li>
                            <li className="mt-12"><a href="Home" className="tf-btn md social dark"><img src="/src/images/logo/google.jpg" alt="img" /> Continue with Google</a></li>
                            <li className="mt-12"><a href="Home" className="tf-btn md social dark"><img src="/src/images/logo/apple.jpg" alt="img" /> Continue with Apple</a></li>
                        </ul>
                    </div>
                    <div className="auth-line mt-12">Or</div>
                    <form onSubmit={loginUser} className="mt-16">
                        <FadeLoader
                            color="#36d7b7"
                            loading={loading}
                            speedMultiplier={3}
                            style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                        />
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small"> Email</p>
                                <input
                                    type="email"
                                    placeholder="Example@gmail"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </label>
                        </fieldset>
                        <fieldset className="mt-16 mb-12">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type="password"
                                        required
                                        placeholder="Your password"
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
                        <a href="/RessetPassword" className="text-secondary">Forgot Password?</a>
                        <button className="mt-20">Login</button>
                        <p className="mt-20 text-center text-small">Already have a Account? &ensp;<a href="Register">Sign up</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login