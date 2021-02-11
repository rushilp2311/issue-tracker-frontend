/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

import { ReactComponent as LaptopSVG } from '../assets/laptop.svg';
import { ReactComponent as RocketSVG } from '../assets/rocket.svg';
import { ReactComponent as DashboardSVG } from '../assets/dashboard-interface.svg';
import { ReactComponent as UsersSVG } from '../assets/users.svg';
import { ReactComponent as SprintSVG } from '../assets/sprint.svg';
import { authService } from '../services';

function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
  const [activeItem, setActiveItem] = useState(
    () => localStorage.getItem('currentPage') || 'dashboard'
  );

  useEffect(() => {
    console.log(activeItem);
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
        {/* Add Project Details */}

        <ul className="list">
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

          {user.is_admin ? (
            <Link to="/members">
              <li
                className="list__item"
                id="members"
                onClick={() => handleClick('members')}
              >
                <p>
                  <span>
                    <UsersSVG className="image" />
                  </span>
                  Members
                </p>
              </li>
            </Link>
          ) : null}
          {!user.is_admin ? (
            <Link to="/sprint">
              <li
                className="list__item"
                id="sprint"
                onClick={() => handleClick('sprint')}
              >
                <p>
                  <span>
                    <SprintSVG className="image" />
                  </span>
                  Sprint
                </p>
              </li>
            </Link>
          ) : null}
        </ul>
      </SidebarContent>
    </ProSidebar>
  );
}

export default Sidebar;
