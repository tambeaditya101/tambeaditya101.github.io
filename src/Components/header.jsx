import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CV from '../assests/Aditya_Tambe_Resume.pdf';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme, colors } = useTheme();

  const currentColors = isDarkMode ? colors.dark : colors.light;

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#github', label: 'GitHub' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const setupObserver = (sectionsToObserve) => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Sort entries by intersection ratio and position
          const visibleEntries = entries.filter(
            (entry) => entry.isIntersecting
          );

          if (visibleEntries.length > 0) {
            // Find the entry with the highest intersection ratio
            const mostVisible = visibleEntries.reduce((prev, current) => {
              return current.intersectionRatio > prev.intersectionRatio
                ? current
                : prev;
            });

            console.log(
              'Setting active section:',
              mostVisible.target.id,
              'ratio:',
              mostVisible.intersectionRatio
            );
            setActiveSection(mostVisible.target.id);
          }
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], // Multiple thresholds for better detection
          rootMargin: '-80px 0px -50% 0px', // Account for navbar height
        }
      );

      sectionsToObserve.forEach((section) => {
        observer.observe(section);
      });

      return observer;
    };

    const sections = navItems.map((item) =>
      document.getElementById(item.href.replace('#', ''))
    );

    // Filter out null sections and log for debugging
    const validSections = sections.filter((section) => section !== null);
    console.log(
      'Valid sections found:',
      validSections.map((s) => s.id)
    );

    if (validSections.length === 0) {
      console.log('No valid sections found, retrying in 500ms...');
      const timeoutId = setTimeout(() => {
        // Retry after a short delay to ensure DOM is ready
        const retrySections = navItems
          .map((item) => document.getElementById(item.href.replace('#', '')))
          .filter((section) => section !== null);

        if (retrySections.length > 0) {
          console.log(
            'Retry successful, found sections:',
            retrySections.map((s) => s.id)
          );
          setupObserver(retrySections);
        }
      }, 500);

      return () => clearTimeout(timeoutId);
    }

    const observer = setupObserver(validSections);

    return () => {
      if (observer) {
        validSections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, [navItems]);

  const handleNavClick = (href) => {
    setActiveSection(href.replace('#', ''));
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      id='nav-menu'
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-900/98 backdrop-blur-xl border-b border-white/30 shadow-2xl'
            : 'bg-white/98 backdrop-blur-xl border-b border-gray-300 shadow-2xl'
          : isDarkMode
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className='container mx-auto px-6 py-4 h-20 flex items-center'>
        <div className='flex items-center justify-between md:space-x-10 w-full'>
          {/* Logo */}
          <motion.a
            href='#home'
            className={`text-2xl font-bold ${currentColors.text} hover:text-purple-400 transition-colors duration-300`}
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aditya <span className='text-purple-400'>Tambe</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8 md:space-x-1'>
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`nav-link px-3 py-2 rounded-lg ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-purple-400 font-semibold bg-purple-400/10'
                    : currentColors.text
                } hover:text-purple-400 hover:bg-purple-400/5 transition-all duration-300 relative`}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/50'
                    layoutId='activeTab'
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.button
              id='resume-button-1'
              className='btn-primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={CV}
                download='Aditya_Tambe_Resume'
                id='resume-link-1'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1tcwo9PNd_T_8rZb-xflcmSSVGDvSANhR/view?usp=sharing'
                  )
                }
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                Resume
              </a>
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-full ${currentColors.surface} ${currentColors.text} hover:text-purple-400 transition-all duration-300 hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={
                isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
              }
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${currentColors.text} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className={`absolute top-full left-0 right-0 z-[9999] mobile-menu-container ${
              isDarkMode ? 'bg-slate-900' : 'bg-white'
            } border-b ${currentColors.border} md:hidden shadow-2xl`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav
              className={`flex flex-col p-6 space-y-4 ${
                isDarkMode ? 'bg-slate-900' : 'bg-white'
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link px-3 py-3 rounded-lg ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-purple-400 font-semibold bg-purple-400/10'
                      : currentColors.text
                  } hover:text-purple-400 hover:bg-purple-400/5 transition-all duration-300 block`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CV}
                download='Aditya_Tambe_Resume'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary inline-flex items-center justify-center gap-2 mt-4'
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('');
                }}
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                Resume
              </a>

              {/* Mobile Theme Toggle Button */}
              <motion.button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false); // close the menu after theme change
                }}
                className={`p-3 rounded-full ${currentColors.surface} ${currentColors.text} hover:text-purple-400 transition-all duration-300 hover:scale-110 mt-4 mx-auto flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={
                  isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                }
              >
                {isDarkMode ? (
                  // Sun icon for light mode
                  <>
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-sm'>Light Mode</span>
                  </>
                ) : (
                  // Moon icon for dark mode
                  <>
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                    </svg>
                    <span className='text-sm'>Dark Mode</span>
                  </>
                )}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
