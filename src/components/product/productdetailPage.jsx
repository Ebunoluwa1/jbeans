import React, {useEffect, useState} from 'react';
import { useParams, Outlet, Link } from 'react-router';
import { product } from './product';
import logo from '../../assets/logo.png'
import ImgCard from './../common/imgcard';
import CartHeader from './cartHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleStatusTab } from '../stores/cart';
import CartTab from './cartTab';
import PayButton from './payButton';

// Product Detail Page
const ProductDetailPage = () => {
  const [detail, setDetail] =useState([]);
   const [quantity, setQuantity] =useState(1); //local variable
   const [isLoading, setIsLoading] =useState(true);

  //  cart.button
   const [isAddingToCart, setIsAddingToCart] = useState(false);
   const [showModal, setShowModal] = useState(false);
   
         const carts = useSelector(store => store.cart.items)
         const userEmail = useSelector((store) => store.user.email); 
  const {slug } = useParams();

  const cartItems = useSelector(store => store.cart.items);
  const productInCart = cartItems.find((item) => item.productId === detail.id)
  const cartQuantity = productInCart ? productInCart.quantity : 0;

  const dispatch = useDispatch()

function handleOpenCart (){
  dispatch(toggleStatusTab());
    console.log('cart!')
}

  useEffect(() => {
    const findDetail = product.filter(prod => prod.slug === slug);
    if(findDetail.length > 0 ){
      setDetail(findDetail[0])

         const productInCart = cartItems.find((item) => item.productId === findDetail.id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } 
    } 
    else{
      window.location.href = '/';
    }

    const timer = setTimeout(() => {
  //setLoading spinner
  setIsLoading(false);
  }, 2000)

 return () => clearTimeout(timer)
  },[slug, cartItems])
 
  const handleMinusQuantity = ()=> {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1 )
  }
  const handlePlusQuantity = ()=> {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    setTimeout( () => {
      dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    })),

    setIsAddingToCart(false);
    setShowModal(true);

    }, 1000);
};
  
const statusTabCart = useSelector(store => store.cart.statusTab);

console.log("StatusTabCart:", statusTabCart);
  return (
    <div className=''>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD] '>
            <div className='flex items-center text-center justify-center h-8 w-full'>
               
                <div className='font-bold text-[rgb(58,40,41)] text-center flex items-center justify-center cursor-pointer hover:opacity-45'>
                    <Link to='/' className=''> 
                        <ImgCard src={logo} className=' w-14 '  /> 
                    </Link>
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
          <div className="relative max-w-4xl  mx-auto bg-white rounded-lg shadow-lg sm:overflow-hidden lg:overflow-hidden xl:overflow-hidden ">
          
            {/* Product Image */}
            <img
            src={detail.img} alt={detail.img}
              className="w-fit mx-auto object-cover"
            />

            {/* Product Information */}
            <div className="p-6 z-10 absolute bg-[#FCE5CD] top-2/3  left-1/2 transform -translate-x-1/2 -translate-y-1/3  bg-opacity-90 w-[90%] sm:w-[70%] rounded-lg shadow-lg ">
              <p className='font-light capitalize text-left text-[12px]'>JUST BEANS STORE :</p>
              <h1 className="text-2xl font-bold text-gray-800">{detail.name}</h1>
              <p className="mt-4 text-gray-600">{detail.content}</p>
             <a className='justify-center flex items-center gap-4 mt-2'>
               <p className="text-lg font-semibold text-gray-800">£{detail.price}GBP</p>
              <button
                className="bg-[#3A2829] text-white text-sm px-4 py-1 rounded-full hover:bg-[#4d3b3c] transition-all duration-200"
              >
                Sale
              </button>
             </a>
            
              {/* Price and Add to Cart */}
              <div className="my-6 flex items-center justify-between flex-col lg:flex-row xl:flex-row  sm:flex-row">
                {/* Quantity Selector */}
                  <div className='flex gap-5 px-2'>
                      <div className='flex gap-2 justify-center items-center '>
                           <p className='font-light capitalize text-left text-[12px]'>Quantity ({cartQuantity} in cart)</p>
                          <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                          <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                          <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                      </div>
                  </div> 
                <main>
                  <button className="bg-[#3A2829] text-white px-7 py-3 rounded-xl shadow-2xl focus:hover:bg-white focus:hover:text-[#3A2829] my-4 " onClick={handleAddToCart} disabled={isAddingToCart}>
                    {isAddingToCart ? (
                      <div className='w-5 h-5  border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    ) : ('Add to Cart')}
                 
                </button>
                </main>
              </div>
            </div>

          </div>
        </div>

       </>
                      </div>
                      </div> 
                     { showModal && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                              <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full relative animate-fadeIn">
                                {/* Close Icon */}
                                <button
                                  onClick={() => setShowModal(false)}
                                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
                                >
                                  ✕
                                </button>

                                 <div className='flex gap-4 '> 
                                   {/* Product Image */}
                                <img src={detail.img} alt={detail.name} className="w-12 h-12 mb-4" />

                                {/* Confirmation Text */}
                                <h3 className="text-center text-lg font-light mb-2">{detail.name} added to your cart!</h3>
                             </div>
                                {/* Buttons */}
                                <div className="flex justify-between mt-4 gap-5">
                                   <PayButton   email={userEmail}
  cart={carts}
  publicKey="pk_test_0768856f9f0dc26115478a71009998b9b266e038"
    exchangeRate={1500} // optional
  buttonText="Pay Now"
  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"  />
                                 {/* className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300" */}
                               
                                  <Link
                                  to='/cart'
                                  // onClick={handleOpenCart}
                                     onClick={() => {setShowModal(false);
                                      }}
                                    className="bg-[#3A2829] text-white px-4 py-2 rounded-lg hover:bg-[#4d3b3c]"
                                  >
                                    Go to Cart
                                  </Link>
                                </div>
                                <div className='text-center py-2'>
                                    <Link
                                    to="/products"
                                    className="place-items-center text-center text-gray-800 px-4 py-2 underline hover:bg-opacity-30 hover:rounded-md"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Continue Shopping
                                  </Link>
                                </div>
                              </div>
                         </div>
                     )}
                  </div>


                </div>
        </>
        )}

  
    </div>
  );
};

export default ProductDetailPage;