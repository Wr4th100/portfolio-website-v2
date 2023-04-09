import React, { useEffect, useState, lazy, Suspense } from "react";
import SkillCard from "./SkillCard";
import {
  UilBrowser,
  UilMobileAndroidAlt,
  UilUserNurse,
  UilBracketsCurly,
} from "@iconscout/react-unicons";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const LazySpline = lazy(() => import("@splinetool/react-spline"));
const details = [
  {
    icon: <UilBrowser size="35" />,
    title: "Web Development",
    skills: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Three JS",
      "Spline",
      "Tailwind CSS",
      "Material UI",
      "Django",
      "MySQL",
    ],
  },
  {
    icon: <UilUserNurse size="35" />,
    title: "AR/VR Development",
    skills: ["Unity", "C#", "Blender", "Microsoft Hololens 2"],
  },
  {
    icon: <UilMobileAndroidAlt size="35" />,
    title: "App Development",
    skills: ["React Native", "Firebase"],
  },
  {
    icon: <UilBracketsCurly size="35" />,
    title: "Languages",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "C",
      "Java",
      "SQL",
    ],
  },
];

const Skills = () => {
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
      className={` w-screen font-ikaros sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6  `}
    >
      <p className="text-2xl dark:text-white sm:px-32 px-10 pt-16 font-ikaros-light">
        The things that I know - technically :{")"}
      </p>
      <p className="text-6xl text-[#DEAD4F] sm:px-32 px-10 sm:pb-10 pb-6 mt-1">
        Skills
      </p>
      <motion.div
        className="sm:px-20 flex flex-row flex-wrap justify-between sm:h-screen 
      sm:min-h-full min-h-full"
        variants={fadeIn("right", "spring", 0.9, 0.75)}
        
      >
        <Suspense fallback={<div>Loading...</div>}>
          {!isMobile ? (
            // <LazySpline scene="https://prod.spline.design/1uBxKFonlgu1IJfn/scene.splinecode" />
            <img
              src="skills.png"
              alt="skills"

            />
          ) : (
            details.map((detail, index) => (
              <SkillCard
                index={index}
                icon={detail.icon}
                title={detail.title}
                skills={detail.skills}
                className="m-6 w-full"
                key={detail.title}
              />
            ))
          )}
        </Suspense>

        {/* <SkillCard icon={<UilBrowser size="35" />} title="Web Development"/> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");

// Skills

// Web Development
// ReactJS
// NextJS
//  NodeJS
// ExpressJS
// MongoDB
// Three JS
// Spline
// Tailwind CSS
// Material UI
// Django
// MySQL

// AR/VR Development
// Unity
// C#
// Blender
// Microsoft Hololens 2

// App Development
// React Native
// Firebase

// Languages
// HTML
// CSS
// JavaScript
// TypeScript
// Python
// C++
// C
// Java
// SQL
