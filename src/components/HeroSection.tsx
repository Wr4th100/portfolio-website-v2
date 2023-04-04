import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div 
      className="flex flex-col max-w-4/5 h-screen mx-auto justify-center ml-4  font-ikaros"
      initial = {{ opacity: 0, scale: 0.5 }}
      animate = {{ opacity: 1, scale: 1 }}
      transition = {{ duration: 0.7, delay: 0.9, ease: "easeOut" }}  
    >
      <p className="sm:text-8xl text-[#DEAD4F] sm:p-10 text-6xl p-5">
        Roshan Jagadish
      </p>
      <p className="sm:text-4xl text-[#FFFFFF] sm:pl-10 text-2xl pl-5">
        {" "}
        <code>A man of all tech.</code>
      </p>
    </motion.div>
  );
};

export default HeroSection;
