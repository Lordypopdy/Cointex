import React from 'react'

const RessetPassword = () => {
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
        
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <div className="banner-reset position-relative text-center mt-60">
                <img src="/src/images/banner/banner2.jpg" alt="img" />
                <svg className="blur" xmlns="http://www.w3.org/2000/svg" width="350" height="301" viewBox="0 0 350 301" fill="none">
                  <g opacity="0.8" filter="url(#filter0_f_1_1698)">
                    <path d="M226.051 150.5C160.067 200.368 203.683 200.368 176.092 200.368C148.5 200.368 201.857 210.404 126.133 150.5C50.4085 90.5959 148.5 100.632 176.092 100.632C203.683 100.632 292.034 100.632 226.051 150.5Z" fill="url(#paint0_linear_1_1698)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_1_1698" x="-2" y="0" width="352" height="301" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1698"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_1698" x1="231" y1="100" x2="168.923" y2="225.964" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E250E5"/>
                      <stop offset="1" stop-color="#4B50E6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <a href="#" className="tag-stock">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.08333V8.25C1 8.6537 1.24274 9.01781 1.61538 9.17308L6 11M1 3.08333L5.23077 1.32051C5.72308 1.11538 6.27692 1.11538 6.76923 1.32051L8.5 2.04167M1 3.08333L3.5 4.125M6 5.16667V11M6 5.16667L11 3.08333M6 5.16667L3.5 4.125M6 11L10.3846 9.17308C10.7573 9.01781 11 8.6537 11 8.25V3.08333M11 3.08333L8.5 2.04167M3.5 4.125L8.5 2.04167" stroke="#25C866" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  Free Stock
                </a>
            </div>
            <form action="NewPassword" className="mt-60 mb-16">
              <h2 className="mt-60 text-center">Reset Password</h2>
              <fieldset className="mt-40">
                <label className="label-ip">
                    <p className="mb-8 text-small">Email/PhoneNumber</p>
                    <input type="text" value="themesflat@gmail.com" />
                </label>
              </fieldset>
              <button className="mt-40">Next</button>
            </form>
            
           
        
        </div>
    </div>

    </>
  )
}

export default RessetPassword