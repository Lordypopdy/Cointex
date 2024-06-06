import React from 'react'

const ChooseIdentity = () => {
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
            <h4 className="mt-4">Choose your identity verifications</h4>
            <ul className="mt-20">
                <li className="tf-list-item-v2 mt-20 bg-menuDark">
                    <a href="/IdentityVerification" className="text-button text-white" >Take a photo of your citizenship</a>
                    <input type="radio" className="tf-radio flex-shrink-0" name="radio" id="radio1" checked />

                </li>
                <li  className="tf-list-item-v2 mt-20 bg-menuDark">
                    <a href="/PersonalVerification" className="text-button text-white" >Enter your citizenship information</a>
                    <input type="radio" className="tf-radio flex-shrink-0" name="radio" id="radio2" /> 
                </li>
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default ChooseIdentity