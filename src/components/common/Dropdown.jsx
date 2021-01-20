import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Arrow } from '../../assets/down-arrow.svg';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="myaccount"
      >
        <span>
          <User className="user" />
        </span>
        <h5>My account</h5>
        <span>
          <Arrow className="arrow" />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="secondary">
        <Dropdown.Item>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Register
          </Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
