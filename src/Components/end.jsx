import { motion } from "framer-motion";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

const End = () => {
  const { isDarkMode, colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 relative">
        {/* Copyright block - same classes and border/top spacing as before */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Copyright Section - preserved exactly */}
          <div className="flex items-center gap-2 text-white/70 mx-auto">
            <AiOutlineCopyrightCircle className="text-blue-400 text-lg" />
            <p
              className={`text-sm md:text-base ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }`}
            >
              Aditya Tambe, {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>

          {/* (If you had other footer items in the flex row you can restore them here;
          kept the flex structure identical so other elements won't break) */}
        </motion.div>

        {/* Back to Top Button - moved outside the flow but preserved original styling */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-center gap-2 
             px-4 py-2 
             bg-blue-500/20 hover:bg-blue-500/30 
             border border-blue-400/30 hover:border-blue-400/50 
             rounded-lg transition-all duration-300 
             text-blue-400 hover:text-blue-300 
             md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2
             mx-auto mt-6 mb-4 md:mt-0 md:mb-0 
             w-auto max-w-[200px]"
        >
          <BsArrowUpSquare className="text-lg group-hover:animate-bounce" />
          <span className="text-sm font-medium sm:inline">Back to Top</span>
        </motion.button>

        {/* Additional Footer Content (commented out in your original) */}
        {/* <motion.div
      className="mt-6 pt-6 border-t border-white/10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p
        className={`text-white/50 text-xs md:text-sm ${
          isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary
        }`}
      >
        Built with React, Tailwind CSS, and Framer Motion
      </p>
    </motion.div> */}
      </div>
    </footer>
  );
};

export default End;
