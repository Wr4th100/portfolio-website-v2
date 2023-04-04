import React from "react";
import { UilGithub, UilLink } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


type Props = {
  title: string;
  description: string;
  link: string;
  className: string;
  live_url: string;
  index: number;
};

const ProjectCard = ({
  title,
  description,
  link,
  className,
  live_url,
  index
}: Props) => {
  return (
    <motion.div
      className={`${className}  bg-[#1F1F1F] rounded-2xl  shadow-white flex flex-col  items-center p-10 hover:shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] min-h-[360px] `}
    //   whileHover={{ scale: [null, 1.1, 1.09] }}
      
    // //   transition={{ duration: 0.5 }}
    //   initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     whileInView={{opacity: 1}}
    //     transition={{ duration: 0.5, delay: 0.2 }}
    // initial={{opacity: 0, scale: 0.5}}
    // animate={{opacity: 1, scale: 1}}
    // transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    
    >
      <div className="flex my-2 items-center justify-between">
        <p className="text-2xl text-[#DEAD4F] mt-4 px-2 pr-2">{title}</p>
        <div className="flex justify-between">
          
          {link != "" && (
          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          >
            <UilGithub
              className="text-[#DEAD4F] hover:text-white text-4xl mt-4"
              size="30"
            />
          </motion.a>)}
          {live_url != "" && (
            <motion.a
              href={live_url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            >
              <UilLink
                className="text-[#DEAD4F] hover:text-white text-4xl mt-4"
                size="30"
              />
            </motion.a>
          )}
        </div>
      </div>
      <div>
        {/* <p className="text-white   mt-4">{skills.map((skill: string) => {
          return <span>{skill} <br /> </span>
        })
        }</p> */}
        <p className="text-white text-lg my-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

// hover:shadow-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
