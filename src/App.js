import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssignedProject, fetchMembers } from './app/memberSlice';
import { fetchProjects } from './app/projectSlice';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import { authService } from './services';

function App() {
  const dispatch = useDispatch();
  const memberStatus = useSelector((state) => state.members.status);
  const projectStatus = useSelector((state) => state.projects.status);
  const [currentUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    document.title = 'Issue Tracker';
    if (memberStatus === 'idle') {
      dispatch(fetchMembers());
    }
    if (projectStatus === 'idle') {
      dispatch(fetchProjects());
    }
    dispatch(fetchAssignedProject());
  }, [dispatch, memberStatus, projectStatus]);
  return (
    <div className="App">
      <Header />
      {currentUser && <Home />}
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        {/* <Route path="/profile" component={Profile} />
          <Route path="/bugdetails" component={BugDetails} />
          <Route path="/teamdetails" component={TeamDetails} /> */}
        {!currentUser && <Route exact path="/" component={LandingPage} />}
        {/* <Route path="" component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
