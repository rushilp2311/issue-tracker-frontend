/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {
  FiUsers,
  FiLayout,
  FiTrello,
  FiBook,
  FiChevronsRight,
  FiChevronsLeft,
} from 'react-icons/fi';
import { RiBugLine } from 'react-icons/ri';

import { authService } from '../services';

function Sidebar({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedSidebar,
}) {
  const [activeItem, setActiveItem] = useState(
    () => localStorage.getItem('currentPage') || 'dashboard'
  );

  useEffect(() => {
    console.log(activeItem);
    document.getElementById(activeItem).classList.add('active');
    return () => {
      localStorage.removeItem('current');
    };
  }, [activeItem]);

  useEffect(() => {
    console.log(toggled);
  }, [toggled, collapsed]);

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
      onToggle={handleToggleSidebar}
      className="sidebar__container"
    >
      <SidebarHeader>
        <div className="sidebar__heading">
          {!collapsed && <h3>Company</h3>}
          <span
            onClick={() => {
              handleCollapsedSidebar(!collapsed);
              handleToggleSidebar(!toggled);
            }}
          >
            {collapsed ? (
              <FiChevronsRight className="image" />
            ) : (
              <FiChevronsLeft className="image" />
            )}
          </span>
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
                    <FiTrello className="image" />
                  </span>
                  {!collapsed && `Projects`}
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
                    <RiBugLine className="image" />
                  </span>
                  {!collapsed && `Issues`}
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
                  <FiLayout className="image" />
                </span>
                {!collapsed && `Dashboard`}
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
                    <FiUsers className="image" />
                  </span>
                  {!collapsed && `Members`}
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
                    <FiBook className="image" />
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
