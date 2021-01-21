import { Component } from 'react';
import { authService } from '../services';

class Logout extends Component {
  componentDidMount() {
    authService.logout();
    window.location = '/';
  }

  render() {
    return null;
  }
}

export default Logout;
