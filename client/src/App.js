import React, { Component } from 'react';

//Component Imports
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-contents">
            <HomePage />
            <Portfolio />
            <About />
          </div>
      </div>
    );
  }
}

export default App;
