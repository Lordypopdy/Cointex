import { useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast';
import FadeLoader from 'react-spinners/FadeLoader';

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        current: '',
        newPassword: '',
        comfirmNewPassword: ''
    })
    const updatePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { current, newPassword, comfirmNewPassword } = data;
        try {
            const email = localStorage.getItem('email');
            const { data } = await axios.post('/changePassword', {
                email,
                current,
                newPassword,
                comfirmNewPassword
            })
            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            } 

            if(data.success){
                toast.success(data.success);
                setLoading(false);
                location.href = '/profile'
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
            setLoading(false)
        }
    }
    const e = localStorage.getItem('email');
    if (!e) {
        location.href = '/login';
    }
    return (
        <>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>Change login password</h3>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <form onSubmit={updatePassword}>
                        <fieldset className="mt-4">
                            <label className="mb-8">Current password</label>
                            <div className="box-auth-pass">
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    className="password-field"
                                    value={data.current}
                                    onChange={(e) => setData({ ...data, current: e.target.value })}
                                />
                                <span className="show-pass">
                                    <i className="icon-view"></i>
                                    <i className="icon-view-hide"></i>
                                </span>
                            </div>
                        </fieldset>
                        <fieldset className="mt-16">
                            <label className="mb-8">New login password</label>
                            <div className="box-auth-pass">
                                <input
                                    type="password"
                                    placeholder="Enter your new password"
                                    className="password-field"
                                    value={data.newPassword}
                                    onChange={(e) => setData({ ...data, newPassword: e.target.value })}
                                />
                                <span className="show-pass">
                                    <i className="icon-view"></i>
                                    <i className="icon-view-hide"></i>
                                </span>
                            </div>
                        </fieldset>
                        <FadeLoader
                            color="#36d7b7"
                            loading={loading}
                            speedMultiplier={3}
                            style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                        />
                        <ul className="mt-16">
                            <li className="d-flex gap-4 align-items-center">
                                <input type="checkbox" className="tf-checkbox style-2" id="cb1" checked />
                                <label className="text-small text-white" for="cb1">8 - 32 characters long</label>
                            </li>
                            <li className="mt-12 d-flex gap-4 align-items-center">
                                <input type="checkbox" className="tf-checkbox style-2" id="cb2" checked />
                                <label className="text-small text-white" for="cb2">1 lowercase character</label>
                            </li>
                            <li className="mt-12 d-flex gap-4 align-items-center">
                                <input type="checkbox" className="tf-checkbox style-2" id="cb3" checked />
                                <label className="text-small text-white" for="cb3">1 uppercase character</label>
                            </li>
                            <li className="mt-12 d-flex gap-4 align-items-center">
                                <input type="checkbox" className="tf-checkbox style-2" id="cb4" checked />
                                <label className="text-small text-white" for="cb4">1 number</label>
                            </li>
                            <li className="mt-12 d-flex gap-4 align-items-center">
                                <input type="checkbox" className="tf-checkbox style-2" id="cb5" checked />
                                <label className="text-small text-white" for="cb5">1 symbol</label>
                            </li>
                        </ul>
                        <fieldset className="mt-16">
                            <label className="mb-8">Confirm new login password</label>
                            <div className="box-auth-pass">
                                <input
                                    type="password"
                                    placeholder="Comfirm your new password"
                                    className="password-field"
                                    value={data.comfirmNewPassword}
                                    onChange={(e) => setData({ ...data, comfirmNewPassword: e.target.value })}
                                />
                                <span className="show-pass">
                                    <i className="icon-view"></i>
                                    <i className="icon-view-hide"></i>
                                </span>
                            </div>
                        </fieldset>
                        <button className="mt-40 tf-btn lg">Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword