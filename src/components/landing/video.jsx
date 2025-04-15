// import React from 'react';

// import ScrollCarousel from 'scroll-carousel-react';
import akara from './../../assets/frozen akara.jpeg'
import moimoi from './../../assets/cheesymoimoi.jpg'
import beanflour from './../../assets/beans-flour.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  // product image section in slides
// const images = [
// moimoi,
// akara,
// beanflour
// ]
const slides = [
    {
      image: moimoi,
      text: "Handcrafted Moi Moi – A Taste of Tradition, Made with Love. A delicious twist on a classic, rich in protein and flavor!"
    },
    {
      image: akara,
      text: "Handcrafted Akara – Crispy, Fluffy, and Irresistible. Enjoy the crispy, golden goodness anytime!"
    },
    {
      image: beanflour,
      text: "Bean Flour - The perfect base for nutritious African dishes!"
    }
  ];

  return (
    <div className="relative">
      

        <div className=' mx-auto  '>
    <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            // navigation={true}
            loop={true}
            autoplay={{
              delay: 5000, // 3 seconds between slides
              disableOnInteraction: false, // Keeps autoplay running after user interaction
            }}
            effect="fade"
            modules={[Pagination, Navigation, Autoplay]}
            className="duration-300 ease-in-out "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-96 "
                />
                   {/* Content Overlay */}
              <motion.section
                className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/50 p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              >
                 <p className='text-[#fce5cb] text-3xl mt-3 font-bold text-wrap z-20  w-[90%]'> 
                      {slide.text}
                  </p>
              </motion.section>
                {/* <section className="lg:sm:xl:absolute inset-0 flex flex-col justify-center w-full items-center text-[white] text-center"> */}
            
                   
               {/* </section> */}
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
  </div>
  );
}

export default VideoPlayer;


