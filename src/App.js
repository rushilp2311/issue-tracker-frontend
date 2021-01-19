import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  useEffect(() => {
    document.title = 'Issue Tracker';
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/signup" component={SignUp} /> */}
        {/* <Route path="/signin" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/bugdetails" component={BugDetails} />
          <Route path="/teamdetails" component={TeamDetails} /> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Dashboard} /> */}

        {/* <Route path="" component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
