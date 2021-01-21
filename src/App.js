import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import { authService } from './services';

function App() {
  const [currentUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    document.title = 'Issue Tracker';
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        {/* <Route path="/profile" component={Profile} />
          <Route path="/bugdetails" component={BugDetails} />
          <Route path="/teamdetails" component={TeamDetails} /> */}
        {!currentUser && <Route exact path="/" component={LandingPage} />}
        {currentUser && <Route exact path="/" component={Home} />}
        {/* <Route path="" component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
