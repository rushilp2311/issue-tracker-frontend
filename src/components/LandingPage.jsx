import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Company } from '../assets/company.svg';

function LandingPage() {
  return (
    <div className="home__container">
      <div className="home__heading">
        <h1>
          Manage all you <span>issues</span>
        </h1>
      </div>
      <div className="home__subheading">
        <h1>Collaborate with your Team</h1>
      </div>
      <div className="home__btn">
        <Link to="/register">
          <button className="btn">Join Now</button>
        </Link>
      </div>
      <div className="home__image">
        <Company className="company" />
      </div>
    </div>
  );
}

export default LandingPage;
