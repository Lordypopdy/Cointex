import { useState } from "react";

const TellUsMore = () => {
    const [data, setData] = useState({
        notSafe: '',
        dontWantAnymore: '',
        useOtherPlatfrom: ''
    })
    const submitMore = (e)=>{
        e.preventDefault();
    }
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
    return (
        <>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>Tell us more</h3>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <h4 className="mt-4">Why do you want to freeze your account?</h4>
                    <form onSubmit={submitMore}>
                        <ul className="mt-20">
                            <li className="tf-list-item-v2 mt-20 bg-menuDark">
                                <label className="text-large text-white flex-grow-1" for="radio1">This account is not safe so i want to freeze it temporarily</label>
                                <input 
                                type="radio" 
                                className="tf-radio 
                                flex-shrink-0" 
                                name="radio" 
                                id="radio1" 
                                checked />
                            </li>
                            <li className="tf-list-item-v2 mt-20 bg-menuDark">
                                <label className="text-large text-white flex-grow-1" for="radio2">I don't want to use this account anymore</label>
                                <input 
                                type="radio" 
                                className="tf-radio 
                                flex-shrink-0" 
                                name="radio" id="radio2" />

                            </li>
                            <li className="tf-list-item-v2 mt-20 bg-menuDark">
                                <label className="text-large text-white flex-grow-1" for="radio3">I want to use another platform</label>
                                <input 
                                type="radio" 
                                className="tf-radio flex-shrink-0" 
                                name="radio" 
                                id="radio3" 
                                />
                            </li>
                            <li className="tf-list-item-v2 mt-20 bg-menuDark">
                                <label className="text-large text-white flex-grow-1" for="radio4">Other</label>
                                <input 
                                type="radio" 
                                className="tf-radio flex-shrink-0" 
                                name="radio" 
                                id="radio4" 
                                />
                            </li>
                        </ul>
                        <button type='submit' className="mt-40 tf-btn lg primary">Confirm</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default TellUsMore