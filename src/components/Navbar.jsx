import React from 'react';
import DarkMode from './common/darkmode';

function Navbar() {
  return (
    <div className="navbar__container">
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
