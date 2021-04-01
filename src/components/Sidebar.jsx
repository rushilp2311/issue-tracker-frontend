/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
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
  const assignedProject = useSelector((state) => state.members.assignedProject);

  useEffect(() => {}, [toggled, collapsed]);

  const user = authService.getCurrentUser();
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

        {!collapsed && (
          <div className="project__details">
            {assignedProject ? (
              <>
                <p className="project_id">
                  Project Id: <span>{assignedProject.project_id}</span>
                </p>
                <p className="project__name">
                  Project Name: <span>{assignedProject.project_name}</span>
                </p>
              </>
            ) : (
              <p>Not assigned to a Project</p>
            )}
          </div>
        )}

        <ul className="list">
          <li className="list__item" id="dashboard">
            <Link to="/dashboard">
              <p>
                <span>
                  <FiLayout className="image" />
                </span>
                {!collapsed && `Dashboard`}
              </p>
            </Link>
          </li>
          {user.is_admin ? (
            <li className="list__item" id="projects">
              <Link to="/projects">
                <p>
                  <span>
                    <FiTrello className="image" />
                  </span>
                  {!collapsed && `Projects`}
                </p>
              </Link>
            </li>
          ) : (
            <li className="list__item" id="issues">
              <Link to="/issues">
                <p>
                  <span>
                    <RiBugLine className="image" />
                  </span>
                  {!collapsed && `Issues`}
                </p>
              </Link>
            </li>
          )}

          {user.is_admin ? (
            <li className="list__item" id="members">
              <Link to="/members">
                <p>
                  <span>
                    <FiUsers className="image" />
                  </span>
                  {!collapsed && `Members`}
                </p>
              </Link>
            </li>
          ) : null}

          <li className="list__item" id="sprint">
            <Link to="/sprint">
              <p>
                <span>
                  <FiBook className="image" />
                </span>
                {!collapsed && `Sprint`}
              </p>
            </Link>
          </li>
        </ul>
      </SidebarContent>
    </ProSidebar>
  );
}

export default Sidebar;
