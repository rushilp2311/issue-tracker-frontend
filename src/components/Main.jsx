import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Issues from './Issues';
import Navbar from './Navbar';
import Members from './Members';
import Projects from './Projects';

function Main({ handleToggleSidebar }) {
  return (
    <div className="main__container" style={{ width: '100%' }}>
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      <div>
        <Switch>
          <Route path="/issues" component={Issues} />
          <Route path="/projects" component={Projects} />
          <Route path="/members" component={Members} />
        </Switch>
      </div>
    </div>
  );
}
export default Main;
