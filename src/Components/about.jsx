import React from "react";
// import CV from "../assests/cv.pdf";
import ME from "../assests/me.png.jpeg";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
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
          <p
            id="user-detail-intro"
            style={{ letterSpacing: "2px", color: "white", paddingTop: "10px" }}
          >
            A Frontend Web developer with good technical skills in Masai School
            who possess self-discipline and the ability to work under minimum
            supervision. Forward to join a progressive organization with
            opportunities to work on significant projects. Developing scalable
            websites and application using a wide range of front-end and
            back-end skills like HTML, CSS, JavaScript, React, Redux, TypeScript
            and Node Js.
            {/* About Me
            An enthusiastic Mern Developer with excellent hands-on experience in developing scalable websites and application using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, React, Redux and Node Js. Highly skilled in design, development and implementation of functional specifications, Ready for taking challenging roles.. */}
          </p>
          {/* <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xToIqX_OF_AIg_c4FZYW943_D9NaLcpI/view?usp=sharing"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default About;
