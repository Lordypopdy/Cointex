import React from 'react'

const Recharge = () => {
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
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>Recharge</h3>
            </div>
            <div className="pt-45 pb-90">
                <div className="tf-container">
                    <div className="mt-4 accent-box-v2 bg-menuDark">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Your Balance:</span>
                            <h5>$3.466,9</h5>
                        </div>
                        <div className="mt-12 box-input-field">
                            <input type="text" value="50" required className="clear-ip value_input ip-style2" />
                            <i className="icon-close"></i>
                        </div>
                    </div>
                    <h5 className="mt-20">Amount Money</h5>
                    <ul className="grid-3 gap-12 mt-16">
                        <li><a href="javascript:void(0);" className="tag-money active text-small">$50</a></li>
                        <li><a href="javascript:void(0);" className="tag-money text-small">$100</a></li>
                        <li><a href="javascript:void(0);" className="tag-money text-small">$200</a></li>
                        <li><a href="javascript:void(0);" className="tag-money text-small">$500</a></li>
                        <li><a href="javascript:void(0);" className="tag-money text-small">$1000</a></li>
                        <li><a href="javascript:void(0);" className="tag-money text-small">$2000</a></li>
                    </ul>

                </div>
            </div>

            <div className="menubar-footer footer-fixed bg-surface">
                <div className="inner-bar">
                    <a href="/PaymentComfirm" className="tf-btn lg primary">Confirm</a>
                </div>
            </div>
        </>
    )
}

export default Recharge