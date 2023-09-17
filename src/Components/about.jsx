import React, { useEffect } from "react";
// import CV from "../assests/cv.pdf";
import ME from "../assests/me.png.jpeg";
import "aos/dist/aos.css";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img" data-aos="zoom-out">
          <img className="home-img" src={ME} alt="profilePic" />
        </div>
        <div className="nav-link about">
          <h1>
            About <span>Me</span>
          </h1>
          <h2 id="user-detail-name">
            I'm <span>Aditya Tambe</span> from Mumbai, Maharashtra
          </h2>
          {/* <h4>Mern Developer</h4> */}
          <p id="user-detail-intro" data-aos="fade-left">
            A Frontend Web developer with good technical skills in Masai School
            who possess self-discipline and the ability to work under minimum
            supervision. Forward to join a progressive organization with
            opportunities to work on significant projects. Developing scalable
            websites and application using a wide range of front-end and
            back-end skills like HTML, CSS, JavaScript, React, Redux,
            TypeScript,Node Js, Express, MongodB and Prompt
            Engineering(Generative Ai).
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
