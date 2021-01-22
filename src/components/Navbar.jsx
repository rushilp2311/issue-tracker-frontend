import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Chat } from '../assets/chat.svg';
import DarkMode from './common/darkmode';

function Navbar({ handleToggleSidebar }) {
  return (
    <div className="navbar">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div className="navbar__container">
        <div className="project">
          <h3>Project</h3>
        </div>
        <div className="controls">
          <Chat className="image" />
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
