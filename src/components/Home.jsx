import React from 'react';
import { ReactComponent as Company } from '../assets/company.svg';

function Home() {
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
        <button className="btn">Join Now</button>
      </div>
      <div className="home__image">
        <Company className="company" />
      </div>
    </div>
  );
}

export default Home;
