import React, { Component } from 'react';

//Imported Components
import HomePage from './components/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
