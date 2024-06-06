import React from 'react'

const CameraScan = () => {
    $(document).ready(function () {
        window.setTimeout(function(){
            location.href = "/CameraDone";
        },10000) 
    });
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     <div className="bg-camera">
        <div className="tf-container">
            <div className="pt-30 pb-30">
                <div className="line-qr">
                    <img src="/src/images/banner/line-qr.png" alt="img" />
                </div>
                <div className="box-noti-camera">
                    <span className="icon-think icon"></span>
                    <p className="text-large text-surface">Point your camera at your Citizenship ID to complete.</p>
                </div>
            </div>
           
                
        </div>
    </div>
    </>
  )
}

export default CameraScan