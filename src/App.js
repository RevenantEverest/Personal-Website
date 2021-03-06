import React, { Component } from 'react';

//Component Imports
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      siteLoading: true
    }
  }

  componentDidMount() {
    let logo = document.querySelector('.App-Logo');

    setTimeout(() => {
      logo.style.display = "none";
      this.setState({
        siteLoading: false
      })
    }, 5000)
  }

  renderLoading() {
    return(
      <div className="App-Loading">
        <div className="App-Logo"></div>
      </div>
    );
  }

  renderSite() {
    return(
      <div>
        <HomePage />
        <Portfolio />
        <About />
        <Contact />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
          <div className="App-contents">
            {this.state.siteLoading ? this.renderLoading() : this.renderSite()}
          </div>
      </div>
    );
  }
}

export default App;
