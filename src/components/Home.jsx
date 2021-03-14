import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

function Home() {
  const [rtl] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [image] = useState(true);
  const [toggled, setToggled] = useState(true);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const handleCollapsedSidebar = (value) => {
    setCollapsed(value);
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('currentPage');
    };
  }, []);

  return (
    <div
      className={`app ${rtl ? 'rtl' : ''} ${
        toggled ? 'toggled' : ''
      } home__container`}
    >
      <Sidebar
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleCollapsedSidebar={handleCollapsedSidebar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main />
    </div>
  );
}
export default Home;
