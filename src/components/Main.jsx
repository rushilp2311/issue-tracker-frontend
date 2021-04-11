import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Issues from './Issues';
import Navbar from './Navbar';
import Members from './Members';
import Projects from './Projects';
import Search from './Search';
import ProjectDetail from './ProjectDetail';
import IssueDetails from './IssueDetails';

function Main() {
  return (
    <div className="main__container" style={{ width: '100%' }}>
      <Navbar />
      <>
        <Switch>
          <Route path="/issues" component={Issues} />
          <Route path="/projects" component={Projects} />
          <Route path="/members" component={Members} />
          <Route path="/profile" component={Members} />
          <Route path="/search" component={Search} />
          <Route path="/projectdetails" component={ProjectDetail} />
          <Route path="/issuedetails" component={IssueDetails} />
        </Switch>
      </>
    </div>
  );
}
export default Main;
