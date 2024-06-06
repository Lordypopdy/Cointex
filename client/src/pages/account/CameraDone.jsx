import React from 'react'

const CameraDone = () => {
    $(document).ready(function () {
        window.setTimeout(function () {
            location.href = "/CameraSuccess";
        }, 4000)
    });
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
    return (
        <>
            <div className="bg-camera">
                <div className="tf-container">
                    <div className="pt-30 pb-30 position-relative">
                        <div className="line-qr">
                            <img src="/src/images/banner/line-qr.png" alt="img" />
                        </div>
                        <div className="scan-done">
                            <a href="/CameraSuccess" className="circle-box xl bg-circle check-icon bg-primary"></a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CameraDone