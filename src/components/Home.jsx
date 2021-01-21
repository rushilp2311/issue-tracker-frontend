import React, { useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

function Home() {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div
      className={`app ${rtl ? 'rtl' : ''} ${
        toggled ? 'toggled' : ''
      } dashboard__container`}
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
