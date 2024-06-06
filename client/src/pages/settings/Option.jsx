import React from 'react'

const Option = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Option</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <ul className="mt-4 pb-16 line-bt">
                <li data-bs-toggle="modal" data-bs-target="#language">
                    <a href="javascript:void(0);" className="d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Language</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span className="text-val-language">English</span><i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li data-bs-toggle="modal" data-bs-target="#currency">
                    <a href="javascript:void(0);" className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Currency</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span className="text-val-currency">USD </span><i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Stablecoin option</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span> USDT </span><i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
            </ul>
            <ul className="pt-16 pb-16 line-bt">
                <li>
                    <a href="javascript:void(0);" className="d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Display</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span>Dark</span> <i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li data-bs-toggle="modal" data-bs-target="#color">
                    <a href="javascript:void(0);" className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Chart color</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span className="text-val-color">Green increase, red decrease</span>  <i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li data-bs-toggle="modal" data-bs-target="#changeTime">
                    <a href="javascript:void(0);" className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Change time</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span className="text-val-time">00:00 UTC </span> <i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li data-bs-toggle="modal" data-bs-target="#market">
                    <a href="javascript:void(0);" className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Market indicator</p>
                        <div className="text-secondary text-small d-flex gap-8 align-items-center"><span className="text-val-market">Mass</span><i className="icon-arr-right fs-12 text-secondary"></i></div>
                    </a>
                </li>
                <li>
                    <div className="mt-16 d-flex justify-content-between align-items-center">
                        <p className="text-button fw-6">Haptic feedback</p>
                        <input className="tf-switch-check" type="checkbox" value="checkbox" name="check" />
                    </div>
                </li>
            </ul>
            <a href="javascript:void(0);" className="pt-16 pb-16 d-flex justify-content-between align-items-center">
                <p className="text-button fw-6">Message settings</p>
                <span className="icon-arr-right fs-12 text-secondary"></span>
            </a>
        </div>
    </div>

    {/* <!-- modal language --> */}
    <div className="modal fade modalRight" id="language">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span className="left" data-bs-dismiss="modal"  aria-hidden="true"><i className="icon-left-btn"></i></span>
                    <h3>Language</h3>
                </div>
                <div className="overflow-auto pt-45 pb-16">
                    <div className="tf-container">
                        <ul className="mt-4 m--16">
                            <li className="line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 active language-val">English <i className="icon icon-check-circle"></i> </div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Vietnamese <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Bahasa Indonesia <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">China <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Japanese <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Brasil <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Francais <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Deutsch <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Italiano <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Polski <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Cestina <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Romania<i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Portugal<i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">Espana<i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 language-val">India<i className="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>
                        
                </div>
               
            </div>
        </div>
    </div>
    {/* <!-- modal currency --> */}
    <div className="modal fade modalRight" id="currency">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                    <span className="left" data-bs-dismiss="modal"  aria-hidden="true"><i className="icon-left-btn"></i></span>
                    <h3>Display currency</h3>
                </div>
                <div className="overflow-auto pt-45 pb-16">
                    <div className="tf-container">
                        <ul className="mt-4 m--16">
                            <li className="line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 active currency-val">USD <i className="icon icon-check-circle"></i> </div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">CNY <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">RUB <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">JPY <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">EUR <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">THB <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">VND <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">IDR <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">PHP <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">INR <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">ARS <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">SAR <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">TRY <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4 line-bt"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">AED <i className="icon icon-check-circle"></i></div></li>
                            <li className="mt-4"><div className="d-flex justify-content-between gap-8 text-large item-check-style2 currency-val">IQD <i className="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>
                        
                </div>
               
            </div>
        </div>
    </div>
    {/* <!-- modal color --> */}
    <div className="modal fade action-sheet" id="color">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Chart color</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li  data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active color-val">Green increase, red decrease <i className="icon icon-check-circle"></i> </div></li>
                    <li className="mt-4"  data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check color-val">Red increase, green decrease <i className="icon icon-check-circle"></i></div></li>
                </ul>
            </div>
            
        </div>
    </div>
    {/* <!-- modal time  --> */}
    <div className="modal fade action-sheet" id="changeTime">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Time</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check time-val">00:00 HKT (UTC+8) <i className="icon icon-check-circle"></i> </div></li>
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check active time-val">00:00 UTC <i className="icon icon-check-circle"></i></div></li>
                    <li  data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check time-val">24 Hours <i className="icon icon-check-circle"></i></div></li>

                </ul>
            </div>
            
        </div>
    </div>
    {/* <!-- modal market --> */}
    <div className="modal fade action-sheet" id="market">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>market</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active market-val">Mass <i className="icon icon-check-circle"></i> </div></li>
                    <li className="mt-4" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check market-val">Amount of money <i className="icon icon-check-circle"></i></div></li>
                </ul>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Option