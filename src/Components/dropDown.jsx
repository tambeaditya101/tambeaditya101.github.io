import React, { useState } from 'react';
import CV from '../assests/Aditya_Tambe_Resume.pdf';

function DropDown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('MENU');

  const handleOptionClick = (option) => {
    setSelectedOption(option.toUpperCase().slice(1));
    setIsOpen(false);
    onSelect(option.toUpperCase().slice(1));
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </div>
      {isOpen && (
        <div className='dropdown-menu'>
          <ul>
            {options.map((option) => (
              <li>
                {' '}
                <a href={option}>
                  <div
                    key={option}
                    className='dropdown-item'
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.toUpperCase().slice(1)}
                  </div>
                </a>
              </li>
            ))}{' '}
            <a
              href={CV}
              target='_blank'
              download='Aditya_Tambe_Resume'
              // id="resume-link-1"
              // className="nav-link resume"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1tcwo9PNd_T_8rZb-xflcmSSVGDvSANhR/view?usp=drive_link'
                )
              }
            >
              <li className='dropdown-item'>RESUME</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
