/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { product } from './product';
import { useDispatch } from 'react-redux';
import {changeQuantity} from '../stores/cart';
import { Link } from 'react-router';

// Cart Page
const CartPage = (props) => {
const {productId, quantity} = props.data;
const [detail, setDetail] = useState([]);

useEffect(() => {
  const findDetail = product.filter(prod => prod.id === productId)[0];
  setDetail(findDetail)
  console.log(detail)
},[productId])

const dispatch = useDispatch()
    // Add to Cart Functionality
    const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }));
  }
  const handlePlusQuantity = ()=> {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }))

  }

  
  return ( 
    <div className="w-full flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md my-2">
      {/* Cart Items List */}
      
            <img src={detail.img} alt={detail.name} className='w-12' />
            <div>
              <Link to={`/products/${detail.slug}`}>
              <h4 className='hover:underline'>{detail.name}</h4></Link>
              <p>£ {(detail.price * quantity).toFixed(2)} GBP</p>

              {/* Update Options */}

              <div className='w-20 flex justify-between gap-2'>
                  <button className='bg-gray-200 rounded-full w-6 text-cyan-600 ' onClick={handleMinusQuantity}>-</button>
                  <span>{quantity}</span>
                  <button className='bg-gray-200 rounded-full w-6  text-cyan-600 ' onClick={handlePlusQuantity}>+</button>
             </div>
              
            </div>
       

      {/* Checkout Button */}
      {/* <button className=" ">Proceed to Checkout</button> */}
    </div>
  );
};


export default CartPage;

