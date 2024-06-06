import React from 'react'
const Welcome = () => {
  return (
    <>
      {/* <!-- preloade --> */}
      <div className="preload preload-container">
        <div className="preload-logo" style={{ backgroundImage: `url('/src/images/logo/144.png')` }}>
          <div className="spinner"></div>
        </div>
      </div>
      {/* <!-- /preload -->  */}
      <div className="header">
        <a href="/Login" className="right">Skip</a>
      </div>

      <div className="wrap-boarding">
        <div className="tf-container">
          <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div className="banner-boarding mt-30">
              <img src='/src/images/banner/boarding1.jpg' alt="img" />
              <svg xmlns="http://www.w3.org/2000/svg" width="375" height="440" viewBox="0 0 390 440" fill="none">
                <g filter="url(#filter0_f_1_12302)">
                  <path d="M317.593 220.084C162.184 337.75 264.912 337.75 199.927 337.75C134.941 337.75 260.61 361.432 82.2598 220.084C-96.0904 78.7354 134.941 102.417 199.927 102.417C264.912 102.417 473.002 102.417 317.593 220.084Z" fill="url(#paint0_linear_1_12302)" />
                </g>
                <defs>
                  <filter id="filter0_f_1_12302" x="-84" y="0.925049" width="558" height="438.317" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_12302" />
                  </filter>
                  <linearGradient id="paint0_linear_1_12302" x1="329.25" y1="100.925" x2="182.611" y2="397.934" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E250E5" />
                    <stop offset="1" stop-color="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="content mb-32">
              <h2 className="text-center">Welcome to Cointex Crypto Wallet app</h2>
              <p className="mt-8 text-center text-large">Discover the world of cryptocurrencies and manage your assets securely and conveniently.</p>
              <a href="/boarding" className="tf-btn primary md mt-40">Next </a>
              <p className="mt-20 text-center mb-35">By creating an account, you’re agree to out <a href="#notiPrivacy" className="text-white" data-bs-toggle="modal">Privacy policy</a>  and <a href="#notiPrivacy" className="text-white" data-bs-toggle="modal">Term of use</a> </p>
            </div>


          </div>


        </div>
      </div>

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

export default Welcome