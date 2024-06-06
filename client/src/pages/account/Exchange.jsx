import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FadeLoader from 'react-spinners/FadeLoader';

const Exchange = () => {
    const e = localStorage.getItem('email');
    if (!e) {
        location.href = '/login';
    }

    const [loading, setLoading] = useState(false);
    const [list1, setList1] = useState(null);
    const [list2, setList2] = useState(null);
    const [list3, setList3] = useState(null);
    const [list4, setList4] = useState(null);
    const [list5, setList5] = useState(null);
    const [tokens, setTokens] = useState([]);
    const [search, setSearch] = useState('');

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

                            setTokens(data);
                            setList1(tokenList1);
                            setList2(tokenList2.slice(0, 9));
                            setList3(tokenList3.slice(50, 80))
                            setList4(tokenList4.slice(70, 99))
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

    const searchFunction = (e)=>{
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        const filteredItem = tokens.tokens.filter((token)=>
            token.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        
        if(filteredItem.length > 0){
            const tokenList1 = filteredItem.map((filteredItem, index) => {
                const updateT = () => {
                    setDetails({
                        name: filteredItem.name,
                        images: filteredItem.image,
                        symbol: filteredItem.symbol,
                        current_price: filteredItem.current_price,
                        market_cap: filteredItem.market_cap,
                        lastTradindVolume24: filteredItem.price_change_24h,
                        pricePercentage: filteredItem.price_change_percentage_24h,
                        ath_change_percentage: filteredItem.ath_change_percentage
                    })
                }

                return (
                    <li key={index} style={{ marginTop: '18px' }}>
                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#detailChart" className="coin-item style-2 gap-12">
                            <img src={filteredItem.image} alt="img" className="img" />
                            <div className="content">
                                <div className="title">
                                    <p className="mb-4 text-button">{filteredItem.symbol.toUpperCase()}</p>
                                    <span className="text-secondary">${filteredItem.market_cap}M</span>
                                </div>
                                <div className="d-flex align-items-center gap-12">
                                    <span className="text-small">${filteredItem.current_price}</span>
                                    {filteredItem.price_change_percentage_24h > 1 ? <span className="coin-btn increase">{filteredItem.price_change_percentage_24h}2%</span> : <span className="coin-btn decrease">{filteredItem.price_change_percentage_24h}2%</span>}
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })
            setList1(tokenList1);
        }
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
            <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
                <h3 className="d-flex gap-12">
                    <a href="#">Market</a>
                    <a href="/TradeExchange" className="text-secondary">Trade</a>
                </h3>
                <i className="icon-funnel text-white" data-bs-toggle="modal" data-bs-target="#filter"></i>
            </div>
            <div className="pt-55 pb-80">
                <div className="tf-container">
                    <div className="mt-20">
                        <div className="line-bt">
                            <div className="swiper swiper-wrapper-r market-swiper" data-space-between="20" data-preview="auto">
                                <div className="swiper-wrapper menu-tab-v3" role="tablist">
                                    <div className="swiper-slide nav-link active" style={{ marginRight: '10px' }} data-bs-toggle="tab" data-bs-target="#all" role="tab" aria-controls="all" aria-selected="true">
                                        All
                                    </div>
                                    <div className="swiper-slide nav-link" style={{ marginRight: '10px' }} data-bs-toggle="tab" data-bs-target="#favorites" role="tab" aria-controls="favorites" aria-selected="false">
                                        <i className="icon-star"></i>
                                        Favorites
                                    </div>
                                    <div className="swiper-slide nav-link" style={{ marginRight: '10px' }} data-bs-toggle="tab" data-bs-target="#attractive" role="tab" aria-controls="attractive" aria-selected="false">
                                        Attractive
                                    </div>
                                    <div className="swiper-slide nav-link" style={{ marginRight: '10px' }} data-bs-toggle="tab" data-bs-target="#meme" role="tab" aria-controls="meme" aria-selected="false">
                                        Meme
                                    </div>
                                    <div className="swiper-slide nav-link" style={{ marginRight: '10px' }} data-bs-toggle="tab" data-bs-target="#staking" role="tab" aria-controls="staking" aria-selected="false">
                                        Staking
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-content mt-8 mb-16">
                            <div className="tab-pane fade show active" id="all" role="tabpanel">
                                <div className="mt-4 search-box box-input-field">
                                    <a href="home-search.html" className="icon-search"></a>
                                    <input 
                                    type="text" 
                                    placeholder="Swap over 100+ tokens on more than 10 chains" 
                                    required 
                                    className="clear-ip" 
                                    value={search}
                                    onChange={searchFunction}
                                    />
                                    <i className="icon-close"></i>
                                </div>
                                <div className="d-flex justify-content-between">
                                    Name/Market
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
                                    {list1}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="favorites" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name/Market
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list2}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="attractive" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name/Market
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list4}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="meme" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name/Market
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list3}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="staking" role="tabpanel">
                                <div className="d-flex justify-content-between">
                                    Name/Market
                                    <p className="d-flex gap-8">
                                        <span>Current Price(USD)/</span>
                                        <span>Change(%)</span>
                                    </p>
                                </div>
                                <ul className="mt-16">
                                    {list5}
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
                    <li className="active">
                        <a href="/Exchange">
                            <i className="icon icon-exchange"></i>
                            Exchange
                        </a>
                    </li>
                    <li>
                        <a href="/Earn">
                            <i className="icon icon-earn2"></i>
                            Earn
                        </a>
                    </li>
                    <li>
                        <a href="Wallet">
                            <i className="icon icon-wallet"></i>
                            Wallet
                        </a>
                    </li>
                </ul>
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

            {/* <!-- modal Filters--> */}
            <div className="modal fade action-sheet" id="filter">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>Filters</span>
                            <span className="icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <ul className="mt-20 pb-16">
                            <li>
                                <div className="item-check active coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-3.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Ethereum
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-11.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Arbitrum
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-12.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        zkSync Era
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-9.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Tron
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-10.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        BNB Chain
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-13.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Polygon
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-1.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Optimism
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-7.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Avalanche C
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-8.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Fantom
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className="item-check coin-item style-2 gap-8">
                                    <img src="/src/images/coin/coin-6.jpg" alt="img" className="img" />
                                    <p className="content text-large">
                                        Conflux eSpace
                                        <i className="icon icon-check-circle"></i>
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Exchange