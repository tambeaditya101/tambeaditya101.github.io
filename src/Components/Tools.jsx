import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";
import { SiCanva, SiNetlify, SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useTheme } from "../contexts/ThemeContext";

const Tools = () => {
  const { isDarkMode, colors } = useTheme();
  const tools = [
    {
      name: "VS Code",
      icon: TbBrandVscode,
      color: "text-blue-400",
      bgColor: "rgba(96,165,250,0.3)", // 10% opacity of blue-400
      hoverColor: "rgba(96,165,250,0.2)", // 20% opacity on hover
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-red-400",
      bgColor: "rgba(251,146,60,0.3)",
      hoverColor: "rgba(251,146,60,0.2)",
    },
    {
      name: "Canva",
      icon: SiCanva,
      color: "text-purple-400",
      bgColor: "rgba(139,92,246,0.3)",
      hoverColor: "rgba(139,92,246,0.2)",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      color: "text-white",
      bgColor: "rgba(20,184,166,0.3)",
      hoverColor: "rgba(20,184,166,0.2)",
    },
    {
      name: "Vercel",
      icon: RxVercelLogo,
      color: "text-gray-300",
      bgColor: "rgba(156,163,175,0.2)",
      hoverColor: "rgba(156,163,175,0.2)",
    },
    {
      name: "GitHub",
      icon: AiFillGithub,
      color: "text-black-200",
      bgColor: "rgba(41, 74, 129, 0.3)",
      hoverColor: "rgba(156,163,175,0.2)",
    },
    {
      name: "Git",
      icon: BsGit,
      color: "text-red-400",
      bgColor: "rgba(248,113,113,0.3)",
      hoverColor: "rgba(248,113,113,0.2)",
    },
    {
      name: "Figma",
      icon: FiFigma,
      color: "text-pink-400",
      bgColor: "rgba(236,72,153,0.3)",
      hoverColor: "rgba(236,72,153,0.2)",
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
    <section id="tools" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Tools</span>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-3xl border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{ backgroundColor: tool.bgColor }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    // style={{ backgroundColor: tool.bgColor }}
                  >
                    <IconComponent className={`w-8 h-8 ${tool.color}`} />
                  </div>
                  <h3 className={`font-semibold text-lg ${tool.color}`}>
                    {tool.name}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
