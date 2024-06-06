import React from 'react'

const ChooseVerification = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Verification</h3>
        <a href="javascript:void(0);" className="right"><i className="icon-question"></i></a>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <h4 className="mt-4">Choose the type of identification document</h4>
            <form action="/ChooseIdentity" className="mt-20">
                <fieldset>
                    <label className="mb-8">Country/region of residence</label>
                    <div className="select-wrapper">
                        <select className="tf-select">
                            <option>USA</option>
                            <option>ENG</option>
                            <option>INDIA</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="mt-20">
                    <label className="mb-8">Type of identification (ID)</label>
                    <div className="select-wrapper" data-bs-toggle="modal" data-bs-target="#identificationID">
                        <p className="tf-select dom-text">Select ID type</p>
                    </div>
                </fieldset>
                <button className="tf-btn lg primary mt-40">Next</button>
            </form>
        </div>
    </div>

    <div className="modal fade action-sheet" id="identificationID">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Type of identification (ID)</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">Citizen identification <i className="icon icon-check-circle"></i> </div></li>
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Driving license <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">ID card <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Passport <i className="icon icon-check-circle"></i></div></li>
                    <li data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Arc <i className="icon icon-check-circle"></i></div></li>
                </ul>
            </div> 
        </div>
    </div>
    </>
  )
}

export default ChooseVerification