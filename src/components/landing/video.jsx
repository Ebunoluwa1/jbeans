// import React from 'react';

const VideoPlayer = () => {
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
        <div className="flex justify-center items-center">
          <div className=""> 
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
          </video> 
          </div>
        </div>
        <section className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="font-serif italic text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">Welcome to JustBeans - </h1>
          <br />
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 "> <b>Authentic Flavors</b> Delivered to You</p>
        </section>
    </div>
  );
}

export default VideoPlayer;


// import ReactPlayer from "react-player";

// const Video = () => {
//   return (
//     <div className=' w-full h-screen relative text-center block'>
//       <ReactPlayer
//       url="https://media.simplycook.com/sulu-media/prod/02/desktop-tablet-compressed.mp4"
//       controls
//       width="100%"
//       height="100%"
//     />
      //  {/* <iframe  allowfullscreen width="1040" height="680" className=' block w-full h-full object-cover'>
      //   <source src="https://media.simplycook.com/sulu-media/prod/02/desktop-tablet-compressed.mp4" type="video/mp4" />
      //   Sorry, your browser doesnt support embedded videos.
      // </iframe> */}
//     </div>
//   );
// }

// export default Video;


// import { useRef, useEffect } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const VideoPlayer = () => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//  const src = 'https://media.simplycook.com/sulu-media/prod/02/desktop-tablet-compressed.mp4'
//   useEffect(() => {
//     playerRef.current = videojs(videoRef.current, { controls: true, autoplay: true });

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         className="video-js"
//         controls
//         preload="auto"
//         data-setup="{}"
//       >
//         <source src={src} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

