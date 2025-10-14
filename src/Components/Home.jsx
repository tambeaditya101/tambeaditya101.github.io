import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CV from "../assests/Aditya_Tambe_Resume.pdf";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
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
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-400/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce delay-1200"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div className="mb-8" variants={itemVariants}>
            <span
              className={`inline-block text-xl md:text-xl font-bold mb-2 ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }`}
            >
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            id="user-detail-name"
            className="text-6xl md:text-8xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? "from-gray-200 via-blue-300 to-purple-300"
                  : "from-gray-900 via-blue-900 to-purple-900"
              }`}
            >
              Aditya
            </span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div className="mb-12" variants={itemVariants}>
            <h3
              id="user-detail-skill"
              className={`text-xl md:text-2xl lg:text-3xl font-bold min-h-[2.5rem] ${
                isDarkMode
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }`}
            >
              <Typewriter
                options={{
                  strings: [
                    "A Full Stack Web Developer",
                    "A Bodybuilding Enthusiast",
                    "A Reader",
                    "An Occasional Artist",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </h3>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <button
              id="resume-button-2"
              className="btn-primary group"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1sZx14qmCT2UK0N968m1lWRIZxOoByZWH/view?usp=sharing"
                )
              }
            >
              <a
                href={CV}
                download="Aditya_Tambe_Resume"
                id="resume-link-2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </a>
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
