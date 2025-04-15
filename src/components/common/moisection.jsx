import React from 'react';
import cheesy from '../../assets/cheesymoimoi.jpg'
import egg from '../../assets/eggmoimoi.jpeg';
import mackerel from '../../assets/mackerelfish.jpg';
import spicy from '../../assets/spicymincedmeat.jpeg';
import { Link } from 'react-router';

const Moisection = () => {
  return (
   <div className='container flex flex-col  lg:flex-row flex-shrink-0 justify-center items-center gap-4 '>

        <div className='w-full text-center md:w-[80%] md:text-center lg:w-[50%] lg:text-left '>
            <p className='text-5xl'> Handcrafted MoinMoin</p>
            <p className='my-2 '> A Taste of Tradition, Made with Love - Pick from our everyday favourites of tasty frozen ready meals.
            </p>
        </div>

     {/* grid */}
     <div className='grid grid-cols-1 w-full  md:grid-cols-2 md:gap-6 lg:grid-cols-2 gap-5 lg:w-[50%]'>
        <Link to='products/MoiMoi' className='rounded-lg bg-[#FCE5CD]'>
            <img className='w-full h-48 rounded-sm hover:opacity-70  transition-transform duration-300 transform' src={cheesy}  /> 
            <div className='text-center my-4'>
              <p className='text-[#3A2829] text-sm md:text-base'>Cheesy Moimoi - £5.0 GBP </p>
                <small className='text-[#3A2829] text-center'>You have to select 6 variants
                </small>
            </div>
          </Link>

          <div className='rounded-lg bg-[#FCE5CD]'>
            <img className='w-full transition-transform duration-300 transform h-48 hover:opacity-70 rounded-sm' src={egg}  /> 
            <div className='text-center my-4'>
              <p className='text-[#3A2829] text-sm md:text-base'>Egg Moimoi - £5.0 GBP </p>
                <small className='text-[#3A2829] text-center'>You have to select 6 variants
                </small>
            </div>
          </div>
          
           <Link to='products/MoiMoi' className='rounded-lg bg-[#FCE5CD]'>
            <img className='w-full h-48 rounded-sm transition-transform duration-300 transform hover:opacity-70' src={mackerel}  /> 
            <div className='text-center my-4'>
              <p className='text-[#3A2829] text-sm md:text-base'>Mackerel Moimoi - £5.0 GBP </p>
                <small className='text-[#3A2829] text-center'>You have to select 6 variants
                </small>
            </div>
          </Link>
          <Link to='products/MoiMoi' className='rounded-lg bg-[#FCE5CD]'>
              <img className='w-full h-48 rounded-sm transition-transform duration-300 transform hover:opacity-70' src={spicy}  /> 
              <div className='text-center my-4'>
                <p className='text-[#3A2829] text-sm md:text-base'>Spicy Moimoi - £5.0 GBP </p>
                  <small className='text-[#3A2829] text-center'>You have to select 6 variants
                  </small>
              </div>
            </Link>
     </div>
   </div>
  );
}

export default Moisection;
