import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";




const SectionWrapper = (Component: React.FC,  idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;