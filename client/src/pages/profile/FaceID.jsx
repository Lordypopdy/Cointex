import React from 'react'

const FaceID = () => {
    $(document).ready(function () {
        window.setTimeout(function(){
            location.href = "/FaceIdDone";
        },4000) 
    });
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     {/* <!-- <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>QR code</h3>
        <a href="javascript:void(0);" className="right"><i className="icon-question"></i></a>
    </div> --> */}
    <div className="bg-face">
        <div className="tf-container">
            <h5 className="mt-12 text-center text-secondary">Please look into the camera and hold still</h5>
            <div className="mt-8 pt-45 banner-scan-profile m--16 pb-16" style={{ backgroundImage: `url('/src/images/banner/banner-faceId.png')` }}>
                <div className="line-qr">
                    <img src="/src/images/banner/line-qr.png" alt="img" />
                </div>
                <div className="box-noti-camera">
                    <span className="icon-think icon"></span>
                    <p className="text-large text-surface">Adjust your camera orientation to show your face clearly to finish.</p>
                </div>
            </div>
        </div>
        
    </div>

    </>
  )
}

export default FaceID