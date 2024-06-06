import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FadeLoader from 'react-spinners/FadeLoader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import '../fonts/fonts.css'
import '../fonts/font-icons.css'
import '../css/bootstrap.min.css'
import '../css/styles.css'
import '../css/swiper-bundle.min.css'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [list1, setList1] = useState(null);
    const [list2, setList2] = useState(null);
    const [list3, setList3] = useState(null);
    const [list4, setList4] = useState(null);
    const [list5, setList5] = useState(null);
    const [listMain, setlistMain] = useState({
        btc_price: '',
        btc_symbol: '',
        btc_name: '',
        btc_change_percent: '',
        eth_name: '',
        eth_symbol: '',
        eth_price: '',
        eth_change_percent: '',
        bnb_name: '',
        bnb_symbol: '',
        bnb_price: '',
        bnb_change_percent: '',
        usdt_name: '',
        usdt_symbol: '',
        usdt_price: '',
        usdt_change_percent: '',
        doge_name: '',
        doge_symbol: '',
        doge_price: '',
        doge_change_percent: '',
    });
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


    const e = localStorage.getItem('email');
    if (!e) {
        location.href = '/login';
    }

    useEffect(() => {
        setLoading(true);
        try {
            const getToken = async () => {
                if (!list1) {
                    axios.get('/tokens').then(({ data }) => {
                        if (data) {
                            setlistMain({
                                btc_price: data.tokens[0].current_price,
                                btc_symbol: data.tokens[0].symbol,
                                btc_name: data.tokens[0].name,
                                btc_change_percent: data.tokens[0].market_cap_change_percentage_24h,
                                eth_name: data.tokens[1].name,
                                eth_symbol: data.tokens[1].symbol,
                                eth_price: data.tokens[1].current_price,
                                eth_change_percent: data.tokens[1].market_cap_change_percentage_24h,
                                bnb_name: data.tokens[3].name,
                                bnb_symbol: data.tokens[3].symbol,
                                bnb_price: data.tokens[3].current_price,
                                bnb_change_percent: data.tokens[3].market_cap_change_percentage_24h,
                                usdt_name: data.tokens[2].name,
                                usdt_symbol: data.tokens[2].symbol,
                                usdt_price: data.tokens[2].current_price,
                                usdt_change_percent: data.tokens[2].market_cap_change_percentage_24h,
                                doge_name: data.tokens[8].name,
                                doge_symbol: data.tokens[8].symbol,
                                doge_price: data.tokens[8].current_price,
                                doge_change_percent: data.tokens[8].market_cap_change_percentage_24h,
                            })
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
                                    <li key={index} style={{ marginTop: '18px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item style-2 gap-12">
                                            <img src={token.image} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-button">{token.symbol.toUpperCase()}</p>
                                                    <span className="text-secondary">${token.market_cap}M</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-12">
                                                    <span className="text-small">${token.current_price}</span>
                                                    {token.price_change_percentage_24h > 1 ? <span className="coin-btn increase">{token.price_change_percentage_24h}2%</span> : <span className="coin-btn decrease">{token.price_change_percentage_24h}2%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const tokenList2 = data.tokens.map((token, index) => {
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
                                    <li key={index} style={{ marginTop: '18px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item style-2 gap-12">
                                            <img src={token.image} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-button">{token.symbol.toUpperCase()}</p>
                                                    <span className="text-secondary">${token.market_cap}M</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-12">
                                                    <span className="text-small">${token.current_price}</span>
                                                    {token.price_change_percentage_24h > 1 ? <span className="coin-btn increase">{token.price_change_percentage_24h}2%</span> : <span className="coin-btn decrease">{token.price_change_percentage_24h}2%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const tokenList3 = data.tokens.map((token, index) => {
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
                                    <li key={index} style={{ marginTop: '18px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item style-2 gap-12">
                                            <img src={token.image} alt="img" className="img" />
                                            <div className="content">
                                                <div className="title">
                                                    <p className="mb-4 text-button">{token.symbol.toUpperCase()}</p>
                                                    <span className="text-secondary">${token.market_cap}M</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-12">
                                                    <span className="text-small">${token.current_price}</span>
                                                    {token.price_change_percentage_24h > 1 ? <span className="coin-btn increase">{token.price_change_percentage_24h}2%</span> : <span className="coin-btn decrease">{token.price_change_percentage_24h}2%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const tokenList4 = data.tokens.map((token, index) => {
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
                                    <li key={index} style={{ marginTop: '18px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item justify-content-between">
                                            <div className="d-flex align-items-center gap-12 flex-1">
                                                <h4 className="text-primary">{index}</h4>
                                                <p>
                                                    <span className="mb-4 text-button fw-6">{token.symbol.toLocaleUpperCase()}</span>
                                                    <span className="text-secondary">/ USDT</span>
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-st2">
                                                <span className="text-small">${token.high_24h}</span>
                                                <div className="text-end">
                                                    {token.price_change_percentage_24h > 1 ? <p className="text-button text-primary">{token.price_change_percentage_24h}</p> : <p className="text-button text-red">{token.price_change_percentage_24h}</p>}
                                                    <p className="mt-4 text-secondary">${token.current_price}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const tokenList5 = data.tokens.map((token, index) => {
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
                                    <li key={index} style={{ marginTop: '18px' }}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item justify-content-between">
                                            <div className="d-flex align-items-center gap-12 flex-1">
                                                <h4 className="text-primary">{index}</h4>
                                                <p>
                                                    <span className="mb-4 text-button fw-6">{token.symbol.toLocaleUpperCase()}</span>
                                                    <span className="text-secondary">/ USDT</span>
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-st2">
                                                <span className="text-small">${token.high_24h}</span>
                                                <div className="text-end">
                                                    {token.price_change_percentage_24h > 1 ? <p className="text-button text-primary">{token.price_change_percentage_24h}</p> : <p className="text-button text-red">{token.price_change_percentage_24h}</p>}
                                                    <p className="mt-4 text-secondary">${token.current_price}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                            setList1(tokenList1.slice(60, 80));
                            setList2(tokenList2.slice(0, 9));
                            setList3(tokenList3.slice(0, 9))
                            setList4(tokenList4.slice(0, 11))
                            setList5(tokenList5.slice(50, 60))
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
                <div className="d-flex justify-content-between align-items-center gap-14">
                    <div className="box-account style-2">
                        <a href="/UserInfo">
                            <img src="/src/images/avt/avt2.jpg" alt="img" className="avt" />
                        </a>
                        <div className="search-box box-input-field style-2">
                            <a href="home-search.html" className="icon-search"></a>
                            <input type="text" placeholder="Looking for crypto" required className="clear-ip" />
                            <i className="icon-close"></i>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-8">
                        <a href="/ListBlog" className="icon-gift"></a>
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
                            <li>
                                <a href="/Earn" className="tf-list-item d-flex flex-column gap-8 align-items-center">
                                    <span className="box-round bg-surface d-flex justify-content-center align-items-center"><i className="icon icon-exchange"></i></span>
                                    Earn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="bg-menuDark tf-container">
                    <Swiper
                    slidesPerView={2.7}
                    spaceBetween={12}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                        <div className="pt-12 pb-12 mt-4">
                            <h5>Market</h5>
                            <div className="swiper" >
                                {/* <div className="swiper-wrapper"> */}
                                <SwiperSlide>
                                    <a href="/Exchange" className="coin-box d-block">
                                        <div className="coin-logo">
                                            <img src="/src/images/coin/market-1.jpg" alt="img" className="logo" />
                                            <div className="title">
                                                <p>{listMain.btc_name}</p>
                                                <span>{listMain.btc_symbol.toLocaleUpperCase()}</span>
                                            </div>
                                        </div>
                                        <div className="mt-8 mb-8 coin-chart">
                                            <div id="line-chart-1"></div>
                                        </div>
                                        <div className="coin-price d-flex justify-content-between">
                                            <span>${listMain.btc_price}</span>
                                            <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i>{listMain.btc_change_percent}%</span>
                                        </div>
                                        <div className="blur bg1">
                                        </div>

                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="/Exchange" className="coin-box d-block">
                                        <div className="coin-logo">
                                            <img src="/src/images/coin/market-3.jpg" alt="img" className="logo" />
                                            <div className="title">
                                                <p>Binance</p>
                                                <span>{listMain.bnb_symbol.toUpperCase()}</span>
                                            </div>
                                        </div>
                                        <div className="mt-8 mb-8 coin-chart">
                                            <div id="line-chart-2"></div>
                                        </div>
                                        <div className="coin-price d-flex justify-content-between">
                                            <span>${listMain.bnb_price}</span>
                                            <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i>{listMain.bnb_change_percent}%</span>
                                        </div>
                                        <div className="blur bg2">
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="/Exchange" className="coin-box d-block">
                                        <div className="coin-logo">
                                            <img src="/src/images/coin/coin-3.jpg" alt="img" className="logo" />
                                            <div className="title">
                                                <p>{listMain.eth_name}</p>
                                                <span>{listMain.eth_symbol.toUpperCase()}</span>
                                            </div>
                                        </div>
                                        <div className="mt-8 mb-8 coin-chart">
                                            <div id="line-chart-3"></div>
                                        </div>
                                        <div className="coin-price d-flex justify-content-between">
                                            <span>${listMain.eth_price}</span>
                                            <span className="text-primary d-flex align-items-center gap-2"><i className="icon-select-up"></i>{listMain.eth_change_percent}%</span>
                                        </div>
                                        <div className="blur bg3">
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </div>

                        </div>

                        {/* </div> */}
                        </Swiper>
                    </div>
        
                <div className="bg-menuDark tf-container">
                    <div className="pt-12 pb-12 mt-4">
                        <div className="wrap-filter-swiper">
                            <h5><a href="/assetsRatings" className="cryptex-rating"><i className="icon-star"></i>Cryptex Rating</a></h5>
                            {/* <!-- <div className="swiper swiper-wrapper-r market-swiper" data-space-between="20" data-preview="auto"> --> */}
                            <div className="swiper-wrapper1 menu-tab-v3 mt-12" role="tablist">
                                <div className="swiper-slide1 nav-link active" data-bs-toggle="tab" data-bs-target="#favorites" role="tab" aria-controls="favorites" aria-selected="true">
                                    Favorites
                                </div>
                                <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#top" role="tab" aria-controls="top" aria-selected="false">
                                    Top
                                </div>
                                <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#popular" role="tab" aria-controls="popular" aria-selected="false">
                                    Popular
                                </div>
                                <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#price" role="tab" aria-controls="price" aria-selected="false">
                                    Token price
                                </div>
                                <div className="swiper-slide1 nav-link" data-bs-toggle="tab" data-bs-target="#new" role="tab" aria-controls="new" aria-selected="false">
                                    New token
                                </div>
                            </div>
                            {/* <!-- </div> --> */}
                        </div>
                        <div className="tab-content mt-8">
                            <div className="tab-pane fade show active" id="favorites" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    <FadeLoader
                                        color="#36d7b7"
                                        loading={loading}
                                        speedMultiplier={3}
                                        style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                                    />
                                    {list5}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="top" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list2};
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="popular" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list3}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="price" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list4}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="new" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list1}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menubar-footer footer-fixed">
                <ul className="inner-bar">
                    <li className="active">
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
                    <li>
                        <a href="/Wallet">
                            <i className="icon icon-wallet"></i>
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
                            <li className="mt-4" data-bs-dismiss="modal"><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Account 2<i className="icon icon-check-circle"></i></div></li>
                        </ul>
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

            {/* <!-- noti popup --> */}
            <div className="modal fade modalCenter" id="modalNoti">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-sm">
                        <div className="p-16 line-bt text-center">
                            <h4>“Cointex” Would Like To Send You Notifications</h4>
                            <p className="mt-8 text-large">Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.</p>
                        </div>
                        <div className="grid-2">
                            <a href="#" className="line-r text-center text-button fw-6 p-10 text-secondary btn-hide-modal" data-bs-dismiss="modal" >Don’t Allow</a>
                            <a href="#" className="text-center text-button fw-6 p-10 text-primary btn-hide-modal" data-bs-toggle="modal" data-bs-target="#notiPrivacy"> Allow</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* // // <!-- noti popup 2--> */}
            <div className="modal fade modalCenter" id="notiPrivacy">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-20">
                        <div className="heading">
                            <h3>Privacy</h3>
                            <div className="mt-4 text-small">
                                <p>A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.</p>
                                <p>A mobile privacy app is developed and presented to users so that mobile app developers stay compliant with state, federal, and international laws. As a result, they fulfill the legal requirement to safeguard user privacy while protecting the company itself from legal challenges.</p>
                            </div>
                            <h3 className="mt-12">Authorized Users</h3>
                            <p className="mt-4 text-small">
                                A mobile app privacy policy is a legal statement that must be clear, conspicuous, and consented to by all users. It must disclose how a mobile app gathers, stores, and uses the personally identifiable information it collects from its users.
                            </p>
                            <div className="cb-noti mt-12">
                                <input type="checkbox" className="tf-checkbox" id="cb-ip" />
                                <label for="cb-ip">I agree to the Term of service and Privacy policy</label>
                            </div>

                        </div>
                        <div className="mt-20">
                            <a href="#" className="tf-btn md primary" data-bs-dismiss="modal">I Accept</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home