// components/PageWrapper.jsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } },
};

const AnimateWrapper = ({ children }) => {
  return (
    <motion.div
    //   className="min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
