/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: {opacity: 0},
    show:{ opacity: 1,
        trasnsition: {
            staggerChildren: 0.04,
            delayChildren: 0.2,
        },
    },
};

const child = {
    hidden: { opacity:0, y:20},
    show: {opacity: 1, y:0, trasnsition: {
        duration:0.3, ease: 'easeOut'
    }}
};

const AnimateText = ({ text, className = ''}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap overflow-hidden ${className}`}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimateText;
