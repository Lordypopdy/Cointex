import React from 'react'

const Opt02 = () => {
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
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="#" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>OTP</h3>
            </div>
            <div className="pt-45 pb-20">
                <div className="tf-container">
                    <div className="mt-32">
                        <div className="digit-group mt-12">
                            <input required type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" value="3" />
                            <input required type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" value="6" />
                            <input required type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                            <input required type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                        </div>
                        <p className="text-center text-small text-white mt-16">A code has been sent to your phone</p>
                        <p className="d-flex justify-content-center mt-4 text-center text-button text-primary fw-6">Resend in&nbsp;<span className="js-countdown" data-timer="60" data-labels=" :  ,  : , : , "></span></p>
                        <a href="/NewPasswordSuccess" className="mt-40 tf-btn lg primary">Confirm</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Opt02