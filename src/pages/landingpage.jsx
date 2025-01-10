/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import VideoPlayer from '../components/landing/video';
import { Button } from '../components/common/button';
import { Calendar, CookingPot } from 'lucide-react';
import Text from '../components/common/text';
import ImgCard from '../components/common/imgcard';
import m1 from '../assets/bebW.jpeg'
import m2 from '../assets/chickpea.jpeg'
import m3 from '../assets/lentilW1.jpg'
import m4 from '../assets/product.jpg'
import m5 from '../assets/jb-flour.jpeg'
import m6 from '../assets/jb-washedbean.jpeg'
import { useNavigate } from 'react-router-dom';

function Testimonial({ name, content }) {





  return (
    <div className="w-full bg-[#e5e5e5] border shadow-md rounded-xl p-6 ">
     
      <p className="text-sm xl:text-lg font-light text-black">{content}</p>
       <h3 className="font-medium text-base italic  text-[#3A2829] lg:text-xl mb-2">{name}</h3>
    </div>
  );
}

 const LandingPage = () => {

   const testimonials = [
    {
      name: "-Emmanuel",
      content:
        "As someone transitioning to a plant-based diet, JustBeans has been a lifesaver. The chickpeas are perfect for my homemade hummus and curries. I appreciate the freshness and the detailed cooking tips they provide. It's a game-changer!",
    },
    {
      name: "-Emmanuella",
      content:
        "JustBeans has completely transformed my cooking! The black-eyed beans are so creamy and flavorful – they’ve become a staple in my stews. I also love how easy it is to order and the quality is always top-notch. Highly recommend to anyone looking for premium legumes!",
    },
    {
      name: "-Pamela",
      content:
        "The lentils from JustBeans are the best I’ve ever tried. They cook so quickly and taste amazing in my salads and soups. Plus, the storage tips they share ensure I never waste a single bean. Fantastic service and quality!",
    },
     {
      name: "-Mark K",
      content:
        "I was skeptical at first, but JustBeans exceeded my expectations. The variety they offer is incredible, and every product I’ve tried is fresh and packed with flavor. Their focus on health and sustainability really sets them apart. I’m a loyal customer now!",
    },
  ];
  const beans = [
    { img: m1,
      name: "-BLACK-EYED BEAN",
      content:
        "Black-Eyed Beans are rich in protein and dietary fiber, and their creamy texture and earthy flavor provide a comforting touch to any meal. Nutritious and versatile, they are high in folate, iron, and potassium, making them a healthy choice. These beans are a staple for traditional dishes like akara (bean cakes), adding both flavor and nutrition",
        borderColor: "border-yellow-500",
    },
    {
      img: m2,
      name: "-CHICKPEA",
      content:
        "Chickpeas are a protein-packed legume celebrated for their nutty flavor and smooth texture. Ideal for hummus, curries, or as a roasted snack, they are a favorite in plant-based diets. Chickpeas are rich in antioxidants and essential minerals like magnesium and phosphorus, making them a key ingredient in popular dishes.",
        borderColor: "border-green-600",
    },
    {
      img: m3,
      name: "-LENTIL",
      content:
        "Lentils are a quick-cooking, nutrient-dense powerhouse. Their mild, earthy flavor makes them versatile for soups, salads, and grain bowls. Packed with protein and fiber, they support a healthy balanced diet, manage cholesterol levels.Known for promoting heart health and aiding digestion,they are a perfect addition to any meal.",
        borderColor: "border-purple-600",
    },
    
  ];
   const navigate = useNavigate();
  function handleProducts(){
    
    navigate('/products')
  }
  return (
    <div className="block">
  {/* Video Player */}
  <VideoPlayer />


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
        <ImgCard src={bean.img} className={`border-8 ${bean.borderColor}`} />
           <main className="text-center mt-4">
             <h2 className="font-bold text-xl md:text-2xl">{bean.name}</h2>
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

  {/* Ellipse Background Section */}
  <div 
    className="bg-[#FCE5CD] w-full h-auto py-8" 
    style={{ clipPath: 'ellipse(180% 100% at 50% 100%)' }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-[#3A2829] text-center">OUR PRODUCTS </h2>
    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
      {[m4, m5, m6].map((img, index) => (
         
        <div key={index} className="w-[90%] sm:w-[45%] lg:w-[30%]">
          <ImgCard src={img} className="border-8 border-[#3A2829]" />
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
      className="mt-8 mb-2 w-full sm:w-[60%] lg:w-[40%] hover:opacity-80 focus:opacity-80"
    >
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
        Following our recipes, combine our kits with 4-6 items from your fridge or cupboard.
      </p>
    </div>
    <div className="flex flex-col items-center text-center">
      <Calendar className="text-[#3A2829] m-4" />
      <p className="text-[#3A2829]">
        After your first box, change, pause, or cancel your subscription at any time. No commitment and hassle-free.
      </p>
    </div>
  </div>

  </div>

 

 
      {/* button */}
       <div className='flex flex-col gap-4 justify-center items-center'>
             <Button onClick={ handleProducts} size='md' color='primary' base='true' className='mt-8 mb-2 w-[40%] hover:opacity-80 focus:opacity-80 '>
             Try for $3
             </Button>
              <Text text='Free Postage' className='mb-2 items-center cursor-pointer' />
        </div>

         {/* Reviews Section */}
          <div id='Reviews' className="text-center mt-12 px-4">
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

          </div>

           

        <div className="flex flex-wrap justify-between gap-8 px-4 py-8 sm:gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    justBeans!
                  </h4>
                </li>
                <li>
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="/landing/studentbeans"
                  >
                    Students
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/about-us">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/recipes">
                    Recipes
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/affiliates">
                    Affiliates
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
                  <a className="text-[#4d4d4d] hover:underline" href="/faq">
                    FAQs
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
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    Contact us
                  </h4>
                </li>
                <li className="text-[#4d4d4d] leading-relaxed">
                  Unit D, Discovery House, Juniper Drive, <br /> London, SW18 1UY
                </li>
                <li>
                  Email:{' '}
                  <a
                    className="text-[#4d4d4d] hover:underline"
                    href="mailto:hello@simplycook.com"
                  >
                    hello@justbeans.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full sm:w-auto">
              <ul>
                <li>
                  <h4 className="text-[#a09f9f] capitalize text-lg sm:text-xl my-2">
                    You might also be interested in
                  </h4>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/food-box">
                    Food Box alternative
                  </a>
                </li>
                <li>
                  <a className="text-[#4d4d4d] hover:underline" href="/cooking-box">
                    Cooking Boxes
                  </a>
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
  );
}

export default LandingPage;