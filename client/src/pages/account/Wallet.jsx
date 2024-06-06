import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FadeLoader from 'react-spinners/FadeLoader';


const Wallet = () => {
    const [loading, setLoading] = useState(false);
    const [list1, setList1] = useState(null);

    const [details, setDetails] = useState({
        name: '',
        images: '',
        symbol: '',
        current_price: '',
        market_cap: '',
        lastTradindVolume24: '',
        pricePercentage: '',
        ath_change_percentage: ''
    });



    useEffect(() => {
        setLoading(true);
        try {
            const getToken = async () => {
                if (!list1) {
                    axios.get('/tokens').then(({ data }) => {
                        if (data) {
                            console.log(data);
                            const tokenList1 = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h,
                                        ath_change_percentage: token.ath_change_percentage
                                    })
                                }

                                return (
                                    <li key={index} style={{ marginTop: '9px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item style-1 gap-12 bg-surface">
                                            <img src={token.image} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">{token.name}</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> {token.symbol.toUpperCase()} {token.high_24h}</p>
                                                    <p className="text-end"><span className="text-red">-</span>{token.low_24h}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            setList1(tokenList1.slice(0, 21));
                            setLoading(false);
                        }
                    })
                }
            }
            getToken();
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }
    }, [])


    const { user } = useContext(UserContext);
    const e = localStorage.getItem('email');
    if (!e) {
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
            <div className="header-style2 fixed-top bg-menuDark">
                <div className="d-flex justify-content-between align-items-center">
                    <a className="box-account" href="/UserInfo">
                        <img src="/src/images/avt/avt2.jpg" alt="img" className="avt" />
                        <div className="info">
                            <p className="text-xsmall text-secondary">Welcome back!</p>
                            <h5 className="mt-4">{!!user && user.name}</h5>

                        </div>
                    </a>
                    <div className="d-flex align-items-center gap-8">
                        <a href="choose-cryptocurrency.html" className="icon-search"></a>
                        <a href="#notification" className="icon-noti box-noti" data-bs-toggle="modal"></a>
                    </div>
                </div>
            </div>
            <div className="pt-68 pb-80">
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <h5><span className="text-primary">My Wallet</span> - <a href="#" className="choose-account" data-bs-toggle="modal" data-bs-target="#accountWallet"><span className="dom-text">Account 1 </span> &nbsp;<i className="icon-select-down"></i></a> </h5>
                        <h1 className="mt-16"><a href="#">$2159,34</a></h1>
                        <ul className="mt-16 grid-4 m--16">
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-way"></i></span>
                                    Send
                                </a>
                            </li>
                            <li>
                                <a href="/AddressScan" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-way2"></i></span>
                                    Receive
                                </a>
                            </li>
                            <li>
                                <a href="/BuyQuantity" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-wallet"></i></span>
                                    Buy
                                </a>
                            </li>
                            <li data-bs-toggle="modal" data-bs-target="#walletHistory">
                                <a href="javascript:void(0);" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-history"></i></span>
                                    History
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Latest recipient</h5>
                            <a href="#recipient" data-bs-toggle="modal" className="text-secondary">View All</a>
                        </div>
                        <ul className="mt-16 grid-5 gap-12">
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                    <img src="/src/images/avt/avt3.jpg" alt="img" className="box-round" />
                                    <p className="text-center">Jane Cooper</p>
                                </a>
                            </li>
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <img src="/src/images/avt/avt4.jpg" alt="img" className="box-round" />
                                    <p className="text-center">Wade Warren</p>

                                </a>
                            </li>
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <img src="/src/images/avt/avt5.jpg" alt="img" className="box-round" />
                                    <p className="text-center">Jenny Wilson</p>
                                </a>
                            </li>
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <img src="/src/images/avt/avt6.jpg" alt="img" className="box-round" />
                                    <p className="text-center">Jenny Wilson</p>
                                </a>
                            </li>
                            <li>
                                <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <img src="/src/images/avt/avt7.jpg" alt="img" className="box-round" />
                                    <p className="text-center">Robert Fox</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-menuDark tf-container">
                    <div className="tf-tab pt-12 mt-4">
                        <div className="tab-slide">
                            <ul className="nav nav-tabs wallet-tabs" role="tablist" >
                                <li className="item-slide-effect"></li>
                                <li className="nav-item active" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#history">Contracts</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#market">Market</button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content pt-16 pb-16">
                            <div className="tab-pane fade active show" id="history" role="tabpanel">
                                <ul>
                                    <li>
                                        <a href="/ChoosePayment" className="coin-item style-1 gap-12 bg-surface">
                                            <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> BTC 0.0056</p>
                                                    <p className="text-end"><span className="text-red">-</span> $950.50</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="/ChoosePayment" className="coin-item style-1 gap-12 bg-surface">
                                            <img src="/src/images/coin/coin-2.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Withdraw</p>
                                                    <span className="text-secondary">1:12 PM</span>
                                                </div>

                                                <p className="text-small"><span className="text-red">-</span> 2,700.00</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="/ChoosePayment" className="coin-item style-1 gap-12 bg-surface">
                                            <img src="/src/images/coin/coin-3.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary">12:00 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="/ChoosePayment" className="coin-item style-1 gap-12 bg-surface">
                                            <img src="/src/images/coin/coin-4.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Anchor</p>
                                                    <span className="text-secondary">12:00 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="market" role="tabpanel">
                                <ul>
                                <FadeLoader
                                        color="#36d7b7"
                                        loading={loading}
                                        speedMultiplier={3}
                                        style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                                    />
                                    {list1}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menubar-footer footer-fixed">
                <ul className="inner-bar">
                    <li>
                        <a href="/Home">
                            <i className="icon icon-home2"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/Exchange">
                            <i className="icon icon-exchange"></i>
                            Exchange
                        </a>
                    </li>
                    <li>
                        <a href="/Earn">
                            <i className="icon icon-earn"></i>
                            Earn
                        </a>
                    </li>
                    <li className="active">
                        <a href="/Wallet">
                            <i className="icon icon-wallet2"></i>
                            Wallet
                        </a>
                    </li>
                </ul>
            </div>

            {/* <!-- account --> */}
            <div className="modal fade action-sheet" id="accountWallet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>Wallet</span>
                            <span className="icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <ul className="mt-20 pb-16">
                            <li data-bs-dismiss="modal"><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">Account 1 <i className="icon icon-check-circle"></i> </div></li>
                            <li className="mt-4" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Account 2 <i className="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* <!-- history --> */}
            <div className="modal fade modalRight" id="walletHistory">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true"><i className="icon-left-btn"></i></span>
                            <h3>History</h3>
                            <span className="right text-white btn-filter-history"><i className="icon-funnel"></i></span>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                <ul className="mt-4">
                                    <li>
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> BTC 0.0056</p>
                                                    <p className="text-end"><span className="text-red">-</span> $950.50</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-2.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Withdraw</p>
                                                    <span className="text-secondary">1:12 PM</span>
                                                </div>

                                                <p className="text-small"><span className="text-red">-</span> 2,700.00</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-3.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary">12:00 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-2.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Deposit</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <p className="text-small"><span className="text-primary">+</span> 2,700.00</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> BTC 1,45</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12847.594</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Bitcoin</p>
                                                    <span className="text-secondary">11:34 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> BTC 32,766</p>
                                                    <p className="text-end"><span className="text-red">-</span> $23.0983,28</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-3.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Ethereum</p>
                                                    <span className="text-secondary">12:00 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a href="#" className="coin-item style-1 gap-12 bg-menuDark">
                                            <img src="/src/images/coin/coin-4.jpg" alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-large">Anchor</p>
                                                    <span className="text-secondary">12:00 AM</span>
                                                </div>
                                                <div className="box-price">
                                                    <p className="text-small mb-4"><span className="text-primary">+</span> ETH 1,498</p>
                                                    <p className="text-end"><span className="text-red">-</span> $12948,68</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- filter history --> */}
            <div className="modal fade action-sheet" id="filterHistory">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>Filters</span>
                            <span className="icon-cancel" data-bs-dismiss="modal" aria-hidden="true"></span>
                        </div>
                        <div className="modal-body">
                            <div className="text-button fw-6 text-white">Time</div>
                            <ul className="grid-2 rcg-12-16 mt-16">
                                <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-time">All</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">24 Hours</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">7 Days</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">12 Days </a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">30 Days</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">3 Month</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">6 Month</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">12 Month</a></li>
                            </ul>
                            <div className="text-button fw-6 text-white mt-16">Categories</div>
                            <ul className="grid-2 rcg-12-16 mt-16">
                                <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-category">All</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Transfer money</a></li>
                                <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Receive money</a></li>
                            </ul>
                            <div className="mt-16 pt-16 line-t grid-2 gap-16">
                                <a href="javascript:void(0);" className="tf-btn sm secondary" data-bs-dismiss="modal">Delete</a>
                                <a href="javascript:void(0);" className="tf-btn sm primary" data-bs-dismiss="modal">Apply</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- recipient --> */}
            <div className="modal fade modalRight" id="recipient">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true"><i className="icon-left-btn"></i></span>
                            <h3>Latest recipient</h3>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                <ul className="mt-12 grid-4 rg-16 cg-25">
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt7.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Jane Cooper</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt8.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Wade Warren</p>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt5.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Esther Howard</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt9.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Jenny Wilson</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt10.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Arlene McCoy</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt11.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Eleanor Pena</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt12.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Esther Howard</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt13.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Theresa Webb</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt14.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Ronald Richards</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt15.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Robert Fox</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt16.jpg" alt="img" className="box-round" />
                                            <p className="text-center">William son</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt17.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Kristin Watson</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt18.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Brooklyn Sim</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt19.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Guy Hawkins</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt20.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Dianne Russell</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt2.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Marvin Kinney</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt21.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Darrell Steward</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt22.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Court Henry</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt23.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Kathryn Murphy</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt24.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Annette Black</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt25.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Jenny Wilson</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt26.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Jane Cooper</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt27.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Bessie Cooper</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ChoosePayment" className="tf-list-item d-flex flex-column gap-4 align-items-center">
                                            <img src="/src/images/avt/avt28.jpg" alt="img" className="box-round" />
                                            <p className="text-center">Savan Nguyen</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* <!--chart detail  --> */}
            <div className="modal fade action-sheet" id="detailChart">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="box-detail-chart">
                            <div className="top">
                                <h3 className="d-flex align-items-center gap-8">{details.symbol.toUpperCase()}/USD<i className="icon-clockwise2 fs-16 text-secondary"></i></h3>
                                <h2 className="mt-4">${details.current_price}</h2>
                                {details.pricePercentage > 1 ? <p className="mt-4"><a className="text-primary">{details.pricePercentage}</a>&emsp;Last 24 hours</p> : <p className="mt-4"><a className="text-red">{details.pricePercentage}</a>&emsp;Last 24 hours</p>}
                            </div>
                            <div className="content">
                                <div className="tab-content mt-8 mb-16">
                                    <div className="tab-pane fade" id="1h" role="tabpanel">
                                        <div className="area-chart-1"></div>
                                    </div>
                                    <div className="tab-pane fade show active" id="1d" role="tabpanel">
                                        <div className="area-chart-2"></div>
                                    </div>
                                    <div className="tab-pane fade" id="1w" role="tabpanel">
                                        <div className="area-chart-3"></div>
                                    </div>
                                    <div className="tab-pane fade" id="1m" role="tabpanel">
                                        <div className="area-chart-4"></div>
                                    </div>
                                    <div className="tab-pane fade" id="6m" role="tabpanel">
                                        <div className="area-chart-5"></div>
                                    </div>
                                    <div className="tab-pane fade" id="1y" role="tabpanel">
                                        <div className="area-chart-6"></div>
                                    </div>
                                </div>
                                <ul className="tab-time" role="tablist">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#1h" role="tab" aria-controls="1h" aria-selected="false">1H</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a href="#" className="nav-link active" data-bs-toggle="tab" data-bs-target="#1d" role="tab" aria-controls="1d" aria-selected="true">1D</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#1w" role="tab" aria-controls="1w" aria-selected="false">1W</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#1m" role="tab" aria-controls="1m" aria-selected="false">1M</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#6m" role="tab" aria-controls="6m" aria-selected="false">6M</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#1y" role="tab" aria-controls="1y" aria-selected="false">1Y</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom">
                                <h6 className="text-button">Token information</h6>
                                <ul className="mt-16 d-flex gap-16">
                                    <li className="flex-1">
                                        <a href="#" className="accent-box-v6 bg-surface d-flex justify-content-between align-items-center">
                                            <div className="content">
                                                <p className="text-small">{details.symbol.toLocaleUpperCase()} <span className="text-extra-small text-secondary">/ USD</span></p>
                                                {details.pricePercentage > 1 ? <span className="d-inline-block mt-8 coin-btn increase">{details.pricePercentage}</span> : <span className="d-inline-block mt-8 coin-btn decrease">{details.pricePercentage}</span>}
                                            </div>
                                            <span className="icon-arr-right fs-12"></span>
                                        </a>
                                    </li>
                                    <li className="flex-1">
                                        <a href="#" className="accent-box-v6 bg-surface d-flex justify-content-between align-items-center">
                                            <div className="content">
                                                <p className="text-small">{details.name}</p>
                                                {details.ath_change_percentage > 1 ? <span className="d-inline-block mt-8 coin-btn increase">{details.ath_change_percentage}</span> : <span className="d-inline-block mt-8 coin-btn decrease">{details.ath_change_percentage}</span>}
                                            </div>
                                            <span className="icon-arr-right fs-12"></span>
                                        </a>
                                    </li>
                                </ul>
                                <button className="mt-20">Buy Assets</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <!-- notification --> */}
            <div className="modal fade modalRight" id="notification">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                            <span className="left" data-bs-dismiss="modal" aria-hidden="true"><i className="icon-left-btn"></i></span>
                            <h3>Notification</h3>
                        </div>
                        <div className="overflow-auto pt-45 pb-16">
                            <div className="tf-container">
                                <ul className="mt-12">
                                    <li>
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt d-flex">
                                                <p className="text-button fw-6">Cointex to just tick size and trading amount precision of spots/margins and perpetual swaps</p>
                                                <i className="dot-lg bg-primary"></i>
                                            </div>
                                            <span className="d-block mt-8">5 minutes ago</span>
                                        </a>
                                    </li>
                                    <li className="mt-12">
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt d-flex">
                                                <p className="text-button fw-6">Cointex to adjust components of several indexes</p>
                                                <i className="dot-lg bg-primary"></i>
                                            </div>
                                            <span className="d-block mt-8">5 minutes ago</span>
                                        </a>
                                    </li>
                                    <li className="mt-12">
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt d-flex">
                                                <p className="text-button fw-6">Cointex to just tick size and trading amount precision of spots/margins and perpetual swaps</p>
                                                <i className="dot-lg bg-primary"></i>
                                            </div>
                                            <span className="d-block mt-8">5 minutes ago</span>
                                        </a>
                                    </li>
                                    <li className="mt-12">
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt">
                                                <p className="text-button fw-6 text-secondary">Cointex to adjust components of several indexes</p>
                                            </div>
                                            <span className="d-block mt-8 text-secondary">1 day ago</span>
                                        </a>
                                    </li>
                                    <li className="mt-12">
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt">
                                                <p className="text-button fw-6 text-secondary">Cryptex wallet uses Achain network service</p>
                                            </div>
                                            <span className="d-block mt-8 text-secondary">1 day ago</span>
                                        </a>
                                    </li>
                                    <li className="mt-12">
                                        <a href="#" className="noti-item bg-menuDark">
                                            <div className="pb-8 line-bt">
                                                <p className="text-button fw-6 text-secondary">Cointex to adjust components of several indexes</p>
                                            </div>
                                            <span className="d-block mt-8 text-secondary">1 day ago</span>
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

export default Wallet