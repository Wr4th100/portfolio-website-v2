import React, { useEffect, useState, lazy, Suspense } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { staggerContainer, slideIn } from "../utils/motion"
import { UilGithub, UilLink } from "@iconscout/react-unicons";

const project_details = [
    {
        title: "Seating Arrangement Software",
        description: "A software to automate the process of seating arrangement for exams. It is a web application built using Next.js and Django. ",
        link: "https://github.com/seating-project/seating-project",
        live_url: ""
        // image: 

    },  
    {
        title: "Learning Tracker",
        description: "A chrome extension to keep track of onlin learning resources.",
        link: "https://github.com/Wr4th100/LearningTracker",
        live_url: ""
        // image:
    },
    {
        title: "Finance Dashboard",
        description: "A dashboard to keep track of your finances. It is a web application built using Next.js and Django.",
        link: "",
        live_url: ""
        // image:
    },
    {
        title: "Netflix Clone",
        description: "A clone of Netflix built using React.js and Firebase.",
        live_url: "https://netflix-clone-33cb1.web.app/", 
        link: "https://github.com/Wr4th100/Netflix-Clone"
    },
    {
        title: "Vibration Analysis Mixed Reality Model",
        description: "A MR App to visulaize vibration analysis of a machine. It is built using Unity and MR Toolkit. Device used: HoloLens 2",
        live_url: "",
        link: "",
    },
    {
        title: "Mixed Reality App for IoT Devices",
        description: "A MR App to visualize IoT devices. It is built using Unity and MR Toolkit. Device used: HoloLens 2",
        live_url: "",
        link: "",
    
    }

]

// type Props = {
//     title: string;
//     description: string;
//     link: string;
//     className: string;
//     live_url: string;
//     index: number;
//   };
  
// const ProjectCard = ({
//     title,
//     description,
//     link,
//     className,
//     live_url,
//     index
//   }: Props) => {
//     return (
//       <motion.div
//         className={`${className}  bg-[#1F1F1F] rounded-2xl  shadow-white flex flex-col  items-center p-10 `}
//         whileHover={{ scale: [null, 1.1, 1.09] }}
//         transition={{ duration: 0.5 }}
//         variants={slideIn("right", "spring", index*0.5, 0.75)}
//       >
//         <div className="flex my-2 items-center justify-between">
//           <p className="text-2xl text-[#DEAD4F] mt-4 px-2 pr-2">{title}</p>
//           <div className="flex justify-between">
//             <motion.a
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
//             >
//               <UilGithub
//                 className="text-[#DEAD4F] hover:text-white text-4xl mt-4"
//                 size="30"
//               />
//             </motion.a>
//             {live_url != "" && (
//               <motion.a
//                 href={live_url}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
//               >
//                 <UilLink
//                   className="text-[#DEAD4F] hover:text-white text-4xl mt-4"
//                   size="30"
//                 />
//               </motion.a>
//             )}
//           </div>
//         </div>
//         <div>
//           {/* <p className="text-white   mt-4">{skills.map((skill: string) => {
//             return <span>{skill} <br /> </span>
//           })
//           }</p> */}
//           <p className="text-white text-lg my-2">{description}</p>
//         </div>
//       </motion.div>
//     );
//   };
  

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

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
      className={` w-screen font-ikaros sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6 pb-10 bg-black`}
    >
      <p className="text-2xl dark:text-white sm:px-32 px-10 pt-10 font-ikaros-light">
        The stuff I have done :{")"}
      </p>
      <p className="text-6xl text-[#DEAD4F] sm:px-32 px-10 sm:pb-10 pb-6 mt-1">
        Projects
      </p>
      <div
        className="sm:px-32 flex flex-row flex-wrap justify-between sm:h-full 
      sm:min-h-full min-h-full"
      >
        {project_details.map((project, index) => (
            <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                live_url={project.live_url}
                className=" w-1/5 min-w-[300px] m-6"
                key={project.title}
                index={index}
            />
        ))}

      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
