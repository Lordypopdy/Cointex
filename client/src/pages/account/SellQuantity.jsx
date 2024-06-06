import React from 'react'

const SellQuantity = () => {
  const e = localStorage.getItem('email');
  if(!e){
      location.href = '/login';
  }
  return (
   <>
   <div class="header fixed-top bg-surface d-flex justify-content-between align-items-center">
        <a href="javascript:void(0);" class="left back-btn"><i class="icon-left-btn"></i></a>
        <a href="/home" class="right"><i class="icon-home2 fs-20"></i></a>
    </div>
    <div class="pt-45 pb-16">
        <div class="tf-container">
          <div class="mt-4 coin-item style-2 gap-8">
            <img src="/src/images/coin/coin-1.jpg" alt="img" class="img" />
            <h5>Sell BTC</h5>
          </div>
          <div class="mt-16 d-flex justify-content-between">
            <span>I want to pay</span>
            <span class="text-primary d-flex align-items-center gap-4">By quantity <i class="icon-leftRight"></i></span>
          </div>
          <div class="mt-8 group-ip-select">
                <input type="text" placeholder="Please enter quantity" />
                <div class="select-wrapper">
                    <select class="tf-select">
                        <option value="">VND</option>
                        <option value="">BTC</option>
                    </select>
                </div>  
          </div>
          <ul class="mt-8 d-flex gap-8">
            <li>
              <a href="#" class="tag-sm dark">25%</a>
            </li>
            <li>
              <a href="#" class="tag-sm dark">50%</a>
            </li>
            <li>
              <a href="#" class="tag-sm dark">75%</a>
            </li>
            <li>
              <a href="#" class="tag-sm dark">100%</a>
            </li>
          </ul>
          <p class="mt-8">188.308-300.000,000 USD</p>
          <a href="/ChoosePayment" class="tf-btn lg primary mt-40">Sell</a>
        </div>
    </div>

   </>
  )
}

export default SellQuantity