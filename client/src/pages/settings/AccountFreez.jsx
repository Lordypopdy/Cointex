import React from 'react'

const AccountFreez = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Option</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <ul className="mt-4">
                <li>
                    <a href="/TellUsMore" className="d-flex align-items-center">
                        <div className="inner">
                            <h5>Account freeze</h5>
                            <p className="mt-4 text-large text-secondary">Your account will be temporarily deactivated. To reactivate, start by signing in again.</p>
                        </div>
                        <i className="icon-arr-right fs-12 text-secondary"></i>
                    </a>
                </li>
                <li className="mt-16">
                    <a href="#notiAccount" className="d-flex align-items-center" data-bs-toggle="modal">
                        <div className="inner">
                            <h5>Close account</h5>
                            <p className="mt-4 text-large text-secondary">Once you close your account, it will be permanently closed and cannot be restored.</p>
                        </div>
                        <i className="icon-arr-right fs-12 text-secondary"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    {/* <!-- modal notification account --> */}
    <div className="modal fade modalCenter" id="notiAccount">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modal-sm">
                <div className="p-16 line-bt">
                    <h4 className="text-center">Are you sure?</h4>
                    <p className="mt-2 text-center text-large">Your account will be permanently closed and cannot be recovered. Would you rather freeze your account instead?</p>
                </div>
                <a href="/TellUsMore" className="text-center text-button fw-6 p-12 line-bt">Instead, let's freeze</a>
                <a href="/Login" className="text-center text-button fw-6 p-12 line-bt">Continue</a>
                <a href="javascript:void(0);" className="text-center text-button fw-6 p-12 text-red" data-bs-dismiss="modal">Cancel</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default AccountFreez