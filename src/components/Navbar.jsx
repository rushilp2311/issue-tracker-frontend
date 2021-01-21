import React from 'react';
import { FaBars } from 'react-icons/fa';
import DarkMode from './common/darkmode';

function Navbar({ handleToggleSidebar }) {
  return (
    <div className="navbar__container">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div className="project">
        <h3>Project</h3>
      </div>
      <div className="search">
        <h3>Search</h3>
      </div>
      <DarkMode />
    </div>
  );
}

export default Navbar;
