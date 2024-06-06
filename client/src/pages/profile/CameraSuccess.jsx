import React from 'react'

const CameraSuccess = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
   <>
    <div className="bg-camera">
        <div className="tf-container">
            <div className="pt-30 pb-30">
                <div className="success_box">
                    <div className="icon-1 ani3">
                        <span className="circle-box lg bg-circle check-icon bg-primary"></span>
                    </div>
                    <div className="icon-2 ani5">
                        <span className="circle-box md bg-primary"></span>
                    </div>
                    <div className="icon-3 ani8">
                        <span className="circle-box md bg-primary"></span>
                    </div>
                    <div className="icon-4 ani2">
                        <span className="circle-box sm bg-primary"></span>
                    </div>
                    <h2 className="text-surface text-center">Successful!</h2>
                    <p className="text-large text-center mt-8">Your personal information has been verified</p>
                    <a href="/VerificationAdvance" className="tf-btn lg primary mt-40">Done</a>
                </div>
            </div>
           
                
        </div>
    </div>
   </>
  )
}

export default CameraSuccess