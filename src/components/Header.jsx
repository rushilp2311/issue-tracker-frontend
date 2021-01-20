/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './common/Dropdown';

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
        <Link
          to="/"
          style={{ color: 'var(--text-color)', textDecoration: 'none' }}
        >
          <h3>Issues</h3>
        </Link>
      </div>
      <div className="header__right">
        <DropDown />
        <div
          className="toggle"
          onClick={onClickHandler}
          // style={{ background: mode ? 'white' : 'black' }}
        >
          <span>{mode ? '🌞' : '🌙'}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
