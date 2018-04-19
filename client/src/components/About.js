import React, { Component } from 'react';
import '../public/style/About.css';

import Particles from 'react-particles-js';

class About extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  componentDidMount() {
  }

  handleTransitionTo() {
    document.querySelector(".About-transition-to").style.width = "2000px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    setTimeout(() => {
      this.setState({
        fireRedirect: true
      })
    }, 1000)
  }

  render() {
    return(
      <div className="About">
        <Particles />
        <div className="About-contents-box">
          <h1 className="About-header">ABOUT</h1>
          <div className="About-header-underline"></div>

          <p className="About-text">I'm a New York based developer, in search of new opportunities.</p>

          <div className="About-facebook-icon"></div>
          <p className="About-facebook-link"></p>

          <div className="About-github-icon"></div>
          <p className="About-github-link"></p>

          <div className="About-linkedin-icon"></div>
          <p className="About-linkedin-link"></p>
        </div>
      </div>
    );
  }
};

export default About;
