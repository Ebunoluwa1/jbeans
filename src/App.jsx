

// import CookieS from './components/common/cookie'

import { BrowserRouter } from 'react-router'
import { Navbar } from './components/common/navbar'
import { Routes, Route } from "react-router-dom";
import { LandingPage} from './pages';
import Signinpage from './components/common/signinpage';
import ProductListingPage from './components/product/productListing';
import ProductDetailPage from './components/product/productdetailPage';
import SignUp from './components/common/signup';
import ForgotPassword from './components/common/forgotpassword';
import AuthRoute from './components/services/authRoute';
import UpdatePassword from './components/common/updatePassword';




function App() {

  return (
    <BrowserRouter >

      <Navbar />
      
         <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path='/products/:slug' element={<ProductDetailPage />} />
            </Route>
           
           <Route path="/sign-in" element={<Signinpage />} />
             <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />

         </Routes>
           {/* <AuthStatus /> */}
       {/* <CookieS /> */}
     </BrowserRouter>
  )
}

export default App
