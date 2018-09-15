import React, { Component } from 'react';
import './App.css';
import Launches from './components/Launches/Launches';
import Favorites from './components/Favorites/Favorites';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <h1 className="App-title">RocketLabs</h1>
        </header>
          <Launches />
          <Favorites />
      </div>
    );
  }
}

export default App;
