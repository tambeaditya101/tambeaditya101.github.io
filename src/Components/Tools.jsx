import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { RxVercelLogo } from 'react-icons/rx';
import { SiCanva, SiNetlify, SiPostman } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { useTheme } from '../contexts/ThemeContext';

const Tools = () => {
  const { isDarkMode, colors } = useTheme();
  const tools = [
    {
      name: 'VS Code',
      icon: TbBrandVscode,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      hoverColor: 'hover:bg-blue-400/20',
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      hoverColor: 'hover:bg-orange-400/20',
    },
    {
      name: 'Canva',
      icon: SiCanva,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      hoverColor: 'hover:bg-purple-400/20',
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
      color: 'text-teal-400',
      bgColor: 'bg-teal-400/10',
      hoverColor: 'hover:bg-teal-400/20',
    },
    {
      name: 'Vercel',
      icon: RxVercelLogo,
      color: 'text-gray-300',
      bgColor: 'bg-gray-400/10',
      hoverColor: 'hover:bg-gray-400/20',
    },
    {
      name: 'Git',
      icon: BsGit,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      hoverColor: 'hover:bg-red-400/20',
    },
    {
      name: 'GitHub',
      icon: AiFillGithub,
      color: 'text-gray-300',
      bgColor: 'bg-gray-400/10',
      hoverColor: 'hover:bg-gray-400/20',
    },
    {
      name: 'Figma',
      icon: FiFigma,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      hoverColor: 'hover:bg-pink-400/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id='tools' className='min-h-screen py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-40 left-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-40 right-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            My <span className='gradient-text'>Tools</span>
          </h2>
          <p
            className={`text-xl mb-8 ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
          >
            What I am Expert In ?
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 ${tool.bgColor} ${tool.hoverColor} transition-all duration-300 hover:scale-105 hover:border-white/20`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className='flex flex-col items-center text-center space-y-4'>
                  <div
                    className={`p-4 rounded-xl ${tool.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${tool.color}`} />
                  </div>
                  <h3 className={`font-semibold text-lg ${tool.color}`}>
                    {tool.name}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
