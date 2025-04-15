import React from 'react';
import logo from '../assets/logo.png'
import ImgCard from '../components/common/imgcard';
import { useState, useEffect } from 'react';
import { Link} from 'react-router';



const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    
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
                   
                    <Link to='/' className='font-bold text-[#3A2829] text-center flex items-center justify-center cursor-pointer hover:opacity-45'>
                        < > 
                            <ImgCard src={logo} className=' w-14 '  /> 
                       
                        <span className='italic font-medium '>Just</span>Beans!
                         </>
                    </Link>
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
                              <h2 className="text-2xl md:text-3xl font-bold text-[#3A2829] text-center my-4">About Us </h2>
                          </div>    
                              <div className=' mx-auto text-center text-wrap'>
                                <p>Here, we’re rooted in tradition and driven by simplicity. Inspired by Moin Moin, a cherished dish from West Africa, we set out to share this plant-based delight with the world. It is made from real ingredients, prepared with care, and crafted for the modern lifestyle. JustBeans brings authentic flavor and wholesome nutrition to your table in minutes.
                             </p>
                             <p>At JustBeans, we believe that healthy eating should be simple and delicious. That's why every serving of our Moin Moin is packed with natural goodness, so you can enjoy a meal that's not just good for you, but also easy to love. Whether you're on the go or sitting down for a meal with family, we’ve got you covered with wholesome, feel-good food.</p>
                              <div className='text-bold text-2xl  font-bold text-[#3A2829 my-4'>Our mission:  </div> 
                              <ul>
                                <li>Is to introduce the world to healthy, plant-based meals rooted in African tradition.</li>
                                <li>To make authentic, nutritious food accessible to everyone, while promoting sustainability and simplicity.</li>
                              </ul>

                               </div>
                        
                    </div>
             </div>
        </div>
    
            )
            }
     </div>
    // <div className=''>
    //     <h2 className="text-2xl md:text-3xl font-bold text-[#3A2829] text-center my-4">About Us </h2>

    // </div>
  );
}

export default About;
