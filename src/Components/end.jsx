import { motion } from 'framer-motion';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsArrowUpSquare } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

const End = () => {
  const { isDarkMode, colors } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='relative bg-slate-900/50 backdrop-blur-sm border-t border-white/10'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Copyright Section */}
          <motion.div
            className='flex items-center gap-2 text-white/70'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AiOutlineCopyrightCircle className='text-blue-400 text-lg' />
            <p
              className={`text-sm md:text-base ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              } `}
            >
              Aditya Tambe, {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className='group flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/50 rounded-lg transition-all duration-300 text-blue-400 hover:text-blue-300'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsArrowUpSquare className='text-lg group-hover:animate-bounce' />
            <span className='text-sm font-medium hidden sm:inline'>
              Back to Top
            </span>
          </motion.button>
        </div>

        {/* Additional Footer Content */}
        <motion.div
          className='mt-6 pt-6 border-t border-white/10 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            className={`text-white/50 text-xs md:text-sm ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
          >
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute bottom-0 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 right-1/4 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl'></div>
      </div>
    </footer>
  );
};

export default End;
