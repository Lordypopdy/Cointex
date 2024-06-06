import React from 'react'

const AddresScan = () => {
  $(document).ready(function () {
    window.setTimeout(function(){
        location.href = "/CameraDone";
    },5000) 
});
const e = localStorage.getItem('email');
if(!e){
    location.href = '/login';
}
  return (
    <>
    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>QR code</h3>
        <a href="javascript:void(0);" className="right"><i className="icon-question"></i></a>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <h2 className="mt-20 text-center">Your QR Code</h2>
            <div className="mt-40 banner-qr">
                <img src="/src/images/banner/banner-qrcode.png" alt="img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default AddresScan