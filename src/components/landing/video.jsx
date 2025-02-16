// import React from 'react';

// import ScrollCarousel from 'scroll-carousel-react';
import product from './../../assets/product.jpg'
import m1 from './../../assets/jb-flour.jpeg'
import m2 from './../../assets/jb-washedbean.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const VideoPlayer = () => {
  // product image section in slides
const images = [
product,
m1,
m2
]
  return (
    <div className="relative">
       {/* <div className='sm:w-full md:w-full w-[80%] h-auto ml-36 relative block items-center mb-[-275px]'>
         <video
        autoPlay
        preload="metadata" 
        loop
        muted
        playsInline
        >
        <source src="https://media.simplycook.com/sulu-media/prod/02/desktop-tablet-compressed.mp4" type="video/mp4" />
        Sorry, your browser doesnt support embedded videos.
       </video> 
       </div> */}
{/* w-full h-auto max-w-[1200px] relative */}
        {/* <div className="flex justify-center items-center "> */}
   <div className='w-full mx-auto max-w-6xl '>
 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
         autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

            <div>

             {/* <ScrollCarousel autoplay autoplaySpeed={8} speed={8} onReady={() => console.log('I am ready')}>
              {[product,m1,m2].map((item,index) => (
                <div key={index} className="w-full">
                   <img  className="w-full h-full object-fit"  src={item}/>
                </div>
              ))}
             
             </ScrollCarousel> */}
          </div>
          {/* <div className=""> 
            <video
            autoPlay
            preload="metadata" 
            loop
            muted
            playsInline
            className="w-full h-auto"
            >
            <source src="https://media.simplycook.com/sulu-media/prod/02/desktop-tablet-compressed.mp4" type="video/mp4" />
            Sorry, your browser doesnt support embedded videos.
          </video> [#3A2829]
          </div> */}
        </div>
        <section className="lg:sm:xl:absolute inset-0 flex flex-col justify-center w-full items-center text-[white] text-center">
         
          <p className='text-[#3A2829] mt-3 font-bold xl:lg:sm:w-[25%] text-wrap z-20 xl:lg:sm:-top-2/3 xl:lg:sm:left-2/3 xl:lg:sm:-translate-x-full xl:lg:sm:transform xl:lg:sm:text-left w-[90%]'>
           <h3 className='text-[#3A2829] '> ABOUT-</h3>
          At JustBeans, we’re rooted in tradition and driven by simplicity. Inspired by Moin Moin, a cherished dish from West Africa, we set out to share this plant-based delight with the world. Made from real ingredients, prepared with care, and crafted for the modern lifestyle, JustBeans brings authentic flavor and wholesome nutrition to your table in minutes.
          Our mission at JustBeans is to introduce the world to healthy, plant based meals rooted in African tradition. We aim to make authentic, 
          nutritious food accessible to everyone, while promoting sustainability and simplicity.</p>
          {/* <h1 className="font-serif italic text-[white] text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">Welcome to JustBeans - </h1>
          <br />
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 font-lato "> high-protein, gluten-free, and nutrient-rich</p> */}
        </section>
    </div>
  );
}

export default VideoPlayer;


