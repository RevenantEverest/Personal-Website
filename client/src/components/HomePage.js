import React, { Component } from 'react';
import '../public/style/HomePage.css';

import { Redirect } from 'react-router-dom';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  handleTransition() {
    document.querySelector(".HomePage-transition").style.height = "2000px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    setTimeout(() => {
      this.setState({
        fireRedirect: true
      })
    }, 1000)
  }

  render() {
    return(
      <div className="HomePage">

        <div className="HomePage-transition">
        </div>

          <div className="HomePage-box1">
            <div className="HomePage-box1-vignette">
              <h1 className="HomePage-Name-one">Stefan</h1>
              <h1 className="HomePage-Name-two">Fischer</h1>
              <div className="HomePage-rectangle"></div>
              <h2 className="HomePage-Skills">Graphic Designer</h2>
              <h2 className="HomePage-Skills">Web Developer</h2>
              <h2 className="HomePage-Skills">Visual Effects Artist</h2>
              <p className="HomePage-Arrow" onClick={(e) => this.handleTransition()}>&darr;</p>
            </div>
          </div>

          {this.state.fireRedirect ? <Redirect to="/About" /> : ''}
      </div>
    );
  }
};

export default HomePage;
