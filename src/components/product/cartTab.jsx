/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartPage from './cartpage';
import { toggleStatusTab } from '../stores/cart';
import { product } from './product';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items)
const statusTabCart = useSelector(store => store.cart.statusTab);

const dispatch= useDispatch();

const handleCloseTabCart = () => {
dispatch(toggleStatusTab())
}
// ${statusTabCart === false ? 'translate-x-full' : ''}
if (statusTabCart === false) {
    return null;}
 
  console.log("CartTab visibility:", statusTabCart);
    
const totalCost = carts.reduce((acc, item) => {
    const itemTotal = item.quantity * product.find((prod) => prod.id === item.productId)?.price || 0; 
    return acc + itemTotal;
    
  }, 0);
console.log("CartTab state:", carts);
// const totalCost = carts.reduce((acc, item) => {
//   // Fetch price dynamically if not part of `item`
//   const itemPrice = item.price || product.find((prod) => prod.id === item.productId)?.price || 0;
//   return acc + item.quantity * itemPrice;
// }, 0);
  return (
   <div className='absolute top-0 z-50 left-0 bg-[#FCE5CD] '>
     <div className={`fixed top-0 z-50 right-0 bg-[#FCE5CD] shadow-2xl w-96 h-[100vh] grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 `}
   >  
      <h2 className='p-5 text-[#3A2829] font-bold text-2xl'>Shopping Cart</h2>
       <div className='p-5'>
        {/* {carts.map((item, 50 key) => <CartPage key={key} data={item} /> )} */}
           {carts.length > 0 ? (
          carts.map((item, key) => <CartPage key={key} data={item} />)
        ) : (
          <p className="text-gray-700">Your cart is empty.</p>
        )}
         <div className="p-5 text-lg font-semibold border-t-gray-200">
          Total: ${totalCost.toFixed(2)}
        </div>
      </div>
     

       <div className='grid grid-cols-2'>
         <button onClick={handleCloseTabCart} className='bg-amber-600 text-white'> CLOSE</button>
          <button className='bg-[#3A2829] text-white'> CHECKOUT</button>
       </div>
    </div>

   </div>
  );
}

export default CartTab;
