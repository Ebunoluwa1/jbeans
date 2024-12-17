/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Text = ({
    onClick,
    to,
    text,
    title,
    caption,
    featured,
    input,
    bold,
    className,
    normal
}) => {
  return (
    <div>
      <p to={to}
      onClick={onClick}
      className={`${className && className}
            ${bold && " m-2 text-xl font-semibold"}
            ${featured && "text-3xl font-bold absolute bottom-16"}
            ${title && "text-base md:text-3xl font-bold mb-2 "} 
             ${(caption || input) && "text-gray-500 text-2xl px-4 "} 
            ${normal && "text-white text-xs"} 
            ${input && "text-xs mb-2 "} 
        font-inter `} 
      >{text} </p>
    </div>
  );
}

export default Text;
