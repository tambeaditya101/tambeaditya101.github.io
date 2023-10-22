import React from "react";
import { useState } from "react";
import CV from "../assests/Aditya-Tambe-Resume.pdf";
import DropDown from "./dropDown";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [activeNave, setActiveNav] = useState("#");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          {" "}
          Aditya <span> Tambe </span>
        </a>
        <ul className="navlist">
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              {" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#github" onClick={() => setActiveNav("#github")}>
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              {" "}
              Contact
            </a>
          </li>
          <button id="resume-button-1">
            <a
              href={CV}
              target="_blank"
              download="Aditya-Tambe-Resume"
              id="resume-link-1"
              className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FjXJuFMy2nU-P03Wx8Ck25Ct9t4l7c3q/view?usp=share_link"
                )
              }
            >
              Resume
            </a>
          </button>
        </ul>
        <div id="menu-icon">
          <DropDown
            options={[
              // <a href="#home">Home</a>,
              // <a href="#about">About</a>,
              // <a href="#skills">Skills</a>,
              // <a href="#projects">Projects</a>,
              // <a href="#githubs">GitHub</a>,
              // <a href="#contact">Contact</a>,
              "#home",
              "#about",
              "#skills",
              "#projects",
              "#github",
              "#contact",
            ]}
            onSelect={handleOptionSelect}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
