import React from 'react'

const NewPassword = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
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
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <form action="Otp02" className="mt-32">
                        <h2 className="text-center">Create new password</h2>
                        <fieldset className="mt-40">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass">
                                    <input type="password" required className="password-field" value="123456" />
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
                                    <input type="password" required className="password-field2" placeholder="6 -20 characters" />
                                    <span className="show-pass2">
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>
                        <button className="mt-40">Reset Password</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default NewPassword