import React from "react";
import {motion} from "framer-motion";
type Props = {};

const MouseIcon = (props: Props) => {
  return (
    <motion.div className="absolute xs:bottom-10 bottom-32 w-full flex sm:px-32  "
    initial = {{ opacity: 0, scale: 0.5 }}
    animate = {{ opacity: 1, scale: 1 }}
    transition = {{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
    >
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#dead4f] flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#dead4f] mb-1"
          />
        </div>
      </a>
    </motion.div>
  );
};

export default MouseIcon;
