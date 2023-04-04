import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#242424] z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="border-4 border-[#dead4f] rounded-full w-24 h-24"
        style={{ borderTopColor: 'transparent' }}
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 1 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
