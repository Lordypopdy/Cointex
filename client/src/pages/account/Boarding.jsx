const Boarding = () => {
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
              <img src="/src/images/banner/boarding2.jpg" alt="img" />
              <svg xmlns="http://www.w3.org/2000/svg" width="375" height="371" viewBox="0 0 390 371" fill="none">
                <g opacity="0.8" filter="url(#filter0_f_1_12104)">
                  <path d="M296.173 185.722C185.542 269.933 258.671 269.933 212.41 269.933C166.148 269.933 255.608 286.881 128.646 185.722C1.68354 84.5628 166.148 101.511 212.41 101.511C258.671 101.511 406.804 101.511 296.173 185.722Z" fill="url(#paint0_linear_1_12104)" />
                </g>
                <defs>
                  <filter id="filter0_f_1_12104" x="-18.5225" y="0.443359" width="454.85" height="370.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_12104" />
                  </filter>
                  <linearGradient id="paint0_linear_1_12104" x1="304.471" y1="100.443" x2="199.186" y2="312.56" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E250E5" />
                    <stop offset="1" stop-color="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="content mb-32">
              <h2 className="text-center">Top-notch Security and Safety!</h2>
              <p className="mt-8 text-center text-large">With advanced encryption technology, your information and assets are protected with utmost security. </p>
              <a href="boarding2" className="tf-btn primary md mt-40">Next </a>
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

export default Boarding