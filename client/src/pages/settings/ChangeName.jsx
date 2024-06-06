import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { UserContext } from '../../../context/UserContext';

const ChangeName = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);
    const [data, setData] = useState({
        name: ''
    })
    const updateName = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { name } = data;
        try {
            const email = user.email;
            const { data } = await axios.post('/nameUpdate', {
                name,
                email
            })
            if (data.message) {
                toast.success(data.message)
                location.href = '/profile'
            } else {
                setLoading(false)
                toast.error(data.error);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
                <h3>{!!user && user.name}</h3>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <form onSubmit={updateName}>
                        <fieldset className="mt-16">
                            <label className="mb-8">Name</label>
                            <input
                                required
                                type="text"
                                value={data.name}
                                placeholder="enter new name"
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </fieldset>
                        <FadeLoader
                            color="#36d7b7"
                            loading={loading}
                            speedMultiplier={3}
                            style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                        />
                        <ul className="mt-20">
                            <li className="d-flex gap-8">
                                <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                                <p className="text-large">Your name will be visible to all users. bnaj can change his nickname 3 times before the end of the year. The limit will be reset every year. Super/Diamond Advertisers are not allowed to change their nicknames.</p>
                            </li>
                            <li className="mt-16 d-flex gap-8">
                                <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                                <p className="text-large">It will take a few minutes for us to review and approve the new global name or nickname</p>
                            </li>
                            <li className="mt-16 d-flex gap-8">
                                <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                                <p className="text-large">When creating a nickname, please make sure it is free from vulgar language, the official name of Avicoin (ie the name of the product) and the names of other trading platforms.</p>
                            </li>
                        </ul>
                        <button className="mt-40 tf-btn lg">Done</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ChangeName