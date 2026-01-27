import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteData } from "../data/data";
import "./Projects.css";


function Projects() {
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.section
      id="projects"
      className="pb-30 bg-white text-black relative px-28"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mx-auto w-full max-w-6xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="recent-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          RECENT WORK
        </motion.p>

        <div className="project-list relative">
          {siteData.projects.map((p, idx) => (
            <motion.div
              key={p.id ?? idx}
              className="project-row transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`project-name cursor-pointer font-semibold transition-all duration-300 ${
                  hovered === idx ? "text-gray-300" : "text-black"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <a href={p.link}>{p.title}</a>
              </div>
              
              <div 
                className={`project-category text-sm cursor-pointer transition-all duration-300 ${
                  hovered === idx ? "text-gray-300" : "text-gray-500"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
            >
                {p.category ||
                  p.type ||
                  (p.tags && p.tags.join(", ")) ||
                  "Design & Development"}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/projects" className="more-btn">
              More work →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating circular "View" button */}
      {hovered !== null && (
        <div
          className="fixed z-50 pointer-events-none" // ensures no flicker
          style={{
            left: mouse.x,
            top: mouse.y,
            transform: "translate(-50%, -50%)",
          }}
        >
            <button
                className="w-20 h-20 rounded-full bg-[#3B5AFF] text-white font-medium text-sm shadow-xl flex items-center justify-center transition-transform duration-200"
            >
                View
            </button>
          

        </div>
      )}
    </motion.section>
  );
}

export default Projects;

