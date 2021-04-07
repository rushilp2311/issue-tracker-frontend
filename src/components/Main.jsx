import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues } from '../app/issuesSlice';
import { issueService } from '../services';
import Issues from './Issues';
import Navbar from './Navbar';
import Members from './Members';
import Projects from './Projects';
import Search from './Search';
import ProjectDetail from './ProjectDetail';

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
        </Switch>
      </>
    </div>
  );
}
export default Main;
