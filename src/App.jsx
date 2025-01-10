

// import CookieS from './components/common/cookie'
import { Navbar } from './components/common/navbar'
import { Routes, Route } from "react-router-dom";
import { LandingPage} from './pages';
import Signinpage from './components/common/signinpage';
import ProductListingPage from './components/product/productListing';



function App() {

  return (
    <div>

      <Navbar />
      
         <Routes>
            
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<Signinpage />} />
             <Route path="/products" element={<ProductListingPage />} />
         </Routes>
       {/* <CookieS /> */}
     </div>
  )
}

export default App
