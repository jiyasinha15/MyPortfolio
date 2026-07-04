import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`rounded-3xl p-10 md:p-14 backdrop-blur-xl border text-center ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white border-gray-200 shadow-lg"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's{" "}
          <span className="text-purple-500">
            Connect
          </span>
        </h2>

        <p
          className={`max-w-2xl mx-auto mb-10 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          I'm always open to discussing new
          opportunities, collaborations, or simply
          connecting with fellow developers.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-purple-500" />
            <a
              href="mailto:jiya15092007@gmail.com"
              className="hover:text-purple-500 transition"
            >
              jiya15092007@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/jiyasinha15"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "bg-white/10 hover:bg-white/20"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/jiya-sinha-89b002387/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "bg-white/10 hover:bg-white/20"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:jiya15092007@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
        >
          <Mail size={20} />
          Let's Connect
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;