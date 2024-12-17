/* eslint-disable react/prop-types */
import React from 'react';


const ImgCard = ({src, className}) => {
  return (
    <div className='w-42 h-42 mx-auto'>
        <div className=' w-full h-full object-cover '>
            <img src={src} alt="Image" className={className} />
        </div>

    </div>
  );
}

export default ImgCard;
