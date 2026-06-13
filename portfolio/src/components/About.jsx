import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p
          className={`text-center max-w-2xl mx-auto mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Passionate about creating elegant digital experiences
          and solving real-world problems through technology.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-3xl backdrop-blur-xl border transition ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Who am I?
            </h3>

            <p
              className={`leading-relaxed mb-4 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I'm <strong>Jiya Sinha</strong>, a B.Tech CSE student
              at <strong>K.R. Mangalam University</strong> with a
              passion for full stack development and UI/UX design.
            </p>

            <p
              className={`leading-relaxed mb-4 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I enjoy building responsive and interactive web
              applications using modern technologies like React,
              Node.js, and MySQL.
            </p>

            <p
              className={`leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Beyond coding, I love exploring new technologies,
              improving problem-solving skills, and transforming
              ideas into meaningful digital experiences.
            </p>
          </motion.div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">
            {[
              ["Education", "B.Tech CSE"],
              ["University", "K.R. Mangalam"],
              ["Projects", "3+"],
              ["Experience", "Fresher"],
            ].map(([title, value], index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className={`p-6 rounded-3xl backdrop-blur-xl border transition ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200 shadow-lg"
                }`}
              >
                <h4 className="text-purple-500 font-semibold mb-2">
                  {title}
                </h4>

                <p className="text-xl font-bold">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;