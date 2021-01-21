import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div className="dashboard__container">
      <Sidebar />
      <Main />
    </div>
  );
}
export default Home;
