import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMysql,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },

];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p
          className={`text-center max-w-2xl mx-auto mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Technologies and tools I use to build efficient
          and modern applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col items-center gap-4 transition ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <div className="text-purple-500">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;