import React, {useEffect, useState} from 'react';
import { useParams, Outlet } from 'react-router';
import { product } from './product';
import logo from '../../assets/logo.png'
import ImgCard from './../common/imgcard';
import CartHeader from './cartHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../stores/cart';
import CartTab from './cartTab';

// Product Detail Page
const ProductDetailPage = () => {
  const [detail, setDetail] =useState([]);
   const [quantity, setQuantity] =useState(1);
   const [isLoading, setIsLoading] =useState(true);

  const {slug } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    const findDetail = product.filter(prod => prod.slug === slug);
    if(findDetail.length > 0 ){
      setDetail(findDetail[0])
    } else{
      window.location.href = '/';
    }

    const timer = setTimeout(() => {
  //setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
  },[slug])
 
  const handleMinusQuantity = ()=> {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1 )
  }
  const handlePlusQuantity = ()=> {
    setQuantity(quantity + 1);
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
  }
  
const statusTabCart = useSelector(store => store.cart.statusTab);

console.log("StatusTabCart:", statusTabCart);
  return (
    <div className=''>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD] '>
            <div className='flex items-center text-center justify-center h-8 w-full'>
               
                <div className='font-bold text-[rgb(58,40,41)] text-center flex items-center justify-center cursor-pointer hover:opacity-45'>
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
               <> 
               <div className='inset-0 bg-opacity-75'>
                  <div className=''>
                      <div className='p-4 text-center sm:items-center sm:p-8'>
                    <div className={`transform transition-transform duration-500 ${statusTabCart === false ? "" : "-translate-x-56" }} `}
                     >
                        <CartHeader />
                         <Outlet />
                        <CartTab />
                           <>
        <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          
            {/* Product Image */}
            <img
            src={detail.img} alt={detail.img}
              className="w-full h-[80vh] object-cover"
            />

            {/* Product Information */}
            <div className="p-6 z-10 absolute bg-[#FCE5CD] top-2/3  left-1/2 transform -translate-x-1/2 -translate-y-1/3  bg-opacity-90 w-[90%] sm:w-[70%] rounded-lg shadow-lg ">
              <h1 className="text-2xl font-bold text-gray-800">{detail.name}</h1>
              <p className="mt-4 text-gray-600">{detail.content}</p>
              <p className="text-lg font-semibold text-gray-800">${detail.price}</p>
            
              {/* Price and Add to Cart */}
              <div className="my-6 flex items-center justify-between">
                {/* Quantity Selector */}
                  <div className='flex gap-5 px-2'>
                      <div className='flex gap-2 justify-center items-center '>
                          <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                          <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                          <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                      </div>
              </div> 
                <main>
                  <button className="bg-[#3A2829] text-white px-7 py-3 rounded-xl shadow-2xl focus:hover:bg-white focus:hover:text-[#3A2829] " onClick={handleAddToCart}>
                  Add to Cart
                </button>
                </main>
              </div>
            </div>

          </div>
        </div>

       </>
                      </div>
                     </div> 
              
                  </div>


                </div>
        </>
        )}

  
    </div>
  );
};

export default ProductDetailPage;