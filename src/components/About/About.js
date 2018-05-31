import React, { Component } from 'react';
import './About.css';

class About extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
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

  handleTransitionFrom() {
    let portfolio = document.querySelector('.Portfolio');
    portfolio.style.height = "100vh";
  }

  handleTransitionContact() {
    let main = document.querySelector('.About');
    main.style.height = "0vh";
  }

  render() {
    return(
      <div className="About">
        <div className="About-contents-box">
          <h1 className="About-Portfolio" onClick={(e) => this.handleTransitionFrom()}>PORTFOLIO</h1>
          <h1 className="About-Contact" onClick={(e) => this.handleTransitionContact()}>CONTACT</h1>
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
