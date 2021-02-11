import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ReactComponent as Bell } from '../assets/bell.svg';
import { ReactComponent as Logout } from '../assets/logout.svg';
import { ReactComponent as Help } from '../assets/help.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Account } from '../assets/account.svg';
import { ReactComponent as Settings } from '../assets/settings.svg';
import { ReactComponent as Arrow } from '../assets/down-arrow.svg';
import { authService } from '../services';
import DarkMode from './common/darkmode';
import Profile from '../assets/profile.jpeg';

function Navbar({ handleToggleSidebar }) {
  const user = authService.getCurrentUser();
  const [showMenu, setShowMenu] = useState('none');
  const handleClick = () => {
    if (showMenu === 'none') {
      setShowMenu('inline');
    } else {
      setShowMenu('none');
    }
  };
  return (
    <div className="navbar">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div className="navbar__container">
        <div className="controls">
          <span>
            <Search className="image" />
          </span>
          <span>
            <Bell className="image" />
          </span>
          <DarkMode />
          <div className="account" onClick={handleClick}>
            <img src={Profile} alt="profile" className="profile" />
            {user.name}
            <Arrow
              className="image"
              style={{ height: '10px', width: '10px', marginLeft: '5px' }}
            />
          </div>
          <div className="account__menu" style={{ display: `${showMenu}` }}>
            <h5 className="menu__item">
              <Account className="image" />
              Profile
            </h5>
            <h5 className="menu__item">
              <Settings className="image" />
              Settings
            </h5>
            <h5 className="menu__item">
              <Help className="image" />
              Help
            </h5>

            <div className="settings">
              <Link to="/logout">
                <Logout className="image" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
