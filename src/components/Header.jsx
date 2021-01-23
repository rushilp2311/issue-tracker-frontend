import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../services';
import DropDown from './common/dropdown';
import DarkMode from './common/darkmode';

function Header() {
  const user = authService.getCurrentUser();

  return (
    <>
      {!user ? (
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
            <DarkMode />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
