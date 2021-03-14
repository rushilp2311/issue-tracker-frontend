/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiBell,
  FiSearch,
  FiLogOut,
  FiChevronDown,
  FiSettings,
  FiUser,
  FiHelpCircle,
} from 'react-icons/fi';

import { authService } from '../services';
import DarkMode from './common/darkmode';
import Profile from '../assets/profile.jpeg';

function Navbar() {
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
      <div className="navbar__container">
        <div className="controls">
          <span>
            <Link to="/search">
              <FiSearch className="image" />
            </Link>
          </span>
          <span>
            <FiBell className="image" />
          </span>
          <DarkMode />
          <div className="account" onClick={handleClick}>
            <img
              src={Profile}
              alt="profile"
              className="profile"
              height="30px"
              width="30px"
            />
            {user.name}
            <FiChevronDown className="image" />
          </div>
          <div className="account__menu" style={{ display: `${showMenu}` }}>
            <h5 className="menu__item" onClick={handleClick}>
              <FiUser className="image" />
              Profile
            </h5>
            <h5 className="menu__item" onClick={handleClick}>
              <FiSettings className="image" style={{ marginRight: '13px' }} />{' '}
              Settings
            </h5>
            <h5 className="menu__item" onClick={handleClick}>
              <FiHelpCircle className="image" />
              Help
            </h5>

            <div className="settings">
              <Link to="/logout">
                <h5>
                  <FiLogOut className="image" />
                  Logout
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
