import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeSVG } from '../assets/home.svg';

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__heading">
        <h3>Company</h3>
      </div>
      <div className="team">
        <h5>You are the admin</h5>

        <ul className="list">
          <li className="list__item">
            <span>
              <HomeSVG throwIfNamespace={false} className="image" />
            </span>
            Home
          </li>
        </ul>
      </div>
      <div className="profile">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
