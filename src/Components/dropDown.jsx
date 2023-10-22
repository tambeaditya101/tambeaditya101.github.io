import React, { useState } from "react";
import CV from "../assests/Aditya-Tambe-Resume.pdf";

function DropDown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("MENU");

  const handleOptionClick = (option) => {
    setSelectedOption(option.toUpperCase().slice(1));
    setIsOpen(false);
    onSelect(option.toUpperCase().slice(1));
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {options.map((option) => (
              <li>
                {" "}
                <a href={option}>
                  <div
                    key={option}
                    className="dropdown-item"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.toUpperCase().slice(1)}
                  </div>
                </a>
              </li>
            ))}{" "}
            <a
              href={CV}
              target="_blank"
              download="Aditya-Tambe-Resume"
              // id="resume-link-1"
              // className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FjXJuFMy2nU-P03Wx8Ck25Ct9t4l7c3q/view?usp=share_link"
                )
              }
            >
              <li className="dropdown-item">RESUME</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
