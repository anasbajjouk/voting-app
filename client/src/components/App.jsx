import React, { Component } from 'react';
import api from '../services/api';

// const App = () => {
//   return <div>Hello</div>;
// };

class App extends Component {
  componentDidMount() {
    const result = api.call('post', 'auth/login', {
      username: 'username',
      password: 'password',
    });
    console.log(result);
  }

  render() {
    return <div>Hi</div>;
  }
}

export default App;
