import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Launches from './components/Launches/Launches';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Launches />
      </div>
    );
  }
}

export default App;
