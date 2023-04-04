import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const SkillCard = ( { index, className, icon , title, skills} : any) => {
  return (
    <motion.div
        className={`${className}  bg-[#1F1F1F] rounded-2xl shadow-2xl flex flex-col  items-center p-10`}
        variants={fadeIn("right", "spring", index * 0.75, 0.75)}
        // whileInView={fadeIn("right", "spring", index * 1, 0.75)}
    >
      <div className="w-20 h-20 bg-[#DEAD4F] rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div>
        <p className="text-2xl text-[#DEAD4F] mt-4">{title}</p>
      </div>
      <div>
        <p className="text-white   mt-4">{skills.map((skill: string) => {
          return <span key={skill}>{skill} <br /> </span>
        })
        }</p>
      </div>
    </motion.div>
  )
}

export default SkillCard