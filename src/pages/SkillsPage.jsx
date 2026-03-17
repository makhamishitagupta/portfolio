import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython
} from "react-icons/fa";

import {
	SiJavascript,
	SiMongodb,
	SiExpress,
	SiMysql,
	SiNumpy,
	SiPandas,
	SiScikitlearn,
	SiCplusplus,
	SiPython
} from "react-icons/si";

import { useEffect } from "react";

import { TbBrandCpp } from "react-icons/tb";

const usingNow = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "SQL", icon: <SiMysql size={40} color="#4479A1" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> }
];

const learning = [
  { name: "NumPy", icon: <SiNumpy size={40} color="#013243" /> },
  { name: "Pandas", icon: <SiPandas size={40} color="#150458" /> },
  { name: "Seaborn", icon: <SiPython size={40} color="#3776AB" /> },
  { name: "Matplotlib", icon: <SiPandas size={40} /> },
  { name: "Scikit-learn", icon: <SiScikitlearn size={40} color="#F7931E" /> }
];

const otherSkills = [
  { name: "C", icon: <TbBrandCpp size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  useEffect(() => {
    // Scroll to top when Projects page loads
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <section className="bg-[#1A1A1A] py-20 px-6 text-center">
		<motion.div 
            className="pb-8 border-b border-gray-400 px-4 sm:px-6 lg:px-10 mb-20 mr-20 ml-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
        	<motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-200 text-left text-xl md:text-xl lg:text-[4.5rem] leading-tight font-medium tracking-tight"
			>
				Technologies that
				<br />
				shape my development
            </motion.h2>
        </motion.div>
	
      {/* USING NOW */}
      <div className="max-w-5xl mx-auto mb-16 text-black">
        <h3 className="text-sm tracking-[6px] font-semibold mb-10 text-white">
          USING NOW:
        </h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 text-[#AAAAAA]"
        >
          {usingNow.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center gap-3"
            >
              {skill.icon}
              <span className="text-xs tracking-[2px]">
                {skill.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LEARNING */}
      <div className="max-w-4xl mx-auto mb-16 text-black">
        <h3 className="text-sm tracking-[6px] font-semibold mb-10 text-white">
          LEARNING:
        </h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[#AAAAAA]"
        >
          {learning.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center gap-3"
            >
              {skill.icon}
              <span className="text-xs tracking-[2px]">
                {skill.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* OTHER SKILLS */}
      <div className="max-w-3xl mx-auto text-black">
        <h3 className="text-sm tracking-[6px] font-semibold mb-10 text-white">
          OTHER SKILLS:
        </h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[#AAAAAA]"
        >
          {otherSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center gap-3"
            >
              {skill.icon}
              <span className="text-xs tracking-[2px]">
                {skill.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}