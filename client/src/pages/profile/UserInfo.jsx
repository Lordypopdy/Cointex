import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
const UserInfo = () => {
    const {user} = useContext(UserContext);
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
    return (
        <>
            {/* <!-- preloade --> */}
            <div className="preload preload-container">
                <div className="preload-logo" style={{ backgroundImage: `url('/src/images/logo/144.png')` }}>
                    <div className="spinner"></div>
                </div>
            </div>
            {/* <!-- /preload -->  */}
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="#" className="left back-btn"><i className="icon-left-btn"></i></a>
                <a href="/AddressScan" className="right text-secondary"><i className="icon-barcode"></i></a>
            </div>
            <div className="pt-45 pb-16">
                <div className="bg-menuDark tf-container">
                    <a href="/Profile" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <div className="box-account">
                            <img src="/src/images/avt/avt2.jpg" alt="img" className="avt" />
                            <div className="info">
                                <h5>{!!user && user.name}</h5>
                                <p className="text-small text-secondary mt-8 mb-8">Profile and settings</p>
                                <span className="tag-xs style-2 round-2 red">Unverified</span>
                            </div>
                        </div>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>

                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Buy cryptocurrencies</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#cryptocurrency" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center" data-bs-toggle="modal">
                                    <i className="icon icon-currency"></i>
                                    Currency
                                </a>
                            </li>
                            <li>
                                <a href="/Exchange" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-swap"></i>
                                    Exchange
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Exchange</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-convert"></i>
                                    Convert
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-metalogo"></i>
                                    Consign
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-bank"></i>
                                    Deposit
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-fileText"></i>
                                    Futures contract
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-graph"></i>
                                    Ageless
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-grid-nine"></i>
                                    Choice
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-game-control"></i>
                                    Simulated trading
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-robot"></i>
                                    Bot
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center text-break text-center">
                                    <i className="icon icon-database"></i>
                                    Copy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5>Help center</h5>
                        <ul className="mt-16 grid-3 gap-12">
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <i className="icon icon-globe"></i>
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <i className="icon icon-headset"></i>
                                    Support
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <a href="#" className="pt-12 pb-12 mt-4 d-flex justify-content-between align-items-center">
                        <h5>About Cointex</h5>
                        <span className="arr-right"><i className="icon-arr-right"></i></span>
                    </a>

                </div>
            </div>

            {/* <!--cryptocurrency --> */}
            <div className="modal fade modalRight" id="cryptocurrency">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true"><i className="icon-left-btn"></i></span>
                            <h3>Choose cryptocurrency</h3>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                <div className="mt-8 search-box box-input-field">
                                    <i className="icon-search"></i>
                                    <input type="text" placeholder="Search cryptocurrency" required className="clear-ip" />
                                    <i className="icon-close"></i>
                                </div>
                                <h5 className="mt-12">Popular search</h5>
                                <ul className="mt-16">
                                    <li>
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-3.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary text-small">ETH</span>
                                                </div>
                                                <span className="text-small">$30.776,93</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary text-small">BTC</span>
                                                </div>
                                                <span className="text-small">$1.936,79</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-14.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">TetherUS</p>
                                                    <span className="text-secondary text-small">USDT</span>
                                                </div>
                                                <span className="text-small">$0,999999</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-7.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">BNB</p>
                                                    <span className="text-secondary text-small">BNB</span>
                                                </div>
                                                <span className="text-small">$243,41</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-9.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ripple</p>
                                                    <span className="text-secondary text-small">XRP</span>
                                                </div>
                                                <span className="text-small">$0,487814</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-4.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Cardano</p>
                                                    <span className="text-secondary text-small">ADA</span>
                                                </div>
                                                <span className="text-small">$0,294842</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-11.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">BUSD</p>
                                                    <span className="text-secondary text-small">BUSD</span>
                                                </div>
                                                <span className="text-small">$0,999899</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-8.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">trueUSD</p>
                                                    <span className="text-secondary text-small">TUSD</span>
                                                </div>
                                                <span className="text-small">$0,999999</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-5.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Coin98</p>
                                                    <span className="text-secondary text-small">C98</span>
                                                </div>
                                                <span className="text-small">$0,169888</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-16">
                                        <a href="#" className="coin-item style-2 gap-12">
                                            <img src="/src/images/coin/coin-6.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Kurama</p>
                                                    <span className="text-secondary text-small">KRM</span>
                                                </div>
                                                <span className="text-small">$21.89,39</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo