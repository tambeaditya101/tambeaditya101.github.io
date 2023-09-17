import React, { useState } from "react";

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
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
