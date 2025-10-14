import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { FaGitAlt, FaReact, FaRobot } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { isDarkMode, colors } = useTheme();
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

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
    {
      name: "JavaScript",
      icon: TbBrandJavascript,
      color: "#F7DF1E",
      level: 85,
    },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
    { name: "Node.js", icon: DiNodejs, color: "#339933", level: 85 },
    { name: "Express", icon: SiExpress, color: "#000000", level: 80 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
    { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
    { name: "HTML5", icon: AiOutlineHtml5, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: TbBrandCss3, color: "#1572B6", level: 90 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 80 },
    { name: "Gen AI", icon: FaRobot, color: "#FF6B6B", level: 70 },
  ];

  return (
    <section
      className="min-h-screen py-20 relative overflow-hidden"
      id="skills"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            className={`text-xl mb-8 ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
            variants={itemVariants}
          >
            Technologies I work with
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full transition-all duration-300 bg-white  group-hover:shadow-2xl">
                      <IconComponent
                        size={50}
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full rounded-full h-2 mb-2 border border-white-400  bg-transparent overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Percentage */}
                  <motion.span
                    className={`text-sm font-bold ${
                      isDarkMode
                        ? colors.dark.textSecondary
                        : colors.light.textSecondary
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className={`text-lg max-w-3xl mx-auto ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
            variants={itemVariants}
          >
            I'm passionate about learning new technologies and staying
            up-to-date with the latest trends in web development. My expertise
            spans both frontend and backend development, allowing me to build
            full-stack applications with modern, scalable architectures.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
