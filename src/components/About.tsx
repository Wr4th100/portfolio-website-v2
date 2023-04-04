import React, { useState, useEffect, lazy, Suspense } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant} from "../utils/motion";
import { UilFileShareAlt, UilGithub, UilLinkedin } from "@iconscout/react-unicons";

const LazySpline = lazy(() => import("@splinetool/react-spline"));



const About = () => {
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
    <div
      className={`bg-black w-screen sm:mt-36 mt-6  font-ikaros sm:h-screen h-full border-y-2 border-[#DEAD4F] mr-6 p-1 flex pb-20`}
    >
      <motion.div className="sm:w-5/12 w-0 sm:h-full h-full " variants={fadeIn("right", "spring", 0.9, 0.75)}>
        <Suspense fallback={<div>Loading...</div>}>
        {!isMobile ? (
          <LazySpline
            scene="https://prod.spline.design/iH2B1RIFoHrfoujp/scene.splinecode"
            className="pt-1 h-full"
          />
        ) : (
          // <div className="bg-white rounded-full h-full w-full">

          // </div>
          null
        )}
        </Suspense>
      </motion.div>
      <div className={`sm:w-6/12 h-full w-full flex sm:flex-col flex-col ${isMobile ? "items-center" : ""} ${!isMobile ? "justify-center" : ""}`}>
        <div>
          <p className="text-2xl dark:text-white sm:pl-2 pr-10 pt-1 mt-16 font-ikaros-light">
            About
          </p>
          <p className="text-6xl text-[#DEAD4F] sm:pl-22 pr-10 sm:pb-10 pb-6 mt-1">
            Overview
          </p>
        </div>

        {isMobile ? (
          <div className="sm:pl-2 px-10 mb-8">
            <img
              src="ProfilePic.jpg"
              alt="profilepic"
              className="w-64 rounded-lg border-[#DEAD4F] border-4"
            />
          </div>
        ) : null}
        <motion.p className="dark:text-white text-2xl sm:pl-2 px-10 pb-10" variants={fadeIn("", "", 0.1, 1)}>
          {" "}
          I'm a web developer, game developer, app developer, cybersec nerd,
          designer, AR/VR developer. Learning new tech has always been a
          fascination to me.
          <br />
          I am a self-taught developer and I am always looking to learn new
          technologies. I am currently pursuing engineering in Chennai Insitute
          of Technology.
          <br />
          
        </motion.p>
        <div className={`flex ${isMobile ? "flex-col" : ""}`}>
          <motion.div
            className={`flex items-center px-4 py-2 mx-4 rounded-3xl bg-[#242424] ${isMobile ? "py-4 my-4" : ""}`}
            variants={fadeIn("left", "spring", 0.9, 0.75)}
            whileHover={{scale: 1.101}}
            transition={{duration: 0.45}}
          >
            <a href="https://github.com/Wr4th100" target="_black" className="flex items-center">
            <UilGithub className="text-4xl text-[#DEAD4F] font-ikaros-" size="40" />
            
            <p className="text-2xl dark:text-white font-ikaros">GitHub</p>
            </a>
          </motion.div>
          <motion.div

            className={`flex items-center px-4 py-2 mx-4 rounded-3xl bg-[#242424] ${isMobile ? "py-4 my-4" : ""}`}
            variants={fadeIn("left", "spring", 0.9, 0.75)}
            whileHover={{scale: 1.101}}
            transition={{duration: 0.45}}
          >
            <a href="https://www.linkedin.com/in/roshan-jagadish/" target="_black" className="flex items-center">
            <UilLinkedin className="text-4xl text-[#DEAD4F] font-ikaros" size="40" />
            <p className="text-2xl dark:text-white font-ikaros-">LinkedIn</p>
           </a>
          </motion.div>

          <motion.div

            className={`flex items-center px-4 py-2 mx-4 rounded-3xl bg-[#242424] ${isMobile ? "py-4 my-4" : ""}`}
            variants={fadeIn("left", "spring", 0.9, 0.75)}
            whileHover={{scale: 1.101}}
            transition={{duration: 0.45}}
          >
            <a href="https://drive.google.com/file/d/1EU4YqYcu6-hH0Bn4HxJL2hXa6Kw0AXph/view?usp=sharing" target="_black" className="flex items-center">
            <UilFileShareAlt className="text-3xl text-[#DEAD4F] font-ikaros" size="40" />
            <p className="text-2xl dark:text-white font-ikaros-">Resume</p>
           </a>
          </motion.div>

          

        </div>

      </div>
      
    </div>
  );
};

export default SectionWrapper(About, "about");
