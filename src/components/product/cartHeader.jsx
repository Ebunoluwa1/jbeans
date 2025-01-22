/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { MoveLeft, ShoppingCart} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toggleStatusTab } from '../stores/cart';


const CartHeader = () => {
 const [totalQ, setTotalQ] = useState(0)
 const carts = useSelector(store => store.cart.items)
 
 useEffect(() => {
  let total = 0;
  carts.forEach(item => {
    total += item.quantity;
    setTotalQ(total)
  });
 },[carts])

const navigate = useNavigate();
 const handleLeft = () => {
 const previousPath = sessionStorage.getItem('previousPath');

    if (window.history.length > 2) {
      // Check browser history length
      navigate(-1);
    } else if (previousPath) {
      // Navigate to the previous path stored in sessionStorage
      navigate(previousPath);
    } else {
      // Fallback to home or a default route
      navigate('/');
    }
 }
 useEffect(() => {
    // Save the current location as the "previous path"
    sessionStorage.setItem('previousPath', location.pathname);
  }, [location.pathname]);
  
 const dispatch = useDispatch()
const handleOpenTabCart = () => {
  dispatch(toggleStatusTab());
  console.log('toggle!')
 }
 return (
    <div className='lg:-m-5 inset-0 sticky flex items-center justify-between  pb-5  shadow-sm border-b-[#FCE5CD]'>
      {/* Product */}
       <div className='flex justify-between items-center'>
        <MoveLeft onClick={handleLeft} className='w-6 m-2 cursor-pointer'/>
        <p className='text-lg font-semibold'> Products.</p>
       </div>
       {/* button */}
       <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
        <ShoppingCart className='w-8 ' />
         <span className='absolute top-2/3 bg-red-500 text-white text-sm w-5 h-5 rounded-full justify-center flex items-center'>{totalQ}</span>
       </div>
    </div>
  );
}

export default CartHeader;
