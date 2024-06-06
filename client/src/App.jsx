import React from 'react';
import Earn from './pages/account/Earn';
import Wallet from './pages/account/Wallet';
import Opt02 from './pages/settings/Opt02';
import Profile from './pages/profile/Profile';
import Welcome from './pages/account/Welcome';
import UserInfo from './pages/profile/UserInfo';
import Boarding from './pages/account/Boarding';
import Boarding2 from './pages/account/Boarding2';
import Login from './pages/settings/Login';
import Home from './pages/Home';
import FaceID from './pages/profile/FaceID';
import Option from './pages/settings/Option';
import VerifyID from './pages/profile/VerifyID';
import BlogDetail from './pages/account/BlogDetail';
import Recharge from './pages/account/Recharge';
import Register from './pages/settings/Register';
import Exchange from './pages/account/Exchange';
import ListBlog from './pages/account/ListBlog';
import BuyQuantity from './pages/account/BuyQuantity';
import FaceIdDone from './pages/profile/FaceIdDone';
import RessetPassword from './pages/settings/RessetPassword';
import AddresScan from './pages/account/AddresScan';
import Verification from './pages/profile/Verification';
import NewPassword from './pages/settings/NewPassword';
import CameraScan from './pages/profile/CameraScan';
import ChooseIdentity from './pages/profile/ChooseIdentity';
import ChoosePayment from './pages/account/ChoosePayment';
import CameraSuccess from './pages/profile/CameraSuccess';
import PaymentComfirm from './pages/account/PaymentComfirm';
import TradeExchange from './pages/account/TradeExchange';
import CameraDone from './pages/account/CameraDone';
import VerifyIDScan from './pages/profile/VerifyIDScan';
import ChangeName from './pages/settings/ChangeName';
import TellUsMore from './pages/settings/TellUsMore';
import SellQuantity from './pages/account/SellQuantity';
import AccountFreez from './pages/settings/AccountFreez';
import SecurityCenter from './pages/settings/SecurityCenter';
import AssetsRatings from './pages/account/AssetsRatings';
import ChangePassword from './pages/settings/ChangePassword';
import VerificationDone from './pages/profile/VerificationDone';
import AddressVerification from './pages/account/AddressVerification';
import PersonalVerification from './pages/account/PersonalVerification';
import VerificationComfirm from './pages/profile/VerificationComfirm';
import VerificationAdvance from './pages/profile/VerificationAdvance';
import IdentityVerification from './pages/profile/IdentityVerification';
import ChooseVerification from './pages/profile/ChooseVerification';
import NewPasswordSucces from './pages/settings/NewPasswordSucces';
import ExchangeTradeApprove from './pages/account/ExchangeTradeApprove';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/UserContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/Profile' element={<Profile />} />
            <Route path='/UserInfo' element={<UserInfo />} />
            <Route path='/Earn' element={<Earn />} />
            <Route path='/Otp02' element={<Opt02 />} />
            <Route path='/Wallet' element={<Wallet />} />
            <Route index element={<Welcome />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Option' element={<Option />} />
            <Route path='/FaceID' element={<FaceID />} />
            <Route path='/FaceIdDone' element={<FaceIdDone />} />
            <Route path='/ListBlog' element={<ListBlog />} />
            <Route path='/Recharge' element={<Recharge />} />
            <Route path='/Exchange' element={<Exchange />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/VerifyID' element={<VerifyID />} />
            <Route path='/Boarding2' element={<Boarding2 />} />
            <Route path='/BlogDetail' element={<BlogDetail />} />
            <Route path='/Boarding' element={<Boarding />} />
            <Route path='/AddressScan' element={<AddresScan />} />
            <Route path='/BuyQuantity' element={<BuyQuantity />} />
            <Route path='/NewPassword' element={<NewPassword />} />
            <Route path='/CameraScan' element={<CameraScan />} />
            <Route path='/CameraDone' element={<CameraDone />} />
            <Route path='/TellUsMore' element={<TellUsMore />} />
            <Route path='/assetsRatings' element = {<AssetsRatings />} />
            <Route path='/Verification' element={<Verification />} />
            <Route path='/CameraSuccess' element={<CameraSuccess />} />
            <Route path='/TradeExchange' element={<TradeExchange />} />
            <Route path='/RessetPassword' element={<RessetPassword />} />
            <Route path='/ChoosePayment' element={<ChoosePayment />} />
            <Route path='/PaymentComfirm' element={<PaymentComfirm />} />
            <Route path='/ChooseIdentity' element={<ChooseIdentity />} />
            <Route path='/VerifyIDScan' element={<VerifyIDScan />} />
            <Route path='/ChangeName' element={<ChangeName />} />
            <Route path='/AccountFreez' element={<AccountFreez />} />
            <Route path='/SecurityCenter' element={<SecurityCenter />} />
            <Route path='/ChangePassword' element={<ChangePassword />} />
            <Route path='/VerificationDone' element={<VerificationDone />} />
            <Route path='/AddressVerification' element={<AddressVerification />} />
            <Route path='/PersonalVerification' element={<PersonalVerification />} />
            <Route path='/VerificationComfirm' element={<VerificationComfirm />} />
            <Route path='/VerificationAdvance' element={<VerificationAdvance />} />
            <Route path='/ChooseVerification' element={<ChooseVerification />} />
            <Route path='/NewPasswordSuccess' element={<NewPasswordSucces />} />
            <Route path='/SellQuantity' element={<SellQuantity />} />
            <Route path='/IdentityVerification' element={<IdentityVerification />} />
            <Route path='/ExchangeTradeApprove' element={<ExchangeTradeApprove />} />
        </Route>
    )
)

const App = () => {
    return (
  
            <UserContextProvider>
            <RouterProvider router={router} />
            <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
            </UserContextProvider>
     
    )
}

export default App