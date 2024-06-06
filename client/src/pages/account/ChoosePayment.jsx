import React from 'react'

const ChoosePayment = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
    return (
        <>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>Choose payment method</h3>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <div className="mt-4 text-center">
                        <p className="text-small">you will pay</p>
                        <div className="mt-8">
                            <h1 className="d-inline-block text-primary">1200.0</h1>
                            <h4 className="d-inline-block text-primary">USD</h4>
                        </div>

                    </div>
                    <ul className="mt-20">
                        <li>
                            <a href="/Recharge" className="accent-box item-check-style3 bg-menuDark">
                                <label for="radio1" className="content d-flex justify-content-between">
                                    <div className="flex-grow-1">
                                        <span className="text-small">Wallet transactions</span>
                                        <h5 className="mt-8 d-flex align-items-center gap-4"><i className="icon-wallet icon"></i> Wallet transfer</h5>
                                    </div>
                                    <h4>1200.0$</h4>
                                </label>
                                {/* <!-- <input type="radio" className="tf-radio style-2 flex-shrink-0" name="radio" id="radio1"> --> */}
                            </a>

                        </li>
                        <li className="mt-12">
                            <a href="/ChooseBank" className="accent-box item-check-style3 bg-menuDark">
                                <label for="radio2" className="content">
                                    <div className="flex-grow-1">
                                        <span className="text-small">Card/bank account</span>
                                        <h5 className="mt-8 d-flex align-items-center gap-4"><i className="icon-wallet icon"></i> Credit/debit card</h5>
                                    </div>
                                    <h4>1200.0$</h4>
                                </label>
                                {/* <!-- <input type="radio" className="tf-radio style-2 flex-shrink-0" name="radio" id="radio2" checked> --> */}
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ChoosePayment