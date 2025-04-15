/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartPage from './cartpage';
import { toggleStatusTab } from '../stores/cart';
import { product } from './product';
// import { PaystackButton } from 'react-paystack';
import { Alert } from '@/components/ui/alert';
import { useNavigate } from 'react-router';
import PayButton from './payButton';

const CartTab = ({ isPageView = false }) => {
   const [msg, setMsg] = useState('');
  const carts = useSelector(store => store.cart.items)
const statusTabCart = useSelector(store => store.cart.statusTab);



const dispatch= useDispatch();

const handleCloseTabCart = () => {
dispatch(toggleStatusTab())
}

// ${statusTabCart === false ? 'translate-x-full' : ''}
if (!isPageView && statusTabCart === false) {
    return null;}
//  <div className={`absolute mt-10 z-50 left-0 w-full bg-[#FCE5CD] transform transition-transform duration-500 ${
//   statusTabCart ? 'translate-x-0' : 'translate-x-full'
// }`}></div>

  console.log("CartTab visibility:", statusTabCart);
    
   const totalCost = carts.reduce((acc, item) => {
    
   const productData =product.find((prod) => prod.id === item.productId)
      if (!productData) {
    console.error(`Product not found for ID: ${item.productId}`);
    return acc;
  }
  
  const itemTotal = item.quantity * productData?.price || 0; 
    return  acc + itemTotal
   
  }, 0);

// const totalCost = carts.reduce((acc, item) => {
//   // Fetch price dynamically if not part of `item`
//   const itemPrice = item.price || product.find((prod) => prod.id === item.productId)?.price || 0;
//   return acc + item.quantity * itemPrice;
// }, 0);

  return (
   <div className={`${isPageView ? 'relative mt-0 z-0 w-full' : 'absolute mt-10 z-50 w-[50vw] right-0'}  bg-[#FCE5CD]`}>
     <div className={`    bg-[#FCE5CD] shadow-2xl w-full h-[100vh] grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500         ${!isPageView && statusTabCart === false ? 'translate-x-full' : 'translate-x-0'}`}
    >

      <h2 className='p-5 text-[#3A2829] font-bold text-2xl'>Shopping Cart</h2>
       <div className='p-5'>
        {/* {carts.map((item, 50 key) => <CartPage key={key} data={item} /> )} */}
           {carts.length > 0 ? (
          carts.map((item, key) => (
            <div className='w-full '>
              <CartPage key={key} data={item} />
              </div>
          ))
        ) : (
          <p className="text-gray-700">Your cart is empty.</p>
        )}
         <div className="p-5 text-lg font-semibold border-t-gray-200">
          Total: £{totalCost.toFixed(2)}
        </div>
      </div>
        {msg && (
            <div className=" space-x-1 space-y-1 bottom-1 mx-8 ">
              <Alert  className={` w-full  text-sm ${msg.includes('successful') ? 'text-green-500' : 'text-red-500'}`}  onClose={() => setMsg("")} >
                {msg}
              </Alert>
              </div>
            )}

       <div className='mt-2 grid grid-cols-2 h-16  gap-4'>
         {/* <button onClick={handleCloseTabCart} className='bg-[#FCE5CD] text-[#4d3b3c] hover:bg-opacity-90 border-[#4d3b3c] border-4'> Close</button> */}
         {!isPageView && (
          <button onClick={handleCloseTabCart} className='bg-[#FCE5CD] text-[#4d3b3c] hover:bg-opacity-90
           border-[#4d3b3c] border-4'>Close</button>
        )}
          {/* <button className='bg-[#3A2829] text-white'> CHECKOUT</button>  */}
            <PayButton   
              cart={carts}
              publicKey="pk_test_0768856f9f0dc26115478a71009998b9b266e038"
              exchangeRate={1500} // optional
              buttonText="Check out Now"
              className="bg-[#4d3b3c]  text-white px-4 py-2  hover:bg-opacity-80"  />
       </div>
    </div>

   </div>
  );
}

export default CartTab;
