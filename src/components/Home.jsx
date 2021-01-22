import React, { useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

function Home() {
  const [rtl] = useState(false);
  const [collapsed] = useState(false);
  const [image] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

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
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}
export default Home;
