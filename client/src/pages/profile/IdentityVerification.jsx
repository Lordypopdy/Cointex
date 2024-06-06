import React from 'react'

const IdentityVerification = () => {
    const e = localStorage.getItem('email');
    if(!e){
        location.href = '/login';
    }
  return (
    <>
     <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Identity verification</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <h3 className="mt-4 text-center">Have your Citizen ID ready</h3>
            <div className="text-center mt-60 mb-60">
                <svg width="126" height="97" viewBox="0 0 126 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104.929 11.2283L66.3465 11.1299V14.4567H104.929C107.606 14.4567 109.772 16.622 109.772 19.2992V77.37C109.772 80.0472 107.606 82.2126 104.929 82.2126H21.0709C18.3937 82.2126 16.2283 80.0472 16.2283 77.37V19.2992C16.2283 16.622 18.3937 14.4567 21.0709 14.4567H59.063L58.9646 11.1299L21.0709 11.2283C16.622 11.2283 13 14.8504 13 19.2992V77.37C13 81.8189 16.622 85.4409 21.0709 85.4409H104.929C109.378 85.4409 113 81.8189 113 77.37V19.2992C113 14.8504 109.378 11.2283 104.929 11.2283Z" fill="white"/>
                    <path d="M63 17.685C65.6772 17.685 67.8425 15.5197 67.8425 12.8425C67.8425 10.1654 65.6772 8 63 8C60.3229 8 58.1575 10.1654 58.1575 12.8425C58.1575 15.5197 60.3229 17.685 63 17.685ZM63 11.2283C63.8858 11.2283 64.6142 11.9567 64.6142 12.8425C64.6142 13.7283 63.8858 14.4567 63 14.4567C62.1142 14.4567 61.3858 13.7283 61.3858 12.8425C61.3858 11.9567 62.1142 11.2283 63 11.2283ZM22.6851 74.1417H64.6142V30.5787H22.6851V74.1417ZM30.7362 70.9134C30.7362 63.8071 36.5236 58.0197 43.6299 58C50.7362 58 56.5236 63.7874 56.5236 70.9134H30.7362ZM38 49.1417C38 46.0315 40.5394 43.4921 43.6496 43.4921C46.7599 43.4921 49.2992 46.0315 49.2992 49.1417C49.2992 52.252 46.7599 54.7913 43.6496 54.7913C40.5394 54.7716 38 52.252 38 49.1417ZM25.8937 33.8071H61.3858V70.9134H59.7717C59.7717 64.0433 55.4607 58.1968 49.4173 55.874C51.3071 54.2402 52.5276 51.8386 52.5276 49.1417C52.5276 44.2402 48.5512 40.2638 43.6496 40.2638C38.7677 40.2638 34.7717 44.2402 34.7717 49.1417C34.7717 51.8386 35.9725 54.2402 37.8819 55.874C31.8386 58.1968 27.5276 64.063 27.5276 70.9134H25.9134V33.8071H25.8937ZM71.0709 33.8071H103.335V37.0354H71.0709V33.8071ZM71.0709 45.1063H103.335V48.3346H71.0709V45.1063ZM71.0709 56.3858H103.335V59.6142H71.0709V56.3858ZM87.1929 67.685H90.4213V70.9134H87.1929V67.685ZM80.7362 67.685H83.9646V70.9134H80.7362V67.685ZM93.6496 67.685H96.878V70.9134H93.6496V67.685Z" fill="white"/>
                    <path d="M124 2L124 37" stroke="white" stroke-width="3"/>
                    <path d="M124 2H89" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M2 2L2 37" stroke="white" stroke-width="3"/>
                    <path d="M2 2H37" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M124 95L124 60" stroke="white" stroke-width="3"/>
                    <path d="M124 95H89" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M2 95L2 60" stroke="white" stroke-width="3"/>
                    <path d="M2 95H37" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path opacity="0.8" d="M102 56.5C78.8775 57.2325 78.8725 90.765 102 91.5C125.122 90.7675 125.128 57.235 102 56.5Z" fill="#25C866"/>
                    <path opacity="0.8" d="M111.634 68.8263L99.5188 80.9413C99.2844 81.1756 98.9665 81.3072 98.6351 81.3072C98.3036 81.3072 97.9857 81.1756 97.7513 80.9413L92.3663 75.5563C91.2038 74.4275 93.0038 72.625 94.1338 73.7888L98.6338 78.2888L109.866 67.0588C110.996 65.8963 112.798 67.6963 111.634 68.8263Z" fill="white"/>
                </svg>
            </div>
            <ul>
                <li className="d-flex align-items-center gap-8">
                    <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                    <p className="text-large text-white">Use original papers and make sure every corner is visible.</p>
                </li>
                <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                    <p className="text-large text-white">Check the light to prevent glare or reflections.</p>
                </li>
                <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                    <p className="text-large text-white">Hold the device firmly to avoid blurred images.</p>
                </li>
            </ul>
             <a href="/CameraScan" className="tf-btn lg primary mt-40">Next</a>   
        </div>
    </div>
    </>
  )
}

export default IdentityVerification