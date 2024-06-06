import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FadeLoader from 'react-spinners/FadeLoader';
const AssetsRatings = () => {
    const [loading, setLoading] = useState(false);
    const [list1, setList1] = useState(null);
    const [list2, setList2] = useState(null);
    const [list3, setList3] = useState(null);
    const [list4, setList4] = useState(null);
    const [list5, setList5] = useState(null);
    const [details, setDetails] = useState({
        name: '',
        images: '',
        symbol: '',
        current_price: '',
        market_cap: '',
        lastTradindVolume24: '',
        pricePercentage: ''
    });
    useEffect(() => {
        setLoading(true);
        try {
            const getToken = async () => {
                if (!list1) {
                    axios.get('/tokens').then(({ data }) => {
                        if (data) {
                            const listTokens = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h
                                    })
                                }
                                return (
                                    <li className="mt-10" key={index}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#tokenDetails" class="coin-item style-2 gap-12">
                                            <h4 class="text-primary">{index}</h4>
                                            <div class="content">
                                                <p>
                                                    <span class="mb-4 text-button fw-6">{token.symbol.toUpperCase()}</span>
                                                    <span class="text-secondary">/ USDT</span>
                                                </p>
                                                <div class="d-flex align-items-center gap-12">
                                                    <div class="box-price">
                                                        <p class="text-small">${token.market_cap}</p>
                                                        <p class="mt-4 text-secondary">${token.current_price}</p>
                                                    </div>
                                                    {token.price_change_percentage_24h > 1 ? <span class="coin-btn increase">{token.price_change_percentage_24h}%</span> : <span class="coin-btn decrease">{token.price_change_percentage_24h}%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const tokenIncrease = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h
                                    })
                                }
                                if (token.price_change_percentage_24h > 1) {
                                    return (
                                        <li className="mt-20" key={index}>
                                            <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#tokenDetails" class="coin-item style-2 gap-12">
                                                <h4 class="text-primary">{index}</h4>
                                                <div class="content">
                                                    <p>
                                                        <span class="mb-4 text-button fw-6">{token.symbol.toUpperCase()}</span>
                                                        <span class="text-secondary">/ USDT</span>
                                                    </p>
                                                    <div class="d-flex align-items-center gap-12">
                                                        <div class="box-price">
                                                            <p class="text-small">{token.current_price}</p>

                                                        </div>
                                                        {<span class="coin-btn increase">{token.price_change_percentage_24h}%</span>}
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                }
                            })

                            const discountToken = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h
                                    })
                                }
                                return (
                                    <li className="mt-30" key={index}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#tokenDetails" class="coin-item style-2 gap-12">
                                            <h4 class="text-primary">{index}</h4>
                                            <div class="content">
                                                <p>
                                                    <span class="mb-4 text-button fw-6">{token.symbol.toUpperCase()}</span>
                                                    <span class="text-secondary">/ USDT</span>
                                                </p>
                                                <div class="d-flex align-items-center gap-12">
                                                    <div class="box-price">
                                                        <p class="text-small">{token.current_price}</p>

                                                    </div>
                                                    {<span class="coin-btn increase">{token.price_change_percentage_24h}%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const newToken = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h
                                    })
                                }
                                return (
                                    <li className="mt-10" key={index}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#tokenDetails" class="coin-item style-2 gap-12">
                                            <h4 class="text-primary">{index}</h4>
                                            <div class="content">
                                                <p>
                                                    <span class="mb-4 text-button fw-6">{token.symbol.toUpperCase()}</span>
                                                    <span class="text-secondary">/ USDT</span>
                                                </p>
                                                <div class="d-flex align-items-center gap-12">
                                                    <div class="box-price">
                                                        <p class="text-small">${token.market_cap}</p>
                                                        <p class="mt-4 text-secondary">${token.current_price}</p>
                                                    </div>
                                                    {token.price_change_percentage_24h > 1 ? <span class="coin-btn increase">{token.price_change_percentage_24h}%</span> : <span class="coin-btn decrease">{token.price_change_percentage_24h}%</span>}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })

                            const massToken = data.tokens.map((token, index) => {
                                const updateT = () => {
                                    setDetails({
                                        name: token.name,
                                        images: token.image,
                                        symbol: token.symbol,
                                        current_price: token.current_price,
                                        market_cap: token.market_cap,
                                        lastTradindVolume24: token.price_change_24h,
                                        pricePercentage: token.price_change_percentage_24h
                                    })
                                }
                                return (
                                    <li key={index}>
                                        <a onClick={updateT} data-bs-toggle="modal" data-bs-target="#tokenDetails" class="coin-item justify-content-between">
                                            <div class="d-flex align-items-center gap-12 flex-1">
                                                <h4 class="text-primary">{index}</h4>
                                                <p>
                                                    <span class="mb-4 text-button fw-6">{token.symbol.toLocaleUpperCase()}</span>
                                                    <span class="text-secondary">/ USDT</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center flex-st2">
                                                <span class="text-small">${token.high_24h}</span>
                                                <div class="text-end">
                                                    {token.price_change_percentage_24h > 1 ? <p class="text-button text-primary">{token.price_change_percentage_24h}</p> : <p class="text-button text-red">{token.price_change_percentage_24h}</p>}
                                                    <p class="mt-4 text-secondary">${token.current_price}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                            setList1(listTokens.slice(0, 21));
                            setList2(tokenIncrease);
                            setList3(discountToken.slice(10, 41));
                            setList4(newToken.slice(50, 95))
                            setList5(massToken);
                            setLoading(false);
                        } else {
                            console.log('Data not found')
                        }
                    })
                }
            }
            getToken();
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
    }, [])

    const e = localStorage.getItem('email');
    if (!e) {
        location.href = '/login';
    }
    console.log(details);
    return (
        <>
            <div class="header fixed-top bg-surface d-flex justify-content-center align-items-center">
                <a href="javascript:void(0);" class="left back-btn"><i class="icon-left-btn"></i></a>
                <h3>Cryptex rating</h3>
            </div>
            <div class="pt-45 pb-16">
                <div class="tf-container">
                    <div class="mt-8">
                        <div class="swiper swiper-wrapper-r market-swiper line-bt" data-space-between="20" data-preview="auto">
                            <div class="swiper-wrapper menu-tab-v3" role="tablist">
                                <div class="swiper-slide nav-link active" data-bs-toggle="tab" data-bs-target="#popular" role="tab" aria-controls="popular" aria-selected="true">
                                    Popular |
                                </div>
                                <div class="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#tokenIncrease" role="tab" aria-controls="tokenIncrease" aria-selected="false">
                                    Token Increase |
                                </div>
                                <div class="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#cryptocurrency" role="tab" aria-controls="cryptocurrency " aria-selected="false">
                                    Discount Cryptocurrency |
                                </div>
                                <div class="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#newToken" role="tab" aria-controls="newToken" aria-selected="false">
                                    New token |
                                </div>
                                <div class="swiper-slide nav-link" data-bs-toggle="tab" data-bs-target="#mass" role="tab" aria-controls="mass" aria-selected="false">
                                    Mass
                                </div>
                            </div>
                        </div>

                        <div class="tab-content mt-8 mb-16">
                            <div class="tab-pane fade show active" id="popular" role="tabpanel">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex gap-12">
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterCryptocurrency" class="dom-text">USDT</a><i class="icon-select-down"></i>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="icon-funnel fs-20 text-white" data-bs-toggle="modal" data-bs-target="#filter"></a>
                                </div>
                                <div class="d-flex justify-content-between text-xsmall mt-16">
                                    <span>Name</span>
                                    <p class="d-flex gap-20">
                                        <span>Market Cap(USD)</span>
                                        <span>Current price</span>
                                        <span>change</span>
                                    </p>
                                </div>
                                <FadeLoader
                                    color="#36d7b7"
                                    loading={loading}
                                    speedMultiplier={3}
                                    style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                                />
                                <ul class="mt-12">
                                    {list1}
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="tokenIncrease" role="tabpanel">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex gap-12">
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterCryptocurrency" class="dom-text">USDT</a><i class="icon-select-down"></i>
                                        </div>
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterTime" class="text-val-time">Today</a><i class="icon-select-down"></i>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="icon-funnel fs-20 text-white" data-bs-toggle="modal" data-bs-target="#filter"></a>
                                </div>
                                <div class="d-flex justify-content-between text-xsmall mt-16">
                                    <span>Name</span>
                                    <p class="d-flex gap-20">
                                        <span>Last price</span>
                                        <span>change</span>
                                    </p>
                                </div>
                                <ul class="mt-12">
                                    {list2}
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="cryptocurrency" role="tabpanel">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex gap-12">
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterCryptocurrency" class="dom-text">USDT</a><i class="icon-select-down"></i>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="icon-funnel fs-20 text-white" data-bs-toggle="modal" data-bs-target="#filter"></a>
                                </div>
                                <div class="d-flex justify-content-between text-xsmall mt-16">
                                    <span>Name</span>
                                    <p class="d-flex gap-20">
                                        <span>Last price</span>
                                        <span>change</span>
                                    </p>
                                </div>
                                <ul class="mt-12">
                                    {list3}
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="newToken" role="tabpanel">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center gap-4">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterCryptocurrency" class="dom-text">USDT</a><i class="icon-select-down"></i>
                                    </div>
                                    <a href="javascript:void(0);" class="icon-funnel fs-20 text-white" data-bs-toggle="modal" data-bs-target="#filter"></a>
                                </div>
                                <div class="d-flex justify-content-between text-xsmall mt-16">
                                    <span>Name</span>
                                    <p class="d-flex gap-20">
                                        <span>Last price</span>
                                        <span>change</span>
                                    </p>
                                </div>
                                <FadeLoader
                                    color="#36d7b7"
                                    loading={loading}
                                    speedMultiplier={3}
                                    style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
                                />
                                <ul class="mt-12">
                                    {list4}
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="mass" role="tabpanel">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex gap-12">
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterCryptocurrency" class="dom-text">USDT</a><i class="icon-select-down"></i>
                                        </div>
                                        <div class="d-flex align-items-center gap-4">
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#filterTime2" class="text-val-currency">24H</a><i class="icon-select-down"></i>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="icon-funnel fs-20 text-white" data-bs-toggle="modal" data-bs-target="#filter"></a>
                                </div>
                                <div class="d-flex justify-content-between text-xsmall mt-16">
                                    <p class="flex-1">Name</p>
                                    <p class="d-flex justify-content-between flex-st2">
                                        <span>24h</span>
                                        <span>Change/Last price</span>
                                    </p>
                                </div>
                                <ul class="mt-12">
                                    {list5}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- filter popular --> */}
            <div class="modal fade action-sheet" id="filter">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span>Filters</span>
                            <span class="icon-cancel" data-bs-dismiss="modal" aria-hidden="true"></span>
                        </div>
                        <div class="modal-body">
                            <div class="text-button fw-6 text-white">Time</div>
                            <ul class="grid-2 rcg-12-16 mt-16">
                                <li><a href="javascript:void(0);" class="tf-btn xs line active text-secondary item-time">All</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Top</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Meme</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Hong Kong Concept </a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">GameFi</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">NFT</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Layer 2</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Storage</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">DeFi</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-time">Fan Token</a></li>
                            </ul>
                            <div class="text-button fw-6 text-white mt-16">Market capitalization ($)</div>
                            <ul class="grid-2 rcg-12-16 mt-16">
                                <li><a href="javascript:void(0);" class="tf-btn xs line active text-secondary item-category">All</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-category"> 15 Billion</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-category">10-50 Billion</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-category">5-10 Billion</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-category">10-50 Billion</a></li>
                                <li><a href="javascript:void(0);" class="tf-btn xs line text-secondary item-category">5-10 Billion</a></li>

                            </ul>
                            <div class="mt-16 pt-16 line-t grid-2 gap-16">
                                <a href="javascript:void(0);" class="tf-btn sm secondary" data-bs-dismiss="modal">Reset</a>
                                <a href="javascript:void(0);" class="tf-btn sm primary" data-bs-dismiss="modal">Apply</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- filter cryptocurrency --> */}
            <div class="modal fade action-sheet" id="filterCryptocurrency">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span>Cryptocurrency</span>
                            <span class="icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <ul class="mt-20 pb-16">
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">USDT <i class="icon icon-check-circle"></i> </div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check dom-value">USDC <i class="icon icon-check-circle"></i></div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check dom-value">Cryptocurrency <i class="icon icon-check-circle"></i></div></li>
                            <li data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check dom-value">USD <i class="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- filter time --> */}
            <div class="modal fade action-sheet" id="filterTime">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span>Cryptocurrency</span>
                            <span class="icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <ul class="mt-20 pb-16">
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex justify-content-between align-items-center gap-8 text-large item-check active time-val">Today <i class="icon icon-check-circle"></i> </div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check time-val">5 Minutes <i class="icon icon-check-circle"></i></div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check time-val">1 Hour <i class="icon icon-check-circle"></i></div></li>
                            <li data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check time-val">This week <i class="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- filter time 2--> */}
            <div class="modal fade action-sheet" id="filterTime2">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span>Cryptocurrency</span>
                            <span class="icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <ul class="mt-20 pb-16">
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex justify-content-between align-items-center gap-8 text-large item-check active currency-val">24H <i class="icon icon-check-circle"></i> </div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check currency-val">5 Minutes <i class="icon icon-check-circle"></i></div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check currency-val">1 Hour <i class="icon icon-check-circle"></i></div></li>
                            <li class="line-bt" data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check currency-val">This week <i class="icon icon-check-circle"></i></div></li>
                            <li data-bs-dismiss="modal"><div class="d-flex  justify-content-between gap-8 text-large item-check currency-val">This month <i class="icon icon-check-circle"></i></div></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- connect wallet --> */}
            <div className="modal fade action-sheet" id="connectWallet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="icon-cancel" data-bs-dismiss="modal" aria-hidden="true"></span>
                        </div>
                        <div className="modal-body text-center">
                            <span className="logo icon-wallet"></span>
                            <h3 className="mt-4">Connect Wallet</h3>
                            <p className="mt-12 text-white text-large">Please connect by entering an existing wallet or create a new one.</p>
                            <div className="mt-32">
                                <a href="javascript:void(0);" className="tf-btn sm secondary d-inline-flex" data-bs-toggle="modal" data-bs-target="#keyWallet">Create wallet</a>
                                <a href="javascript:void(0);" className="mt-12 tf-btn sm dark d-inline-flex" data-bs-toggle="modal" data-bs-target="#keyWallet">Enter a wallet</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- key wallet --> */}
            <div className="modal fade action-sheet" id="keyWallet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>Select input method</span>
                            <span className="icon-cancel" data-bs-dismiss="modal" aria-hidden="true"></span>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li className="accent-box-v3 bg-surface tf-list-item-v3" data-bs-toggle="modal" data-bs-target="#inflation">
                                    <div className="content">
                                        <h5><a href="#">Keyless wallet</a></h5>
                                        <p className="mt-8 text-small text">Create an MPC wallet with your platform account.</p>
                                    </div>
                                    <span className="icon icon-mpc"></span>
                                </li>
                                <li className="mt-8 accent-box-v3 bg-surface tf-list-item-v3" data-bs-toggle="modal" data-bs-target="#inflation">
                                    <div className="content">
                                        <h5><a href="#">Seed phrase</a></h5>
                                        <p className="mt-8 text-small text">Create wallet using seed phrase</p>
                                    </div>
                                    <span className="icon icon-phrase"></span>
                                </li>
                                <li className="mt-8 accent-box-v3 bg-surface tf-list-item-v3" data-bs-toggle="modal" data-bs-target="#inflation">
                                    <div className="content">
                                        <h5><a href="#">Hardware wallet connection</a></h5>
                                        <p className="mt-8 text-small text">Connect hardware wallet via bluetooth</p>
                                    </div>
                                    <span className="icon icon-bluetooth"></span>
                                </li>
                                <li className="mt-8 accent-box-v3 bg-surface tf-list-item-v3" data-bs-toggle="modal" data-bs-target="#inflation">
                                    <div className="content">
                                        <h5><a href="#">Private key</a></h5>
                                        <p className="mt-8 text-small text">Paste or enter private key</p>
                                    </div>
                                    <span className="icon-key"></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- token Details --> */}
            <div className="modal fade action-sheet sheet-down" id="tokenDetails">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="header d-flex justify-content-center align-items-center">
                            <span className="left icon-cancel" data-bs-dismiss="modal"></span>
                        </div>
                        <div className="pt-45 pb-90">
                            <div className="tf-container">
                                <p className="text-center text-small mt-4">Current Price(USD)</p>
                                <h1 className="mt-8 text-center">${details.current_price}</h1>
                                <div className="mt-12 accent-box-v3 bg-menuDark">
                                    <div className="pb-10 line-bt">
                                        <div className="mt-4 card-item">
                                            <img src={details.images} alt="img" style={{ height: "50px" }} className="img" />
                                            <div className="content flex-grow-1">
                                                <p className="text-large text-white">{details.name}</p>
                                                <p>${details.lastTradindVolume24}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mt-12 accent-box-v4 bg-menuDark">
                                    <li className="d-flex align-items-center justify-content-between pb-8 line-bt">
                                        <span className="text-small">Transaction fee</span>
                                        <span className="text-large text-white">Free</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
                                        <span className="text-small">Price Change 24h (%) </span>
                                        {details.pricePercentage > 1 ? <span className="text-large text-white coin-btn increase text-end">{details.pricePercentage}</span> : <span className="text-large text-white coin-btn decrease text-end">{details.pricePercentage}</span>}
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
                                        <span className="text-small">Market Cap(USD)</span>
                                        <span className="text-large text-white">${details.market_cap}</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between pt-8 pb-8">
                                        <span className="text-small">Symbol</span>
                                        <span className="text-large text-white">{details.symbol.toLocaleUpperCase()}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="menubar-footer footer-fixed bg-surface">
                            <div className="inner-bar">
                                <a href="javascript:void(0);" className="tf-btn lg primary" data-bs-toggle="modal" data-bs-target="#connectWallet">Buy Assets</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetsRatings