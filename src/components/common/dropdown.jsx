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
        <Dropdown.Item as={Link} to="/" className="dropdown-item">
          Home
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/register">
          Register
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/login">
          Login
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
