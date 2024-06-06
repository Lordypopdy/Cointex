import React from 'react'

const VerifyIDScan = () => {
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
            <h3 className="mt-4 text-center">Please verify your identity</h3>
            <ul className="mt-20">
                <li className="d-flex align-items-center gap-8">
                    <i className="icon-round-check sm bg-white flex-shrink-0"></i>
                    <p className="text-small text-white">Take a picture of your document.</p>
                </li>
                <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon-round-check sm bg-white flex-shrink-0"></i>
                    <p className="text-small text-white">Take selfies</p>
                </li>
             
            </ul>
             <a href="/FaceID" className="tf-btn lg primary mt-40">Start</a>
             <p className="mt-12 text-center">By clicking "Get Started", I consent to Avicoin's income, processing and sharing of my personal information, which may include biometric data, as set forth in <span className="text-white">the Privacy Notice.</span> </p> 
        </div>
    </div>
    </>
  )
}

export default VerifyIDScan