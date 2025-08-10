import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();

  // Generate random floating elements
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  const geometricShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20' 
            : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30'
        }`}
        animate={{
          x: ['-20%', '120%'],
          y: ['20%', '80%', '20%'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className={`absolute w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20' 
            : 'bg-gradient-to-r from-pink-400/30 to-red-400/30'
        }`}
        animate={{
          x: ['120%', '-20%'],
          y: ['80%', '20%', '80%'],
          scale: [0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className={`absolute w-64 h-64 rounded-full blur-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-green-600/15 to-teal-600/15' 
            : 'bg-gradient-to-r from-yellow-400/25 to-orange-400/25'
        }`}
        animate={{
          x: ['50%', '10%', '90%', '50%'],
          y: ['10%', '90%', '10%'],
          scale: [1, 0.6, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Floating particles */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${
            isDarkMode 
              ? 'bg-white/10' 
              : 'bg-gray-800/20'
          }`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(element.id) * 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            isDarkMode 
              ? 'border-white/10' 
              : 'border-gray-600/20'
          } border`}
          style={{
            width: 40 * shape.scale,
            height: 40 * shape.scale,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            borderRadius: shape.id % 3 === 0 ? '50%' : shape.id % 2 === 0 ? '0%' : '10%',
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [shape.scale, shape.scale * 1.2, shape.scale],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 15 + shape.id * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop 
              offset="0%" 
              stopColor={isDarkMode ? '#8b5cf6' : '#3b82f6'} 
              stopOpacity="0.1" 
            />
            <stop 
              offset="50%" 
              stopColor={isDarkMode ? '#ec4899' : '#8b5cf6'} 
              stopOpacity="0.3" 
            />
            <stop 
              offset="100%" 
              stopColor={isDarkMode ? '#06b6d4' : '#ec4899'} 
              stopOpacity="0.1" 
            />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </svg>

      {/* Pulsing dots grid */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-white' : 'bg-gray-600'
            }`}
            style={{
              left: `${(i % 10) * 10 + 5}%`,
              top: `${Math.floor(i / 10) * 20 + 10}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
