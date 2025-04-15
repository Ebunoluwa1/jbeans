import React from 'react';
import ImgCard from './../common/imgcard';
import logo from './../../assets/logo.png';
import { useState, useEffect } from 'react';
import CartHeader from './cartHeader';

import Home from '../../pages/home';
import { Outlet ,Link} from 'react-router';
import CartTab from './cartTab';
import { useSelector , useDispatch} from 'react-redux';
import { toggleStatusTab } from '../stores/cart';

// Product Listing Page
const ProductListingPage = () => {
    
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
 const timer = setTimeout(() => {
  //setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);

const statusTabCart = useSelector(store => store.cart.statusTab);

console.log("StatusTabCart:", statusTabCart);

  return (
 <div className='font-sans '>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD] '>
            <div className='flex items-center text-center justify-center h-8 w-full'>
               
                <div className='font-bold text-[#3A2829] text-center flex items-center justify-center cursor-pointer hover:opacity-45'>
                    <Link to='/' className=''> 
                        <ImgCard src={logo} className=' w-14 '  /> 
                    </Link>
                    <span className='italic font-medium '>Just</span>Beans!
                </div>
           </div>
        </div>
       {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-10 h-10 border-4 border-t-[#FCE5CD] border-gray-300 rounded-full animate-spin"></div>
        </div> ) 
        : (
    <div 
     className='relative z-10'
     aria-labelledby='modal-title'
     role='dialog'
     aria-modal='true'>
         <div className='inset-0 bg-opacity-75'>
                <div className=' inset-0 '>
                    <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-8'>
                            <div className='bg-opacity-75'>
                                    <div className={`transform transition-transform duration-500 ${statusTabCart === false ? "" : "-translate-x-56" }} `}>
                                        

                                     <CartHeader />

                                      <Outlet />
                                     <CartTab />
                                     {/* Product Grid and product card */}
                                      <Home />
                                    </div>
                                  
                                  
                                      
                                   
                            </div>
                    </div>
                </div>
         </div>
    </div>

        )
        }
 </div>
   
  );
};


export default ProductListingPage;

// // Footer
// const Footer = () => {
//   return (
//     <footer>
//       {/* Quick Links */}
//       <nav>
//         <a href="/privacy-policy">Privacy Policy</a>
//         <a href="/terms-of-service">Terms of Service</a>
//         <a href="/faqs">FAQs</a>
//       </nav>

//       {/* Social Media Icons */}
//       <div className="social-media-icons">
//         <a href="https://facebook.com">Facebook</a>
//         <a href="https://twitter.com">Twitter</a>
//       </div>

//       {/* Newsletter Signup */}
//       <form className="newsletter-signup">
//         <label>
//           Subscribe:
//           <input type="email" placeholder="Enter your email" />
//         </label>
//         <button type="submit">Sign Up</button>
//       </form>
//     </footer>
//   );
// };

