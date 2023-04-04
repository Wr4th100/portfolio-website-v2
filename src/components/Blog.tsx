import React, { useEffect, useState, lazy, Suspense } from "react"; 
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";


type Props = {}

const Blog = (props: Props) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // if (window.innerWidth < 500) {
      //   setIsMobile(true);
      // }
  
      const mediaQuery = window.matchMedia("(max-width: 1000px)");
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    
  return (
    <motion.div
      className={` w-screen font-ikaros sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6 pb-10 bg-[#1F1F1F]`}
      
    >
      <p className="text-2xl dark:text-white sm:px-32 px-10 pt-10 font-ikaros-light">
        The place where I post exciting stuff :{")"}
      </p>
      <p className="text-6xl text-[#DEAD4F] sm:px-32 px-10 sm:pb-10 pb-6 mt-1">
        Blog
      </p>
      <motion.p className="text-white sm:px-32 text-xl px-10 sm:pb-10 pb-6 mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      >Check out my blog at <span className="text-[#dead4f]"><a href="https://blogs.roshanjagadish.tech/" target="_black">blogs.roshanjagadish.tech</a></span></motion.p>
      <div
        className="sm:px-32 flex flex-row flex-wrap justify-between sm:h-full 
      sm:min-h-full min-h-full"
      >
        
        

      </div>
    </motion.div>
  )
}

export default SectionWrapper(Blog, "blog")