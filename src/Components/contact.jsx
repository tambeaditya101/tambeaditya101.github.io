import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {
  FaComment,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { isDarkMode, colors } = useTheme();
  const currentColors = isDarkMode ? colors.dark : colors.light;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91-8082206881",
      link: "https://api.whatsapp.com/send?phone=+918082206881",
      color: "text-green-400",
      delay: "200ms",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "tambeaditya101@gmail.com",
      link: "mailto:tambeaditya101@gmail.com",
      color: "text-blue-400",
      delay: "400ms",
    },
    {
      icon: BsLinkedin,
      title: "LinkedIn",
      value: "Aditya Tambe",
      link: "https://www.linkedin.com/in/aditya-tambe-789b42249/",
      color: "text-blue-500",
      delay: "600ms",
    },
  ];

  const socialLinks = [
    {
      icon: AiFillGithub,
      href: "https://github.com/tambeaditya101",
      color: "hover:text-gray-300",
      id: "contact-github",
    },
    {
      icon: AiOutlineWhatsApp,
      href: "https://api.whatsapp.com/send?phone=+918082206881",
      color: "hover:text-green-400",
      id: "contact-whatsapp",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/aditya-tambe-789b42249/",
      color: "hover:text-blue-500",
      id: "contact-linkedin",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-4 bg-gradient-to-br ${currentColors.primary} relative overflow-hidden transition-all duration-500`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact{" "}
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me!
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Talent wins games, but teamwork and intelligence wins championships.
          </p>
          <p className="text-gray-400 text-lg">
            Fill the form to connect if any query 😊
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Get In Touch
              </h3>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: info.delay }}
                  >
                    <div
                      className={`p-3 rounded-full bg-white/10 ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white hover:underline transition-colors duration-300`}
                        id={
                          info.title.toLowerCase() === "phone"
                            ? "contact-phone"
                            : info.title.toLowerCase() === "email"
                            ? "contact-email"
                            : "contact-linkedin"
                        }
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={social.id}
                      className={`p-3 bg-white/10 rounded-full text-white ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>

                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>

                <div className="relative group">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>

                <div className="relative group">
                  <FaComment className="absolute left-4 top-6 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    placeholder="How Can I Help You?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group"
                >
                  <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
