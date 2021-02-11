import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Bell } from '../assets/bell.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { authService } from '../services';
import DarkMode from './common/darkmode';
import Profile from '../assets/profile.jpeg';

function Navbar({ handleToggleSidebar }) {
  const user = authService.getCurrentUser();
  return (
    <div className="navbar">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div className="navbar__container">
        <div className="project">{!user.is_admin && <h3>Project</h3>}</div>
        <div className="controls">
          <Search className="image" />
          <Bell className="image" />
          <DarkMode />
          <div className="account">
            <img src={Profile} alt="profile" className="profile" />
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
