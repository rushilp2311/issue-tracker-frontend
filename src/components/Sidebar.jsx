import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  MenuItem,
  SubMenu,
  Menu,
} from 'react-pro-sidebar';
import { ReactComponent as HomeSVG } from '../assets/home.svg';

function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
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

      <SidebarContent className="team">
        <h5>You are the admin</h5>
        <Menu className="list">
          <MenuItem className="list__item">Hello</MenuItem>
          <MenuItem className="list__item">Issues</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div className="profile">
          <Link to="/logout">Logout</Link>
        </div>
      </SidebarFooter>
    </ProSidebar>
    // <div className="sidebar__container">
    //   <div className="sidebar__heading">
    //     <h3>Company</h3>
    //   </div>
    //   <div className="team">
    //     <h5>You are the admin</h5>

    //     <ul className="list">
    //       <li className="list__item">
    //         <span>
    //           <HomeSVG throwIfNamespace={false} className="image" />
    //         </span>
    //         Home
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="profile">
    //     <Link to="/logout">Logout</Link>
    //   </div>
    // </div>
  );
}

export default Sidebar;
