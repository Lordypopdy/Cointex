import React from 'react'

const VerificationAdvance = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Verification</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <a href="javascript:void(0);" className="accent-box bg-menuDark mt-4 d-flex align-items-center justify-content-between">
                <h4>Basic verification (level 1)</h4>
                <i className="icon-round-check md bg-primary flex-shrink-0 text-white"></i>
            </a>
            <div className="accent-box bg-menuDark mt-16">
                <h4>Advanced verification (level 2)</h4>
                <h5 className="mt-20">Features and limitations</h5>
                <ul className="pt-16 pb-12 line-bt">
                    <li className="d-flex justify-content-between align-items-center">
                        <span className="text-small">Recharge</span>
                        <span className="text-white text-large">Unlimited</span>
                    </li>
                    <li className="mt-12 d-flex justify-content-between align-items-center">
                        <span className="text-small">Withdraw money</span>
                        <span className="text-white text-large">10.000.000 USD daily</span>
                    </li>
                </ul>
                <h5 className="mt-12">Request</h5>
                <div className="mt-16 d-flex cg-8 rg-12 mr--16 flex-wrap">
                    <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Personal information</p>
                    <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Address of residence</p>
                    <p className="text-small text-white d-flex align-items-center gap-6"><i className="dot-md bg-secondary"></i> Selfies</p>

                </div>
                <a href="/VerificationComfirm" className="tf-btn xs primary mt-12">Verification</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default VerificationAdvance