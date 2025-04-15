
import { Navbar } from './components/common/navbar'
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage} from './pages';
import Signinpage from './components/common/signinpage';
import ProductListingPage from './components/product/productListing';
import ProductDetailPage from './components/product/productdetailPage';
import SignUp from './components/common/signup';
import ForgotPassword from './components/common/forgotpassword';
import AuthRoute from './components/services/authRoute';
import UpdatePassword from './components/common/updatePassword';
// import Paystack from './components/common/paystack';
import { AnimatePresence } from 'framer-motion';
import About from './pages/about';
import CartTab from './components/product/cartTab';




function App() {
const location = useLocation()

  return (
    < >

      <Navbar />
      <AnimatePresence mode="wait">
      
         <Routes location={location} key={location.pathname}>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path='/about-us' element={<About />} />
              <Route path="/products" element={<ProductListingPage />} />
               <Route path="/cart" element={<CartTab isPageView={true} />}/>
              <Route path='/products/:slug' element={<ProductDetailPage />} />
            </Route>
           
           <Route path="/sign-in" element={<Signinpage />} />
             <Route path="/sign-up" element={<SignUp />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
                {/* <Route path="/paystack" element={<Paystack />} /> */}
         </Routes>
           </AnimatePresence>
           {/* <AuthStatus /> */}
       {/* <CookieS /> */}
     </>
  )
}

export default App
