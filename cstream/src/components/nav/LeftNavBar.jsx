import React, { useState } from 'react';
import './LeftNavBar.css';

const LeftNavBar = ({ handleNavItemClick , activeItem , setActiveItem }) => {
  
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    //setActiveItem(item);
    handleNavItemClick(item);
  };

  return (
    <div>
      <div className={`left-nav-bar ${isNavVisible ? '' : 'hidden'}`}>
        <ul className={`nav-list ${isNavVisible ? 'visible' : 'hidden'}`}>
          <li
            className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`}
            onClick={() => handleItemClick('Projects')}
          >
            Projects
          </li>
          <li
            className={`nav-item ${activeItem === 'Milestones' ? 'active' : ''}`}
            onClick={() => handleItemClick('Milestones')}
          >
            Milestones
          </li>
          <li
            className={`nav-item ${activeItem === 'Contract Status' ? 'active' : ''}`}
            onClick={() => handleItemClick('Contract Status')}
          >
            Contract Status
          </li>
          <li
            className={`nav-item ${activeItem === 'Address Book' ? 'active' : ''}`}
            onClick={() => handleItemClick('Address Book')}
          >
            Address Book
          </li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleNavVisibility}>
        {isNavVisible ? '<' : '>'}
      </button>
    </div>
  );
};

export default LeftNavBar;
