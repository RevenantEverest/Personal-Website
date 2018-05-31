import React, { Component } from 'react';
import './HomePage.css';

//Media Queries
import './HomePage(MobileL).css';
import './HomePage(MobileM).css';
import './HomePage(MobileS).css';

import disableScroll from 'disable-scroll';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false,

      HomePageContents: 'HomePage-box1-contents'
    }
  }

  componentDidMount() {
    disableScroll.off();
  }

  handleTransition() {
    let main = document.querySelector('.HomePage-box1');
    setTimeout(() => {
      main.style.height = "0vh";
    }, 1000)
  }

  render() {
    return(
      <div className="HomePage">

        <div className="HomePage-transition">
        </div>

          <div className="HomePage-box1">
            <div className="HomePage-box1-vignette">
              <div className="HomePage-box1-contents">
                <h1 className="HomePage-Name-one">Stefan</h1>
                <h1 className="HomePage-Name-two">Fischer</h1>
                <div className="HomePage-rectangle"></div>
                <h2 className="HomePage-Skills-GraphicDesigner">Graphic Designer</h2>
                <h2 className="HomePage-Skills-WebDeveloper">Web Developer</h2>
                <h2 className="HomePage-Skills-VFX">Visual Effects Artist</h2>
                <p className="HomePage-Arrow" onClick={(e) => this.handleTransition()}>&darr;</p>
              </div>
            </div>
          </div>

      </div>
    );
  }
};

export default HomePage;
