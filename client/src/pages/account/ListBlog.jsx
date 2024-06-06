import React from 'react'

const ListBlog = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Hot News</h3>
        <a href="#filter" className="right text-secondary" data-bs-toggle="modal"><i className="icon-funnel"></i></a>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <ul className="mt-12 grid-2 gap-16">
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog1.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Daria Morgen &#8226; Dec 21, 2023 </p>
                            <p className="mt-4">The Nightmare Before Christmas - Bomb Threats and Bitcoin</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog2.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Jane Cooper &#8226; May 19, 2023 </p>
                            <p className="mt-4">The Crypto.com App Introduces Trusted Device Management</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog3.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Wade Warren &#8226; June 9, 2023 </p>
                            <p className="mt-4">Cybersecurity Predictions 2023 – How did we do?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog4.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Esther Howard &#8226; Jan 27, 2023 </p>
                            <p className="mt-4">Cryptocurrency News: Building in Resiliency and International Co-Operation</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog5.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Leslie Alex &#8226; Apr 19, 2023 </p>
                            <p className="mt-4">Blockchain, cryptocurrencies, and mining</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/BlogDetail" className="blog-item">
                        <img src="/src/images/blog/blog6.jpg" alt="img" />
                        <div className="content">
                            <p className="text-xsmall text-secondary title">Jenny Wilson &#8226; May 21, 2023 </p>
                            <p className="mt-4">Security Predictions 2023: how are we doing so far?</p>
                        </div>
                    </a>
                </li>
                
            </ul>
            
        </div>
    </div>

    <div className="modal fade action-sheet" id="filter">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Filters</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <div className="modal-body">
                    <div className="text-small text-white">Time</div>
                    <ul className="grid-2 rcg-12-16 mt-16">
                        <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-time">All</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">1 Hour</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">24 Hour</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">This week</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">This Month</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-time">NFT</a></li>
                    </ul>
                    <div className="text-small text-white mt-16">Categories</div>
                    <ul className="grid-2 rcg-12-16 mt-16">
                        <li><a href="javascript:void(0);" className="tf-btn xs line active text-secondary item-category">All</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Bitcoin</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">ETH</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">NFT</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">Crypto</a></li>
                        <li><a href="javascript:void(0);" className="tf-btn xs line text-secondary item-category">NFT</a></li>
                    </ul>
                    <div className="mt-16 pt-16 line-t grid-2 gap-16">
                        <a href="javascript:void(0);" className="tf-btn sm secondary fw-4" data-bs-dismiss="modal">Reset</a>
                        <a href="javascript:void(0);" className="tf-btn sm primary fw-4" data-bs-dismiss="modal">Apply</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ListBlog