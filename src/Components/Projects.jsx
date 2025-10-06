import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import brookSpic from "../assests/brookSpic.png";
import caretLane from "../assests/caret.png";
import hc from "../assests/health-care.png";
import internTheorypic from "../assests/internTheorypic.png";
import tripAdpic from "../assests/tripAdpic.png";
import urlShortner from "../assests/url-shortner.png";
import nextLearnEcom from "../assests/nextLearn-ecom.png";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "URL Shortener",
      description:
        "A modern, full-stack URL shortener application built with React and Node.js. Create short, shareable links with optional custom slugs, user authentication, and a beautiful, responsive interface.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Redux-Toolkit",
        "MongoDB",
        "Node",
        "Express",
        "JWT",
      ],
      image: urlShortner,
      liveLink: "https://url-shortener-adi.vercel.app/",
      githubLink: "https://github.com/tambeaditya101/url-shortener-adi",
      featured: true,
    },
    {
      id: 1,
      title: "NextLearn Store – Full-Stack E-Commerce Web App ",
      description:
        "A modern, full-stack e-commerce application built with Next.js and PostgreSQL,featuring secure JWT authentication, dynamic product management, and a responsive, elegant UI powered by Tailwind CSS and Context API.",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Context API",
        "PostgreSQL",
        "Node.js",
        "Prisma ORM",
        "JWT Authentication",
      ],
      image: nextLearnEcom,
      liveLink: "https://next-ecom2-0.vercel.app/",
      githubLink: "https://github.com/tambeaditya101/next-ecom2.0",
      featured: true,
    },
    {
      id: 2,
      title: "Tata 1mg Clone",
      description:
        "E-commerce website for medicines with complete functionalities including login/signup, sort-filter-pagination, CRUD operations for Admin panel, with full responsiveness.",
      techStack: ["React", "Redux", "Chakra UI", "Firebase", "JavaScript"],
      image: hc,
      liveLink: "https://health-care-tau.vercel.app/",
      githubLink:
        "https://github.com/RutuvikP/chemical-rake-3857/tree/main/health-care",
      featured: true,
    },
    {
      id: 3,
      title: "CaratLane Clone",
      description:
        "A comprehensive jewelry e-commerce platform featuring gold, silver, platinum, and diamond jewelry with modern shopping experience.",
      techStack: [
        "React",
        "Redux",
        "Chakra UI",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      image: caretLane,
      liveLink: "https://caratlane.vercel.app/",
      githubLink:
        "https://github.com/tambeaditya101/unit-6-project-CaretLane-clone",
      featured: true,
    },
    {
      id: 4,
      title: "Brookstone Clone",
      description:
        "E-Commerce retail platform with advanced features like search functionality, cart management, product filtering, and admin panel.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Chakra UI"],
      image: brookSpic,
      liveLink: "https://brookstoneclone-tambeaditya101.vercel.app/",
      githubLink: "https://github.com/tambeaditya101/resolute-shock-3974",
      featured: false,
    },
    {
      id: 5,
      title: "Let's Trip",
      description:
        "A beautiful travel destination website that helps users discover and choose perfect vacation spots with stunning visuals.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: tripAdpic,
      liveLink: "https://frabjous-khapse-789208.netlify.app/index.html",
      githubLink: "https://github.com/tambeaditya101/thundering-self-8895",
      featured: false,
    },
    {
      id: 6,
      title: "Intern Theory Clone",
      description:
        "A platform designed to help students find appropriate internships quickly and become job-ready with comprehensive resources.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: internTheorypic,
      liveLink: "https://illustrious-gelato-7e4fe9.netlify.app/index.html",
      githubLink: "https://github.com/Sagarbisht07/nosy-coach-5858",
      featured: false,
    },
  ];

  return (
    <section
      className="min-h-screen py-20 relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl"></div>
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
            Latest <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className={`text-xl mb-8 ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
            variants={itemVariants}
          >
            Showcasing my recent work and achievements
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`card group cursor-pointer overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode
                      ? colors.dark.textSecondary
                      : colors.light.textSecondary
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full border  ${
                        isDarkMode
                          ? colors.dark.textSecondary
                          : colors.light.textSecondary
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm py-2 px-4 text-center"
                  >
                    <FiExternalLink className="inline mr-2" size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-sm py-2 px-4 text-center"
                  >
                    <AiFillGithub className="inline mr-2" size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
