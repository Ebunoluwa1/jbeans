import React from 'react';
import ImgCard from './../common/imgcard';
import logo from './../../assets/logo.png';
import { useState, useEffect } from 'react';
import m4 from '../../assets/product.jpg'
import m5 from '../../assets/jb-flour.jpeg'
import m6 from '../../assets/jb-washedbean.jpeg'

// Product Listing Page
const ProductListingPage = () => {
 const [isLoading, setIsLoading] =useState(true);

 const product = [
    { img: m5,
      name: "JB-Flour",
      content: "JB-Flour is used in making the best Frozen beans fritter (akara), it is made up of combining the JB-flour garnished with peppers and aromatics, fried to perfection.",
      price:"1.5",
    },
     { img: m6,
      name: "JB-Rawbeans",
        content: "JB-Rawbeans is used in making the best bean pudding or beans fritter, it is made up of combining the Rawbean garnished with peppers and aromatics, fried to perfection.",
      price:"1.3",
    },
    { img: m4,
      name: "JB-Product",
       content: "JB-Rawbeans is used in making the best bean pudding or beans fritter, it is made up of combining the Rawbean garnished with peppers and aromatics, fried to perfection.",
      price:"1.8",
    },
   
   ];

   useEffect(() => {
 const timer = setTimeout(() => {
  //setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);


  return (
 <div className='font-sans '>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD] '>
            <div className='flex items-center text-center justify-center h-8 w-full'>
               
                <div className='font-bold text-[#3A2829] text-center flex items-center justify-center cursor-pointer hover:opacity-45'>
                    <div className=''> 
                        <ImgCard src={logo} className=' w-14 '  /> 
                    </div>
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
         <div className='fixed inset-0 bg-opacity-75'>
                <div className='fixed inset-0 '>
                    <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-8'>
                            <div className=''>
                                    <div className='bg-opacity-75  '>
                                            {/* Sidebar Filters */}
                                        {/* <aside className="filters">
                                            Filters for categories, price, popularity 
                                            <h3>Filter By</h3>
                                            <div>
                                                <label>
                                                    <input type="checkbox" /> Category
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Price Range
                                                </label>
                                                <label>
                                                    <input type="checkbox" /> Popularity
                                                </label>
                                            </div>
                                        </aside>  */}

                                {/* Product Grid and product card */}
                               <main className="flex flex-wrap justify-center items-center gap-8 mt-8">
                                   
                                   {product.map((prod, index) => (
                                    <div key={prod.index} className="w-[90%] sm:w-[45%] lg:w-[30%] rounded-lg shadow-xl mt-16">
                                        <img src={prod.img} alt={prod.name} className='rounded-t-lg'/>
                                        <div className='p-2'>
                                        <h4 className='font-bold pt-4 pb-2 px-4 text-left '>{prod.name}</h4>
                                        <p className='text-left px-4'>{prod.content}</p>
                                        <p>${prod.price}</p>
                                        <button className='' onClick>Add to Cart</button>
                                        </div>
                                    </div>
                                    ))} 
                                </main>  
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

