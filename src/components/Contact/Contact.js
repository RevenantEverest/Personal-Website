import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

  handleFacebook() {
    window.location = "https://www.facebook.com/RevenantEeverest/"
  }

  handleGithub() {
    window.location = "https://github.com/RevenantEverest"
  }

  handleLinkedin() {
    window.location = "https://www.linkedin.com/in/stefischer"
  }

  render() {
    return(
      <div className="Contact">
        <div className="Contact-contents-box">
          <h1 className="Contact-header">Contact</h1>
          <div className="Contact-facebook-icon" onClick={(e) => this.handleFacebook()}></div>
          <div className="Contact-github-icon" onClick={(e) => this.handleGithub()}></div>
          <div className="Contact-linkedin-icon" onClick={(e) => this.handleLinkedin()}></div>
        </div>
      </div>
    );
  }
};

export default Contact;
