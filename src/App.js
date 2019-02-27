import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Versions from './components/versions';

class App extends Component {
  render() {
    return (
      <div className="App">

       <Versions/>

      </div>
    );
  }
}

export default App;


