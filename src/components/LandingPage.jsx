import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Company } from '../assets/company.svg';

function LandingPage() {
  return (
    <div className="landingpage__container">
      <div className="landingpage__topcontainer">
        <div className="landingpage__title">
          <h1>
            Manage all you <span>issues</span>
          </h1>
          <div className="landingpage__subheading">
            <h1>Collaborate with Team</h1>
          </div>
          <div className="landingpage__btn">
            <Link to="/register">
              <button className="btn">Join Now</button>
            </Link>
          </div>
        </div>
        <div className="landingpage__image">
          <Company className="company" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
