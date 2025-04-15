/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import VideoPlayer from '../components/landing/video';
import { Button } from '../components/common/button';
import { Calendar, CookingPot, Facebook, Instagram, Twitter } from 'lucide-react';
import Text from '../components/common/text';
import ImgCard from '../components/common/imgcard';
import logo from '../assets/logo.png'
import egg from '../assets/eggmoimoi.jpeg'
import m3 from '../assets/jbpkg.jpg'
import m2 from '../assets/chmoi.jpg'
import m1 from '../assets/taste.jpg'
// import m4 from '../assets/.jpeg'
import m5 from '../assets/beans-flour.jpeg'
import m6 from '../assets/frozenPeeledbeans.jpeg'
import moi from '../assets/spicymincedmeat.jpeg'
import frozen from '../assets/frozen akara.jpeg'
import fried from '../assets/fried akara.jpeg';

import { useNavigate } from 'react-router-dom';
import Moisection from '../components/common/moisection';
import Akarasection from '../components/common/akarasection';
import AnimateWrapper from '../components/common/animateWrapper';
import AnimateText from '../components/common/animateText';
import useScrollToHash from '../hooks/useScrollToHash';

function Testimonial() {

  return (
    <div className="w-full bg-[#e5e5e5] border shadow-md rounded-xl p-6 ">
     
      <p className="text-sm xl:text-lg font-light text-black">{content}</p>
       <h3 className="font-medium text-base italic  text-[#3A2829] lg:text-xl mb-2">{name}</h3>
    </div>
  );
}

 const LandingPage = () => {
  useScrollToHash();
 
  //  const testimonials = [
  //   {
  //     name: "-Emmanuel",
  //     content:
  //       "As someone transitioning to a plant-based diet, JustBeans has been a lifesaver. The chickpeas are perfect for my homemade hummus and curries. I appreciate the freshness and the detailed cooking tips they provide. It's a game-changer!",
  //   },
  //   {
  //     name: "-Emmanuella",
  //     content:
  //       "JustBeans has completely transformed my cooking! The black-eyed beans are so creamy and flavorful – they’ve become a staple in my stews. I also love how easy it is to order and the quality is always top-notch. Highly recommend to anyone looking for premium legumes!",
  //   },
  //   {
  //     name: "-Pamela",
  //     content:
  //       "The lentils from JustBeans are the best I’ve ever tried. They cook so quickly and taste amazing in my salads and soups. Plus, the storage tips they share ensure I never waste a single bean. Fantastic service and quality!",
  //   },
  //    {
  //     name: "-Mark K",
  //     content:
  //       "I was skeptical at first, but JustBeans exceeded my expectations. The variety they offer is incredible, and every product I’ve tried is fresh and packed with flavor. Their focus on health and sustainability really sets them apart. I’m a loyal customer now!",
  //   },
  // ];
 
  const beans = [
    { img: m1,
      name: "Taste",
      content:
        "Fresh & Flavorful – Made from natural ingredients with no artificial preservatives or additives. Crispy Outside, Soft & Fluffy Inside which allows you to enjoy the perfect texture in every bite.",
        borderColor: "border-yellow-500",
    },
    {
      img: m2,
      name: "Nutrition",
      content:
        "Nutritious & Plant-Based – High in protein, fiber, and essential nutrients.Gluten-Free & No Flour Added, 100% made from black-eyed beans with no fillers.",
        borderColor: "border-green-600",
    },
    {
      img: m3,
      name: "Packaging",
      content:
        "Each pack contains pre-molded, frozen(or fried/cooked) Akara/ moimoi batter, ensuring uniform frying. Keep frozen until ready to use. No need to thaw—just fry straight from frozen. Available in small, medium, and large packs to suit individuals, families, and bulk buyers.",
        borderColor: "border-purple-600",
    },
    
  ];

  const navigate = useNavigate();
  function handleProducts(){
    
    navigate('/products')
  }

   const handleClick = () => {
    navigate('/cart'); // adjust the route to your actual cart path
  };

  const products = [
  { img: m5, name: 'Beans Flour', price: '£5.99 GBP' },
  { img: frozen, name: 'Frozen Akara', price: '£8.55 GBP' },
  { img: fried, name: 'Fried Akara', price: '£11.80 GBP' },
  { img: moi, name: 'Moi Moi', price: '£5.0 GBP' },
];

  return (
    <AnimateWrapper>
    <div className="block ">
   <div className='mb-2'>
    <VideoPlayer />
   </div>


  {/* Call-to-Action */}
  <div className="flex flex-col gap-4 justify-center items-center px-4">
    <Button 
    onClick={handleProducts}
      size="md" 
      color="primary" 
      base="true" 
      className="mt-8 mb-2 w-full sm:w-[60%] lg:w-[40%] hover:opacity-80 focus:opacity-80"
    >
      Try for $3
    </Button>
    <Text 
      text="Free Postage" 
      className="mb-2 items-center cursor-pointer text-sm sm:text-base"
    />
  </div>

  {/* Image Section */}

  <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 mt-8 mb-8">
    {beans.map((bean, index) => (
      <div key={index} className="w-[90%] sm:w-[45%] lg:w-[30%]">
        <ImgCard src={bean.img} className={`border-4 w-full h-44  ${bean.borderColor}`} />
           <main className="text-center mt-4">
             {/* <h2 className="font-bold text-xl md:text-2xl">{bean.name}</h2> */}
             <p className="px-2 text-sm md:text-base leading-relaxed">
             {bean.content}
            </p>
           </main>
         
      </div>
    ))}
  </div>

       {/* Call-to-Action */}
  <div className="flex flex-col gap-4 justify-center items-center px-4">
    <Button 
    onClick={handleProducts}
      size="md" 
      color="primary" 
      base="true" 
      className="mt-8 mb-2 w-full sm:w-[60%] lg:w-[40%] hover:opacity-80 focus:opacity-80"
    >
      Try for $3
    </Button>
    <Text 
      text="Free Postage" 
      className="mb-2 items-center cursor-pointer text-sm   sm:text-base"
    />
  </div>

   {/* talk about each Moi products */}
  <div className='m-8'>
     <Moisection />
  </div>

   {/* shop now  */}
   <div className="p-6 md:p-10 rounded-md bg-[#FCE5CD] w-full h-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Text & Button Section */}
        <div className="relative text-center md:text-left flex-1">
          <AnimateText 
          text='Engage authenticity with great taste!'
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3A2829] leading-tight" />
        
          
          <Button
            onClick={handleProducts}
            size="md"
            color="primary"
            base="true"
            className="mt-6 md:mt-8 mb-2 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] hover:opacity-80 focus:opacity-80"
          >
            Shop Now
          </Button>
        </div>

        {/* Image Section */}
        <div className="relative mt-6 md:mt-0 flex justify-center md:justify-end flex-1">
          <img
            src={egg}
            alt="Delicious egg-based dish"
            className="h-40 w-72 md:h-48 md:w-80 lg:h-56 lg:w-96 rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
   </div>

{/* akara section */}
   <div className='m-8'>
    <Akarasection />
   </div>
  
  {/* our services */}
    <div className='my-4'>
      <h2 className="text-2xl md:text-3xl font-bold text-[#3A2829] text-center my-4">OUR SERVICES </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 '>
            <div className='bg-[#3A2829] p-4 text-white shadow-lg hover:scale-90 rounded-lg hover:opacity-80 focus:opacity-80 transition-transform duration-300 transform'>
                Retail & Bulk Orders – Perfect for individuals, families, and food lovers.
            </div>
            <div className='bg-[#FCE5CD] text-[#3A2829] p-4 shadow-lg rounded-lg hover:scale-90 hover:opacity-80 focus:opacity-80 transition-transform duration-300 transform'> Event Catering – We cater for weddings, birthdays, family gatherings, corporate events, and more with freshly made Moi Moi and Akara.</div>
            <div className='bg-[#FF611D] hover:scale-90 text-white p-4 shadow-lg rounded-lg hover:opacity-80 focus:opacity-80 transition-transform duration-300 transform'>
              Customized Orders – Choose your favorite toppings, fillings, and portion sizes.
            </div>
             <div className='shadow-lg hover:transition-opacity hover:duration-700 hover:ease-in-out hover:scale-90 rounded-lg text-[#3A2829] bg-gray-200 p-4 hover:opacity-80 focus:opacity-80 transition-transform duration-300 transform'>Frozen & Ready-to-Eat Options – Enjoy convenience with pre-cooked or fresh Akara and Moi Moi, ready to heat and serve.</div>
         </div>
    </div>

  {/* Ellipse Background Section */}
  <div 
    className="bg-[#FCE5CD] w-full h-auto py-8 mt-12" 
    style={{ clipPath: 'ellipse(180% 100% at 50% 100%)' }}
  >

    <h2 className="text-2xl md:text-3xl  font-bold text-[#3A2829] text-center">OUR PRODUCTS </h2>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-8 cursor-pointer">
      {[ m5,frozen, fried, moi ].map((img, index) => (
        <div key={index} className="mx-4 ">
          <img src={img} className="w-full h-80 border-4 border-[#3A2829] transition-transform duration-300 transform hover:scale-110" />
        </div>
      ))}
    </div> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-8">
      {products.map((item, index) => (
        <div
          key={index}
          onClick={handleClick}
          className="relative mx-4 cursor-pointer group"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-80 border-4 border-[#3A2829] transition-transform duration-300 transform group-hover:scale-110"
          />
          {/* Hover Info */}
          <div className="absolute bottom-0 left-0 w-full bg-black 
          bg-opacity-60 text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm">{item.price}</p>
          </div>
        </div>
      ))}
    </div>

     {/* Additional Section */}
  <div className="flex flex-col items-center text-center mt-8 px-4">
    <Text 
      // text="Discover delicious every night. We’re always adding new, easy-to-follow recipes from unexpected cuisines." 
      text="Rediscover the goodness of beans – wholesome, nutritious, and perfect for every meal."
      bold 
      className="text-lg md:text-2xl font-semibold text-center text-[#3A2829]"
    />
    <Button 
       onClick={handleProducts}
      size="md" 
      color="sec" 
      base="true" 
      className="mt-8 mb-2 w-full sm:w-[60%] lg:w-[40%] hover:opacity-80 focus:opacity-80 transition-transform duration-300 transform hover:scale-105 hover:bg-[#3A2829] hover:text-white">
      Try for $3
    </Button>
    <Text 
      text="Free Postage" 
      className="mb-2 items-center cursor-pointer text-[#3A2829] font-bold text-sm md:text-base"
    />
  </div>

 {/* Two-Column Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 px-6">
    <div className="flex flex-col items-center text-center">
      <CookingPot className="text-[#3A2829] m-4" />
      <p className="text-[#3A2829]">
        Fry our handcrafted meal, pair with pap (ogi), custard, bread, or rice for a classic meal.
      </p>
    </div>
    <div className="flex flex-col items-center text-center">
      <Calendar className="text-[#3A2829] m-4" />
      <p className="text-[#3A2829]">
       Fry directly from frozen in hot oil for a crispy, golden-brown finish. Get packs to savour a wholesome, nutritious bite
      </p>
    </div>
  </div>

  </div>

 

{/*  
      {/* button */}
       {/* <div className='flex flex-col gap-4 justify-center items-center'>
             <Button onClick={ handleProducts} size='md' color='primary' base='true' className='mt-8 mb-2 w-[40%] hover:opacity-80 focus:opacity-80 '>
             Try for $3
             </Button>
              <Text text='Free Postage' className='mb-2 items-center cursor-pointer' />
        </div> */} 

         {/* Reviews Section */}
          {/* <div id='Reviews' className="text-center mt-12 px-4">
                <h3 className="font-bold text-2xl md:text-3xl mb-4">
                 REVIEWS ABOUT OUR PRODUCTS
                </h3>
                <p className="text-lg md:text-xl mb-8">
                  Join the <span className="text-[#3A2829] font-bold text-sm  italic">thousands</span> who have discovered the secret to sensational weeknight meals. 
                  <strong> We are rated excellent with amazing reviews.</strong>
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Testimonial 
                      key={index} 
                      name={testimonial.name} 
                      content={testimonial.content} 
                    />
                  ))}
                </div>

                {/* button */}
              <div className='flex flex-col gap-4 justify-center items-center'>
                    <Button size='md' onClick={handleProducts} color='primary' base='true' className='mt-8 mb-2 w-[40%] hover:opacity-80 focus:opacity-80 '>
                    Try for $3
                    </Button>
                    <Text text='Free Postage' className='mb-2 items-center cursor-pointer' />
                </div>

          {/* </div>  */}

           

        <div className="flex flex-wrap justify-between gap-8 px-4 py-8 sm:gap-12 md:gap-16" id='contacts'>
            {/* Column 1 */}
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    justBeans!
                  </h4>
                </li>
                
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/about-us">
                    About us
                  </a>
                </li>
               
            
                <li>
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="https://apply.workable.com/simplycook/?lng=en"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    Help &amp; Support
                  </h4>
                </li>
                <li>
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="https://help.simplycook.com/"
                  >
                    Help Centre
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/contact">
                    Contact us
                  </a>
                </li>
                
                <li>
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="/terms-and-conditions"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-full sm:w-auto" >
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    Contact us
                  </h4>
                </li>
                <li className="text-[#4d4d4d] leading-relaxed">
                  Mountain Ash UK, <br /> London, 43ut
                </li>
                <li>
                  Email:{' '}
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="mailto:hello@justbeans.com"
                  >
                    justbeansco@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    You might also be interested in checking our socials
                  </h4>
                </li>
                <li className="text-[#4d4d4d] hover:underline flex justify-between ">
                  <>
                    <a href="https://www.facebook.com/justbeans.com" className='mx-4 hover:text-blue-950' target="_blank" ><Facebook /></a>
                        <a href="https://twitter.com/justbeans.com" target="_blank" className='mx-4  hover:text-blue-950'><Twitter /></a>
                        <a href="https://instagram.com/justbeans.com/" target="_blank" className='mx-4  hover:text-blue-950' ><Instagram  /></a>
                  </>
                </li>
               
              </ul>
            </div>
         </div>
                 {/* <div className="">
                        <a href="https://www.facebook.com/Simplycookcom" target="_blank" ><Facebook /></a>
                        <a href="https://twitter.com/simplycookcom" target="_blank" ><Twitter /></a>
                        <a href="https://instagram.com/simplycookcom/" target="_blank" ><Instagram  /></a>
                    </div> */}
     </div>
     </AnimateWrapper>
  );
}

export default LandingPage;