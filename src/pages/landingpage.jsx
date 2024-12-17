/* eslint-disable no-unused-vars */

import React from 'react';
import VideoPlayer from '../components/landing/video';
import { Button } from '../components/common/button';
import { Calendar, CookingPot } from 'lucide-react';
import Text from '../components/common/text';
import ImgCard from '../components/common/imgcard';
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m2.jpg'
import m4 from '../assets/m2.jpg'
import m5 from '../assets/m2.jpg'
import m6 from '../assets/m2.jpg'

function Testimonial({ name, content }) {
  return (
    <div className="w-full bg-white border shadow-md rounded-xl p-6 ">
      <h3 className="font-medium text-lg lg:text-xl mb-2">{name}</h3>
      <p className="text-sm xl:text-lg font-light text-gray-600">{content}</p>
    </div>
  );
}

 const LandingPage = () => {
const borderColors = ['border-yellow-500', 'border-green-600', 'border-purple-600'];
   const testimonials = [
    {
      name: "-Emmanuel",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
    {
      name: "-Emmanuella",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
    {
      name: "-Pamela",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
     {
      name: "-Pamel",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
  ];
  return (
    <div className="block">
  {/* Video Player */}
  <VideoPlayer />


  {/* Call-to-Action */}
  <div className="flex flex-col gap-4 justify-center items-center px-4">
    <Button 
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
    {[m1, m2, m3].map((img, index) => (
      <div key={index} className="w-[90%] sm:w-[45%] lg:w-[30%]">
         {/* {[m1, m2, m3].map((img, index) => ())} */}
        <ImgCard src={img} className={`border-8 ${borderColors[index]}`} />
        <main className="text-center mt-4">
          <h2 className="font-bold text-xl md:text-2xl">POTS OF PLEASURE</h2>
          <p className="px-2 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo at itaque et veniam.Animi quo at itaque et veniam.Animi quo at itaque et veniam.Animi quo at itaque et veniam.
          </p>
        </main>
      </div>
    ))}
  </div>
       {/* Call-to-Action */}
  <div className="flex flex-col gap-4 justify-center items-center px-4">
    <Button 
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

  {/* Ellipse Background Section */}
  <div 
    className="bg-[#FFA500] w-full h-auto py-8" 
    style={{ clipPath: 'ellipse(180% 100% at 50% 100%)' }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">140+ Recipes</h2>
    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
      {[m4, m5, m6].map((img, index) => (
         
        <div key={index} className="w-[90%] sm:w-[45%] lg:w-[30%]">
          <ImgCard src={img} className="border-8 border-yellow-500" />
        </div>
      ))}
    </div>
    {/* mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 mt-8 mb-8 */}
     {/* Additional Section */}
  <div className="flex flex-col items-center text-center mt-8 px-4">
    <Text 
      text="Discover delicious every night. We’re always adding new, easy-to-follow recipes from unexpected cuisines." 
      bold 
      className="text-lg md:text-2xl font-semibold text-center text-white"
    />
    <Button 
      size="md" 
      color="sec" 
      base="true" 
      className="mt-8 mb-2 w-full sm:w-[60%] lg:w-[40%] hover:opacity-80 focus:opacity-80"
    >
      Try for $3
    </Button>
    <Text 
      text="Free Postage" 
      className="mb-2 items-center cursor-pointer text-white font-bold text-sm md:text-base"
    />
  </div>
 {/* Two-Column Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 px-6">
    <div className="flex flex-col items-center text-center">
      <CookingPot className="text-white m-4" />
      <p className="text-white">
        Following our recipes, combine our kits with 4-6 items from your fridge or cupboard.
      </p>
    </div>
    <div className="flex flex-col items-center text-center">
      <Calendar className="text-white m-4" />
      <p className="text-white">
        After your first box, change, pause, or cancel your subscription at any time. No commitment and hassle-free.
      </p>
    </div>
  </div>

  </div>

 

 
      {/* button */}
       <div className='flex flex-col gap-4 justify-center items-center'>
             <Button size='md' color='primary' base='true' className='mt-8 mb-2 w-[40%] hover:opacity-80 focus:opacity-80 '>
             Try for $3
             </Button>
              <Text text='Free Postage' className='mb-2 items-center cursor-pointer' />
        </div>
         {/* Reviews Section */}
          <div className="text-center mt-12 px-4">
                <h3 className="font-bold text-2xl md:text-3xl mb-4">
                  MORE THAN 10 MILLION MEALS ENJOYED
                </h3>
                <p className="text-lg md:text-xl mb-8">
                  Join the <span className="text-[#FFA500] italic">thousands</span> who have discovered the secret to sensational weeknight meals. 
                  <strong> We are rated excellent with over 10,000 reviews.</strong>
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
                    <Button size='md' color='primary' base='true' className='mt-8 mb-2 w-[40%] hover:opacity-80 focus:opacity-80 '>
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
                    SimplyCook
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