/* eslint-disable react/prop-types */
import React from 'react';
import { Users2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { Link } from 'react-router';

const ProductCart = (props) => {

const carts= useSelector(store => store.cart.items)
console.log(carts)
const {id, name, img, price, content, slug } = props.data;



const dispatch = useDispatch();
// button handler functions
 const handleAddToCart = () => {
    dispatch(addToCart({
          productId: id,
            quantity: 1
        })
    )}


  return (
    <div className=" w-[90%] sm:w-[45%] lg:w-[30%] rounded-lg shadow-xl mt-2">
      <div className='relative'>
           <Link to={slug}  >                              
         <img src={img} alt={name} className='rounded-t-lg  hover:opacity-60 transition-opacity duration-300'/>
            <div className='absolute bottom-4 right-0 flex flex-col justify-end p-4'>
                <button className="text-xs text-black bg-white px-4 py-2 rounded-lg shadow hover:bg-[#3A2829] hover:text-white transition-all duration-300">
                    View Details 
              </button>
         </div>
          
             </Link>  
      </div>
                       

              <div className='p-2 mx-2 text-left '>
                                            <h4 className='font-bold pt-4 pb-2 px-4  '>{name}</h4>
                                            <p className=' px-4'>{content}</p>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-bold bg-[#3A2829] hover:opacity-80 text-white p-2 rounded-lg w-fit px-6 m-2'>${price}</p>
                                                <span className='cursor-pointer hover:bg-gray-75 p-2'>
                                                    <Users2 className='w-6 h-6' />
                                                </span>
                                            </div>
                                            <button className='my-2 mb-4 space-x-6 p-2 bg-[#3A2829] transition-all duration-300 hover:bg-opacity-80  rounded-lg w-full text-white' onClick={handleAddToCart}>Add to Cart</button>
                                        </div>
                                    </div>
  );
}

export default ProductCart;
