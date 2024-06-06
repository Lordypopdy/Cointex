import React from 'react'

const VerificationDone = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="/Profile" className="left"><i className="icon-left-btn"></i></a>
        <h3>Verification</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <a href="javascript:void(0);" className="accent-box bg-menuDark mt-4 d-flex align-items-center justify-content-between">
                <h4>Basic verification (level 1)</h4>
                <i className="icon-round-check md bg-primary flex-shrink-0 text-white"></i>
            </a>
            <a href="javascript:void(0);" className="accent-box bg-menuDark mt-16 d-flex align-items-center justify-content-between gap-20">
                <h4>Advanced verification (level 2)</h4>
                <i className="icon-round-check md bg-primary flex-shrink-0 text-white"></i>
            </a>

            <a href="/Profile" className="mt-40 tf-btn lg primary">Done</a>
        </div>
    </div>
    </>
  )
}

export default VerificationDone