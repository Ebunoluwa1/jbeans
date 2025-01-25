/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartPage from './cartpage';
import { toggleStatusTab } from '../stores/cart';
import { product } from './product';
import { PaystackButton } from 'react-paystack';
import { Alert } from '@/components/ui/alert';

const CartTab = () => {
    const [msg, setMsg] = useState("");
  const carts = useSelector(store => store.cart.items)
const statusTabCart = useSelector(store => store.cart.statusTab);
 const userEmail = useSelector((store) => store.user.email); 

const [processing, setProcessing] = useState(false);

const dispatch= useDispatch();

const handleCloseTabCart = () => {
dispatch(toggleStatusTab())
}
// ${statusTabCart === false ? 'translate-x-full' : ''}
if (statusTabCart === false) {
    return null;}
 
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
  console.log('User Email:', userEmail);
console.log("CartTab state:", carts);
// const totalCost = carts.reduce((acc, item) => {
//   // Fetch price dynamically if not part of `item`
//   const itemPrice = item.price || product.find((prod) => prod.id === item.productId)?.price || 0;
//   return acc + item.quantity * itemPrice;
// }, 0);
const publicKey = 'pk_test_0768856f9f0dc26115478a71009998b9b266e038'

const handleProcessing = () => {
  setProcessing(true);
};
    const onSuccess = (reference) => {
       setProcessing(false);
    setMsg(`Payment successful! Reference: ${reference.reference}`);
  };

  const onClose = () => {
     setProcessing(false);
    setMsg("Payment popup was closed. Please try again.");
  };
const componentProps = {
      reference: (new Date()).getTime().toString(),
      email: userEmail || "default@example.com",
      amount: totalCost * 1000,
       metadata: {
    cart: carts.map((item) => ({
      id: item.productId,
      name: product.find((prod) => prod.id === item.productId)?.name || "Unknown",
      quantity: item.quantity,
    })),
  },
      // metadata: {
      // fullName,
      // phoneNumber,
      // },
      publicKey,
      text: 'Check out Now',
      onSuccess,
      onClose,
      onPaymentProcessing: handleProcessing
  };
  console.log('Paystack Props:', componentProps);
 
  return (
   <div className='absolute top-0 z-50 left-0 bg-[#FCE5CD] '>
     <div className={`fixed top-0 z-50 right-0 bg-[#FCE5CD] shadow-2xl w-full sm:w-96 h-[100vh] grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 `}
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
        {msg && (
            <div className=" space-x-1 space-y-1 bottom-1 mx-8 ">
              <Alert  className={` w-full  text-sm ${msg.includes('successful') ? 'text-green-500' : 'text-red-500'}`}  onClose={() => setMsg("")} >
                {msg}
              </Alert>
              </div>
            )}

       <div className='mt-10 grid grid-cols-2 h-16'>
         <button onClick={handleCloseTabCart} className='bg-amber-600 text-white'> CLOSE</button>
          {/* <button className='bg-[#3A2829] text-white'> CHECKOUT</button>  */}
          <PaystackButton disabled={carts.length === 0 || processing} className={`bg-[#3A2829] space-y-4 text-white ${carts.length === 0 || processing ? 'opacity-50 cursor-not-allowed' : ''}`} type='submit' {...componentProps} />
       </div>
    </div>

   </div>
  );
}

export default CartTab;
