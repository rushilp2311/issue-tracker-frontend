import React, { useState, useEffect, Suspense } from 'react';

const Sidebar = React.lazy(() => import('./Sidebar'));
const Main = React.lazy(() => import('./Main'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar
          image={image}
          collapsed={collapsed}
          rtl={rtl}
          toggled={toggled}
          handleCollapsedSidebar={handleCollapsedSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Main />
      </Suspense>
    </div>
  );
}
export default Home;
