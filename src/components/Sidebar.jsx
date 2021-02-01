/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { ReactComponent as HomeSVG } from '../assets/home.svg';
import { ReactComponent as LaptopSVG } from '../assets/laptop.svg';
import { ReactComponent as RocketSVG } from '../assets/rocket.svg';
import { ReactComponent as DashboardSVG } from '../assets/dashboard-interface.svg';
import { ReactComponent as UserSVG } from '../assets/user.svg';
import { authService } from '../services';

function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
  const [activeItem, setActiveItem] = useState(
    () => localStorage.getItem('currentPage') || 'home'
  );

  useEffect(() => {
    document.getElementById(activeItem).classList.add('active');
  }, [activeItem]);

  const user = authService.getCurrentUser();

  const handleClick = (item) => {
    document.getElementById(activeItem).classList.remove('active');
    document.getElementById(item).classList.add('active');
    localStorage.setItem('currentPage', item);
    setActiveItem(item);
  };

  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      className="sidebar__container"
    >
      <SidebarHeader>
        <div className="sidebar__heading">
          <h3>Company</h3>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <h5 className="team">You are the admin</h5>

        <ul className="list">
          <Link to="/">
            <li
              className="list__item "
              id="home"
              onClick={() => handleClick('home')}
            >
              <p>
                <span>
                  <HomeSVG className="image" />
                </span>
                Home
              </p>
            </li>
          </Link>
          {user.is_admin ? (
            <Link to="/projects">
              <li
                className="list__item"
                id="projects"
                onClick={() => handleClick('projects')}
              >
                <p>
                  <span>
                    <RocketSVG className="image" />
                  </span>
                  Projects
                </p>
              </li>
            </Link>
          ) : (
            <Link to="/issues">
              <li
                className="list__item"
                id="issues"
                onClick={() => handleClick('issues')}
              >
                <p>
                  <span>
                    <LaptopSVG className="image" />
                  </span>
                  Issues
                </p>
              </li>
            </Link>
          )}
          <Link to="/dashboard">
            <li
              className="list__item"
              id="dashboard"
              onClick={() => handleClick('dashboard')}
            >
              <p>
                <span>
                  <DashboardSVG className="image" />
                </span>
                Dashboard
              </p>
            </li>
          </Link>
          <Link to="/members">
            <li
              className="list__item"
              id="members"
              onClick={() => handleClick('members')}
            >
              <p>
                <span>
                  <UserSVG className="image" />
                </span>
                Members
              </p>
            </li>
          </Link>
        </ul>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div className="settings">
          <Link to="/logout">Logout</Link>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidebar;
