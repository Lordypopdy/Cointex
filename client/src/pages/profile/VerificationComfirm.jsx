import React from 'react'

const VerificationComfirm = () => {
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
            <h3 className="mt-4">Confirm your personal information.</h3>
            <p className="mt-8 text-small">Confirm that the following information is correct.</p>
            <ul className="mt-20">
                <li>
                    <p className="text-small text-white">Country/region of residence</p>
                    <p className="mt-8 text-large text-white">USA</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">full name</p>
                    <p className="mt-8 text-large text-white">Tony Nguyen</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">Country or region of nationality</p>
                    <p className="mt-8 text-large text-white">USA</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">Type of identification (ID)</p>
                    <p className="mt-8 text-large text-white">Citizen identification</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">ID number</p>
                    <p className="mt-8 text-large text-white">123456789</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">Date of birth</p>
                    <p className="mt-8 text-large text-white">01/01/2023</p>
                </li>
                <li className="mt-20">
                    <p className="text-small text-white">Address</p>
                    <p className="mt-8 text-large text-white">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </li>
            </ul>
            <div className="mt-40">
                <a href="/VerifyID" className="tf-btn lg primary">Confirm</a>
                <a href="/PersonalVerification" className="mt-12 tf-btn lg secondary">Edit information</a>
            </div>
        </div>
    </div>

        </>
    )
}

export default VerificationComfirm