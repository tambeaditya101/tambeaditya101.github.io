import React from "react";
import { SiCanva, SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";

const Tools = () => {
  return (
    <>
      <section style={{ paddingTop: "0px" }} id="skills">
        <div className="main-text">
          <h2>
            <span>My </span>Tools
          </h2>
          <p style={{ marginTop: "10px" }}>What I am Expert In ?</p>
        </div>

        <div className="nav-link skills" id="skills-part">
          <div className="skills-card">
            <div className="skills-card-img">
              <TbBrandVscode
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              VS Code
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <SiPostman
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Postman
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <SiCanva
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Canva
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <SiNetlify
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Netlify
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img" style={{ textAlign: "center" }}>
              <RxVercelLogo
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Vercel
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <BsGit
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Git
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              <AiFillGithub
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Github
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              <FiFigma
                style={{ height: "50px", width: "50px", margin: "auto" }}
              />
            </div>
            <h3 className="skills-card-name" style={{ color: "#42b2e6" }}>
              Figma
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
