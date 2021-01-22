import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  MenuItem,
  Menu,
} from 'react-pro-sidebar';

import { ReactComponent as HomeSVG } from '../assets/home.svg';
import { ReactComponent as LaptopSVG } from '../assets/laptop.svg';
import { ReactComponent as RocketSVG } from '../assets/rocket.svg';
import { ReactComponent as DashboardSVG } from '../assets/dashboard-interface.svg';
import { ReactComponent as UserSVG } from '../assets/user.svg';
import { authService } from '../services';

function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
  const [activeItem, setActiveItem] = useState(
    +localStorage.getItem('currentPage')
  );
  useEffect(() => {
    document.getElementById(1).classList.remove('active');
    document.getElementById(activeItem).classList.add('active');
  }, []);
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

        <Menu className="list">
          <MenuItem
            className="list__item active"
            onClick={() => handleClick(1)}
            id={1}
          >
            <p>
              <span>
                <HomeSVG className="image" />
              </span>
              <Link to="/">Home</Link>
            </p>
          </MenuItem>
          {user.is_admin ? (
            <MenuItem
              className="list__item"
              onClick={() => handleClick(2)}
              id={2}
            >
              <p>
                <span>
                  <RocketSVG className="image" />
                </span>
                <Link to="/projects">Projects</Link>
              </p>
            </MenuItem>
          ) : (
            <MenuItem
              className="list__item"
              onClick={() => handleClick(2)}
              id={2}
            >
              <p>
                <span>
                  <LaptopSVG className="image" />
                </span>
                <Link to="/issues">Issues</Link>
              </p>
            </MenuItem>
          )}
          <MenuItem
            className="list__item"
            onClick={() => handleClick(3)}
            id={3}
          >
            <p>
              <span>
                <DashboardSVG className="image" />
              </span>
              <Link to="/dashboard">Dashboard</Link>
            </p>
          </MenuItem>
          {user.is_admin ? (
            <MenuItem
              className="list__item"
              onClick={() => handleClick(4)}
              id={4}
            >
              <p>
                <span>
                  <UserSVG className="image" />
                </span>
                <Link to="/members">Members</Link>
              </p>
            </MenuItem>
          ) : null}
        </Menu>
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
