import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Async Weather Tracker",
    description:
      "A responsive weather application that fetches real-time weather data using APIs with asynchronous JavaScript operations.",
    tech: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/jiyasinha15/Assignment02-JS",
    live: "https://assignment02-js.vercel.app", 
    gradient: "from-cyan-500 to-blue-600",
    emoji: "🌦️",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Interactive cryptocurrency dashboard displaying market trends, live prices, and analytics with dynamic data visualization.",
    tech: ["React", "Chart.js", "API", "Tailwind CSS"],
    github: "https://github.com/jiyasinha15/Stock-Dashboard",
    live: "https://stock-dashboard-steel-three.vercel.app/",
    gradient: "from-yellow-500 to-orange-600",
    emoji: "📈",
  },
  {
    title: "Real Estate Platform",
    description:
      "Modern real estate platform featuring property listings, search filters, and responsive user experience.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/jiyasinha15/Assignment02-JS",
    live: "https://capstone-web-dev-sigma.vercel.app", 
    gradient: "from-purple-500 to-pink-600",
    emoji: "🏠",
  },
  {
    title: "Disaster Management System",
    description:
      "A comprehensive system for managing and responding to disaster situations with real-time communication and resource allocation.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/jiyasinha15/disaster-management-system",
    live: "https://disaster-management-frontend-a9pa.onrender.com", 
    gradient: "from-purple-500 to-pink-600",
    emoji: "🏠",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured{" "}
          <span className="text-purple-500">
            Projects
          </span>
        </h2>

        <p
          className={`text-center max-w-2xl mx-auto mb-16 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Some projects showcasing my passion for
          building interactive and impactful web
          applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className={`rounded-3xl overflow-hidden border backdrop-blur-xl ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              {/* Gradient Header */}
              <div
                className={`h-40 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-6xl">
                  {project.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  
                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>

                  {/* Demo Button */}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "border-white/20 hover:bg-white/10"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-not-allowed opacity-60 ${
                        darkMode
                          ? "bg-white/10 text-gray-400"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <ExternalLink size={18} />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;