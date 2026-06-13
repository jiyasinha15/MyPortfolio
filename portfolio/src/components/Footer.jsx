import { Heart } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t py-8 ${
        darkMode
          ? "border-white/10"
          : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p
          className={`flex items-center justify-center gap-2 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Made with <Heart size={18} className="text-red-500" />
          by Jiya Sinha © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;