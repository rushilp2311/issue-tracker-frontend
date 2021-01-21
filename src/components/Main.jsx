import React from 'react';

import Navbar from './Navbar';

function Main({ handleToggleSidebar }) {
  return (
    <div className="main__container">
      <Navbar handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}
export default Main;
