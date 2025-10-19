import { motion } from "framer-motion";
import ME from "../assests/me.png.jpeg";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { isDarkMode, colors } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-20 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center lg:justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-50"></div>
              <img
                className="relative w-60 h-80 object-cover rounded-xl shadow-2xl border-4 border-white/20"
                src={ME}
                alt="Aditya Tambe Profile"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              id="user-detail-name"
              className="text-2xl md:text-3xl font-semibold text-white"
              variants={itemVariants}
            >
              I'm <span className="gradient-text">Aditya Tambe</span> from
              Mumbai, Maharashtra
            </motion.h2>

            <motion.p
              id="user-detail-intro"
              className={`text-lg leading-relaxed break-hyphen ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }`}
              variants={itemVariants}
            >
              A passionate Full Stack Web Developer with expertise in modern web
              technologies. I possess strong self-discipline and thrive working
              independently while collaborating effectively in team
              environments. I'm eager to join progressive organizations where I
              can contribute to significant projects and continue growing
              professionally.
            </motion.p>

            <motion.p
              className={`text-lg leading-relaxed break-hyphen ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }`}
              variants={itemVariants}
            >
              I specialize in developing scalable, responsive websites and
              applications using cutting-edge technologies. My experience spans
              both frontend and backend development, with a particular interest
              in emerging technologies like Generative AI and modern JavaScript
              frameworks.
            </motion.p>

            {/* Skills Grid */}
            {/* <motion.div variants={itemVariants}>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Technologies I work with:
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                {skills?.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className='bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300'
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div
                  className={`text-sm ${
                    isDarkMode
                      ? colors.dark.textSecondary
                      : colors.light.textSecondary
                  }`}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div
                  className={`text-sm ${
                    isDarkMode
                      ? colors.dark.textSecondary
                      : colors.light.textSecondary
                  }`}
                >
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div
                  className={`text-sm ${
                    isDarkMode
                      ? colors.dark.textSecondary
                      : colors.light.textSecondary
                  }`}
                >
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
