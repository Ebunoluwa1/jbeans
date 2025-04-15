import React from 'react';
import frozen from '../../assets/frozen akara.jpeg'
import fried from '../../assets/fried akara.jpeg';
import akaraPark from '../../assets/frozenAkara.jpeg';
import { Link } from 'react-router';

 

const Akarasection = () => {
  return (
//    <div className='container flex flex-col  lg:flex-row flex-shrink-0 justify-between items-center gap-10 '>
//       <div className='w-[50%]'>
//          <div className="hidden lg:block opacity-0 transition-opacity duration-700 ease-in-out  lg:opacity-100 ">
//             <img src={akaraPark} className="w-full h-full" alt="Akara Park" />
//      </div>

//       </div>
// {/* */}
//         <div className='w-full text-center lg:w-[50%] md:w-full '>
//             <div className='w-full text-center lg:text-center xl:text-left'>
//                 <p className='text-5xl my-4'> Handcrafted Akara</p>
//                 <p className='my-2 '>Handcrafted Akara – Crispy, Fluffy, and Irresistible- Select from our everyday favourites of tasty frozen ready meals.
//                 </p>
//            </div>

//                 {/* grid */}
//                 <div className='grid grid-cols-1 w-full  md:grid-cols-2 md:gap-6 lg:grid-cols-2 gap-5'>
//                         <div className='rounded-lg bg-[#FCE5CD]'>
//                             <img className='w-full h-48 rounded-sm' src={frozen}  /> 
//                             <div className='text-center my-4'>
//                             <p className='text-[#3A2829] text-sm md:text-base'>Frozen Fresh Akara - £8.55 GBP </p>
//                                 <small className='text-[#3A2829] text-center'>You have 10 pieces in each pkg.
//                                 </small>
//                             </div>
//                         </div>

//                         <div className='rounded-lg bg-[#FCE5CD]'>
//                             <img className='w-full h-48 rounded-sm' src={fried}  /> 
//                             <div className='text-center my-4'>
//                                 <p className='text-[#3A2829] text-sm md:text-base'>Frozen Fried Akara - £11.80 GBP </p>
//                                 <small className='text-[#3A2829] text-center'>You have 10 pieces in each pkg.
//                                 </small>
//                             </div>
//                         </div>
//                 </div>
//         </div>

//    </div>

<div className="container flex flex-col lg:flex-row flex-shrink-0 justify-between items-center gap-10">
  
  {/* Image Section */}
  <div className="w-full lg:w-[50%] flex justify-center">
    {/* Image is visible on large screens but hidden on small */}
    <div className="hidden lg:block opacity-0 transition-opacity duration-700 ease-in-out lg:opacity-100">
      <img src={akaraPark} className="w-full h-auto max-w-md lg:max-w-full hover:scale-105 focus:opacity-80 transition-transform duration-300 transform" alt="Akara Park" />
    </div>
    {/* Smaller image for mobile screens */}
    {/* <div className="block lg:hidden">
      <img src={akaraPark} className="w-full max-w-xs mx-auto" alt="Akara Park" />
    </div> */}
  </div>

  {/* Text & Product Grid */}
  <div className="w-full text-center lg:w-[50%]">
    
    {/* Header */}
    <div className="w-full text-center xl:text-left">
      <p className="text-3xl md:text-5xl my-4">Handcrafted Akara</p>
      <p className="my-2 text-sm md:text-base">
        Handcrafted Akara – Crispy, Fluffy, and Irresistible. Select from our everyday favorites of tasty frozen ready meals.
      </p>
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6 gap-y-6">
      
      {/* Frozen Fresh Akara */}
      <Link to="/products/Frozen%20Akara"  className="rounded-lg bg-[#FCE5CD] shadow-md">
        <img className="w-full h-48 rounded-sm hover:shadow-xl hover:scale-x-110 object-cover focus:opacity-80 transition-transform duration-300 transform" src={frozen} alt="Frozen Fresh Akara" />
        <div className="text-center my-4">
          <p className="text-[#3A2829] text-sm md:text-base">Frozen Fresh Akara - £8.55 GBP</p>
          <small className="text-[#3A2829]">You have 10 pieces in each pkg.</small>
        </div>
      </Link>

      {/* Frozen Fried Akara */}
      <Link to="/products/Fried%20Akara" className="rounded-lg bg-[#FCE5CD] shadow-md">
        <img className="w-full h-48 rounded-sm object-cover hover:shadow-xl hover:scale-x-110 focus:opacity-80 transition-transform duration-300 transform" src={fried} alt="Frozen Fried Akara" />
        <div className="text-center my-4">
          <p className="text-[#3A2829] text-sm md:text-base">Frozen Fried Akara - £11.80 GBP</p>
          <small className="text-[#3A2829]">You have 10 pieces in each pkg.</small>
        </div>
      </Link>

    </div>
  </div>

</div>

  );
}

export default Akarasection;
