import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const LazySpline = lazy(() => import("@splinetool/react-spline"));

import { fadeIn } from "./utils/motion";
import LoadingScreen from "./components/LoadingScreen";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseIcon from "./components/MouseIcon";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll();

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

  useEffect(() => {
    // simulate a delay of 2 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      setShowContent(true);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        // <AnimatePresence exitBeforeEnter>

        <div className="overflow-x-hidden">
          <AnimatePresence mode="wait">
            {showContent && (
              <motion.div className="">
                <Navbar />
                <motion.div
                  className={`flex ${
                    !isMobile ? "flex-row" : "flex-col"
                  } h-screen`}
                  variants={fadeIn("", "", 0.1, 1)}
                >
                  <HeroSection />
                  <Suspense fallback={<LoadingScreen />}>
                    {!isMobile ? (
                      <LazySpline
                        scene="https://prod.spline.design/P5L4yfSnvYeSdvbY/scene.splinecode"
                        className="mt-20 mb-12"
                      />
                    ) : (
                      <LazySpline scene="https://prod.spline.design/kM68eOTqYu6XOFG7/scene.splinecode" />
                    )}
                  </Suspense>
                  {!isMobile && (
                    
                  <MouseIcon />)}
                </motion.div>
                <div className="">
                  <About />
                  <Skills />
                  <Projects />
                  <Blog />
                  <Contact />
                  <Footer />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="fixed bottom-0 left-0 right-0 w-full h-3 bg-[#dead4f] origin-[0%]"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      )}
    </BrowserRouter>
  );
};
export default App;
