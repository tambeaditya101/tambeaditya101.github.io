import React from "react";
import CV from "../assests/Aditya-Tambe-Resume.pdf";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>
          </div>
          <h1 id="user-detail-name">Aditya</h1>
          {/* <h3 id="user-detail-skill">
            Mern <span>Developer.</span>
          </h3> */}
          <h3 id="user-detail-skill">
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "A Bodybuilding Enthusiast",
                  "A Reader",
                  "An occational Artist ",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h3>

          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FjXJuFMy2nU-P03Wx8Ck25Ct9t4l7c3q/view?usp=share_link"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
