// import { motion } from 'framer-motion'
// import { Link } from "react-router-dom";

// export default function SkillsIntro() {
// 	return (
// 	  <motion.section className="w-full bg-white text-black py-16 px-8 md:px-20">
  
// 		{/* Title */}
// 		<motion.p className="text-xs tracking-[0.25em] text-gray-400 uppercase">
// 			Skills
// 		</motion.p>

// 		<motion.h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight text-gray-800 mb-5">
// 			Technologies I work with
// 		</motion.h2>
  
// 		{/* Description */}
// 		<motion.p className="max-w-4xl text-sm md:text-base leading-relaxed mb-8 m-auto">
// 		  I build modern full-stack applications and explore data-driven
// 		  solutions using tools from both software engineering and data
// 		  science. My experience spans web development technologies like
// 		  React, Node.js, Express, and MongoDB, while I am actively expanding
// 		  my knowledge in data analysis and machine learning using Python,
// 		  NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn.
// 		</motion.p>
  
// 		{/* Read More */}
// 		<motion.div className="flex items-center gap-4 text-sm tracking-wider cursor-pointer group ml-25">
  
// 		  <motion.span className="h-6 w-[2px] bg-gray-400"></motion.span>
// 		  	<Link to="/skills" className=" transition-all duration-300 hover:scale-105 hover:text-[#3B5AFF]">
// 		  		READ MORE
//         	</Link>
  
// 		  <motion.span className="h-6 w-[2px] bg-gray-400"></motion.span>
  
// 		</motion.div>
  
// 	  </motion.section>
// 	);
//   }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SkillsIntro() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-white text-black py-15 px-8 md:px-20"
    >

      {/* Small Title */}
      <motion.p
        variants={item}
        className="text-xs tracking-[0.25em] text-gray-400 uppercase"
      >
        Skills
      </motion.p>

      {/* Main Heading */}
      <motion.h2
        variants={item}
        className="mt-3 text-3xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight text-gray-800 mb-6"
      >
        Technologies I work with
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={item}
        className="max-w-4xl text-sm md:text-base leading-relaxed mb-10 text-gray-600 m-auto"
      >
        I build modern full-stack applications and explore data-driven
        solutions using tools from both software engineering and data
        science. My experience spans web development technologies like
        React, Node.js, Express, and MongoDB, while I am actively expanding
        my knowledge in data analysis and machine learning using Python,
        NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn.
      </motion.p>

      {/* Read More */}
      <motion.div
        variants={item}
        className="flex items-center gap-4 text-sm tracking-wider group ml-25"
      >

        {/* Left Line */}
        <motion.span
          initial={{ height: 0 }}
          animate={{ height: "24px" }}
          transition={{ duration: 0.6 }}
          className="w-[2px] bg-gray-400"
        />

        {/* Link */}
        <Link
          to="/skills"
          className="relative transition-all duration-300 hover:scale-105 hover:text-[#3B5AFF]"
        >
          READ MORE

          {/* Animated underline */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3B5AFF] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Right Line */}
        <motion.span
          initial={{ height: 0 }}
          animate={{ height: "24px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[2px] bg-gray-400"
        />

      </motion.div>

    </motion.section>
  );
}