import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ darkMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-72 h-72 bg-purple-500/30 top-20 left-20"></div>

        <div
          className="blob w-72 h-72 bg-blue-500/30 bottom-20 right-20"
          style={{ animationDelay: "2s" }}
        ></div>

        <div
          className="blob w-72 h-72 bg-pink-500/30 top-1/2 left-1/2"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-purple-500 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hello, I'm
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Jiya Sinha
          </span>
        </h1>

        <h2
          className={`text-2xl md:text-4xl font-semibold mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          B.Tech CSE Student & Full Stack Developer
        </h2>

        <p
          className={`max-w-2xl mx-auto text-lg leading-relaxed mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Crafting modern, responsive, and intuitive web
          experiences using React, Node.js, and creative
          problem-solving.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className={`px-8 py-3 rounded-full border transition hover:scale-105 ${
              darkMode
                ? "border-white/20 hover:bg-white/10"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/jiyasinha15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/jiya-sinha-89b002387/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:jiya15092007@gmail.com"
            className="hover:text-purple-500 transition"
          >
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;