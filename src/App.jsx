

// import CookieS from './components/common/cookie'
import { Navbar } from './components/common/navbar'
import { Routes, Route } from "react-router-dom";
import { LandingPage, SignIn } from './pages';



function App() {

  return (
    <div>

      <Navbar />
      
         <Routes>
            
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
         </Routes>
       {/* <CookieS /> */}
     </div>
  )
}

export default App
