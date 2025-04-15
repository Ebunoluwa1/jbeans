/* eslint-disable react/prop-types */
import { useState }  from 'react';
import { PaystackButton } from 'react-paystack';
import { product } from './product';

// import { useSelector } from 'react-redux';

const PayButton = ({ email, cart, exchangeRate = 1500, publicKey, className='', buttonText }) => {
    const [msg, setMsg] = useState("");
    const [processing, setProcessing] = useState(false);

    //   const cart = useSelector(store => store.cart.items)
      
    //   const userEmail = useSelector((store) => store.user.email); 
    // const publicKey = 'pk_test_0768856f9f0dc26115478a71009998b9b266e038'
    
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
    
      const totalCost = cart.reduce((acc, item) => {
    
   const productData =product.find((prod) => prod.id === item.productId)
      if (!productData) {
    console.error(`Product not found for ID: ${item.productId}`);
    return acc;
  }
  
  const itemTotal = item.quantity * productData?.price || 0; 
    return  acc + itemTotal
   
  }, 0);

//   const exchangeRate = 1500; // Example: £1 = ₦1500 (you can make this dynamic)
const amountInNaira = totalCost * exchangeRate;

//   console.log('User Email:', userEmail);
console.log("CartTab state:", cart);

    const componentProps = {
          reference: (new Date()).getTime().toString(),
          email: email || "default@example.com",
          amount: amountInNaira * 100,
           metadata: {
        cart: cart.map((item) => ({
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
          text: buttonText,
          onSuccess,
          onClose,
          onPaymentProcessing: handleProcessing
      };
      console.log('Paystack Props:', componentProps);
     
  return (
    <>
      {msg && (
        <p className={`text-sm mt-2  ${msg.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
          {msg}
        </p>
      )}
     <PaystackButton disabled={cart.length === 0 || processing} className={`${className} ${cart.length === 0 || processing ? 'opacity-50 cursor-not-allowed' : ''}`} type='submit' 
     {...componentProps} />
      
      </>
  );
}

export default PayButton;
