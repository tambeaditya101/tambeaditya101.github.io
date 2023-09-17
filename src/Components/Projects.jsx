import React, { useEffect } from "react";
import hc from "../assests/health-care.png";
import tripAdpic from "../assests/tripAdpic.png";
import brookSpic from "../assests/brookSpic.png";
import internTheorypic from "../assests/internTheorypic.png";
import { SiNetlify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import caretLane from "../assests/caret.png";
import "aos/dist/aos.css";
import Aos from "aos";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, disable: "mobile" });
  }, []);
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card" data-aos="fade-right">
            <img src={hc} alt="" />
            <div className="layer">
              <h5 className="project-title">Tata 1mg clone</h5>
              <p className="project-description" data-aos="fade-down">
                E-commerce website of complete medicines with all the necessary
                functionalities including login/signup, sort-filter-pagination,
                CRUD operations for Admin panel, with responsiveness in possible
                pages
              </p>
              <p className="project-tech-stack">
                Tech-Stack : HTML,CSS,JS,React,Redux,Chakra-ui,Firebase
              </p>
              <div class="project-deployed-link" data-aos="fade-left">
                <a href="https://health-care-tau.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link" data-aos="fade-left">
                <a
                  href="https://github.com/RutuvikP/chemical-rake-3857/tree/main/health-care"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-aos="fade-left">
            <img src={caretLane} alt="" />
            <div className="layer">
              <h5 className="project-title">Caretlane clone</h5>
              <p className="project-description" data-aos="fade-down">
                A website comprising of only jewelleries made up of gold,
                silver, platinum or diamond in the form of bangles, necklaces,
                earrings, bracelets etc.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : Javascript | React | Redux | Chakra UI | Node |
                Express | MongoDB.
              </p>
              <div class="project-deployed-link" data-aos="fade-right">
                <a href="https://caratlane.vercel.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link" data-aos="fade-right">
                <a
                  href="https://github.com/tambeaditya101/unit-6-project-CaretLane-clone"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-aos="fade-left">
            <img src={brookSpic} alt="" />
            <div className="layer">
              <h5 className="project-title">Brookstone clone</h5>
              <p className="project-description" data-aos="fade-down">
                E-Commerce Product Based retail site Login/ Sign-Up | Search
                Functionality | Add-to-Cart. | Sort/ Filter the product
                information | Real-Time Information | Admin panel .
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div className="project-deployed-link" data-aos="fade-right">
                <a
                  href="https://brookstoneclone-tambeaditya101.vercel.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link" data-aos="fade-left">
                <a
                  href="https://github.com/tambeaditya101/resolute-shock-3974"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="project-card" data-aos="fade-left">
            <img src={tripAdpic} alt="" />
            <div className="layer">
              <h5 className="project-title">Let's Trip</h5>
              <p className="project-description" data-aos="fade-down">
                A website that will help anyone choose beautiful destination for
                their vacations.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS</p>
              <div className="project-deployed-link" data-aos="fade-left">
                <a
                  href="https://frabjous-khapse-789208.netlify.app/index.html"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link" data-aos="fade-left">
                <a
                  href="https://github.com/tambeaditya101/thundering-self-8895"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-aos="fade-left">
            <img src={internTheorypic} alt="" />
            <div className="layer">
              <h5 className="project-title">Intern Theory clone</h5>
              <p className="project-description" data-aos="fade-down">
                A website that helps the student to get the appropriate
                internship faster and make them job ready.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div className="project-deployed-link" data-aos="fade-left">
                <a
                  href="https://illustrious-gelato-7e4fe9.netlify.app/index.html"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link" data-aos="fade-left">
                <a
                  href="https://github.com/Sagarbisht07/nosy-coach-5858"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
