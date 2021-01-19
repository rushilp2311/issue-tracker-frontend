/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Arrow } from '../assets/down-arrow.svg';

function Header() {
  const [mode, setMode] = useState(localStorage.getItem('dark') === 'true');

  useEffect(() => {
    mode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    localStorage.setItem('dark', mode);
  }, [mode]);

  const onClickHandler = () => {
    setMode(() => !mode);
  };
  return (
    <div className="header__container">
      <div className="header__left">
        <h3>Issues</h3>
      </div>
      <div className="header__right">
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="myaccount"
          >
            <h5>
              <span>
                <User className="user" />
              </span>
              My account
              <span>
                <Arrow className="arrow" />
              </span>
            </h5>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="secondary">
            <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div
          className="toggle"
          onClick={onClickHandler}
          style={{ background: mode ? 'white' : 'black' }}
        >
          <span>{mode ? '🌞' : '🌙'}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
