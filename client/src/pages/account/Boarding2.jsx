const Boarding2 = () => {
  return (
    <>
      {/* <!-- preloade --> */}
      <div className="preload preload-container">
        <div className="preload-logo" style={{ backgroundImage: `url('/src/images/logo/144.png')` }}>
          <div className="spinner"></div>
        </div>
      </div>
      {/* <!-- /preload -->  */}
      <div className="wrap-boarding">
        <div className="tf-container">
          <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div className="banner-boarding2 mt-20">
              <img src="/src/images/banner/boarding3.jpg" alt="img" />
              <svg xmlns="http://www.w3.org/2000/svg" width="375" height="335" viewBox="0 0 381 335" fill="none">
                <g opacity="0.8" filter="url(#filter0_f_1_12068)">
                  <path d="M269.131 167.427C182.034 233.37 239.606 233.37 203.186 233.37C166.765 233.37 237.195 246.642 137.241 167.427C37.2862 88.2118 166.765 101.483 203.186 101.483C239.606 101.483 356.228 101.483 269.131 167.427Z" fill="url(#paint0_linear_1_12068)" />
                </g>
                <defs>
                  <filter id="filter0_f_1_12068" x="0.106079" y="0.647461" width="400.637" height="333.559" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_12068" />
                  </filter>
                  <linearGradient id="paint0_linear_1_12068" x1="275.664" y1="100.647" x2="193.485" y2="267.1" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E250E5" />
                    <stop offset="1" stop-color="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="content mb-32">
              <h2 className="text-center">A Fantastic Experience with Cointex!</h2>
              <p className="mt-8 text-center text-large">Explore the diverse features of Cointex. Send and receive funds, track transaction history, create new wallets, and much more. </p>
              <a href="Login" className="tf-btn primary md mt-40">Get Started </a>
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

export default Boarding2