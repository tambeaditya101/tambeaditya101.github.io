import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };
      
      setTrails(prev => [...prev.slice(-15), newTrail]); // Keep last 15 points
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => updateMousePosition(e));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up old trails
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 1000));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className={`fixed w-4 h-4 rounded-full mix-blend-difference ${
          isDarkMode ? 'bg-white' : 'bg-black'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className={`fixed w-8 h-8 rounded-full border-2 mix-blend-difference ${
          isDarkMode ? 'border-white/50' : 'border-black/50'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Trail particles */}
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.1, 1 - age / 1000);
        
        return (
          <motion.div
            key={trail.id}
            className={`fixed w-2 h-2 rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            }`}
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
              opacity,
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale,
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.5,
              rotate: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          />
        );
      })}

      {/* Floating sparkles */}
      <motion.div
        className={`fixed w-1 h-1 rounded-full ${
          isDarkMode ? 'bg-white' : 'bg-purple-600'
        }`}
        style={{
          left: mousePosition.x + Math.sin(Date.now() * 0.001) * 30,
          top: mousePosition.y + Math.cos(Date.now() * 0.001) * 30,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0,
        }}
      />
      
      <motion.div
        className={`fixed w-1 h-1 rounded-full ${
          isDarkMode ? 'bg-blue-400' : 'bg-pink-600'
        }`}
        style={{
          left: mousePosition.x + Math.sin(Date.now() * 0.002 + 1) * 40,
          top: mousePosition.y + Math.cos(Date.now() * 0.002 + 1) * 40,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default CursorTrail;
