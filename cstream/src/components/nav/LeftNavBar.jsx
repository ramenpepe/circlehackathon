import React, { useState } from 'react';
import './LeftNavBar.css';

const LeftNavBar = ({ handleNavItemClick, activeItem, setActiveItem }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState('');

  const toggleNavVisibility = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    handleNavItemClick(item);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem('');
  };

  return (
    <div>
      <div className={`left-nav-bar ${isNavVisible ? '' : 'hidden'}`}>
        <div class="bar"></div>
        <ul className={`nav-list ${isNavVisible ? 'visible' : 'hidden'}`}>
          <li
            className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`}
            onClick={() => handleItemClick('Projects')}
            onMouseEnter={() => handleMouseEnter('Projects')}
            onMouseLeave={handleMouseLeave}
          >
            Projects
          </li>
          <li
            className={`nav-item ${activeItem === 'Milestones' ? 'active' : ''}`}
            onClick={() => handleItemClick('Milestones')}
            onMouseEnter={() => handleMouseEnter('Milestones')}
            onMouseLeave={handleMouseLeave}
          >
            Milestones
          </li>
          <li
            className={`nav-item ${
              activeItem === 'Contract Status' ? 'active' : ''
            }`}
            onClick={() => handleItemClick('Contract Status')}
            onMouseEnter={() => handleMouseEnter('Contract Status')}
            onMouseLeave={handleMouseLeave}
          >
            Contract Status
          </li>
          <li
            className={`nav-item ${
              activeItem === 'Address Book' ? 'active' : ''
            }`}
            onClick={() => handleItemClick('Address Book')}
            onMouseEnter={() => handleMouseEnter('Address Book')}
            onMouseLeave={handleMouseLeave}
          >
            Address Book
          </li>
        </ul>
        <div className={`placeholder-text ${hoveredItem ? 'visible' : ''}`}><h2>
        {hoveredItem ? hoveredItem : ''}
        </h2></div>
      </div>
     
      <button className="toggle-button" onClick={toggleNavVisibility}>
        {isNavVisible ? '<' : '>'}
      </button>
    </div>
  );
};

export default LeftNavBar;
