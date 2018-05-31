import React, { Component } from 'react';
import './Portfolio.css';

import Particles from 'react-particles-js';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      portfolioBoxOneStates: [
        'Portfolio-circle-one-inner-one',
        'Portfolio-circle-one-inner-two',
        'Portfolio-circle-one-inner-three',
        'Portfolio-circle-one-inner-four',
        'Portfolio-circle-one-inner-five',
        'Portfolio-circle-one-inner-six',
        'Portfolio-circle-one-inner-seven',
        'Portfolio-circle-one-inner-eight'
      ],

      portfolioBoxTwoStates: [
        'Portfolio-circle-two-inner-one',
        'Portfolio-circle-two-inner-two',
        'Portfolio-circle-two-inner-three',
        'Portfolio-circle-two-inner-four',
        'Portfolio-circle-two-inner-five',
        'Portfolio-circle-two-inner-six',
        'Portfolio-circle-two-inner-seven',
        'Portfolio-circle-two-inner-eight',
        'Portfolio-circle-two-inner-nine'
      ],

      portfolioBoxThreeStates: [

      ],

      apiDataRecieved: false,
      currentBoxOneState: 1,
      currentBoxTwoState: 1,

      portfolioBoxOne: null,
      portfolioBoxTwo: null
    }
  }
  componentDidMount() {
    this.setState({
      portfolioBoxOne: this.state.portfolioBoxOneStates[0],
      portfolioBoxTwo: this.state.portfolioBoxTwoStates[0],
      apiDataRecieved: true
    })
  }

  handleLeftClick() {
    let box = document.querySelector('.Portfolio-circle-one');
    let box2 = document.querySelector('.Portfolio-circle-two');

    box.style.left = "120%"
    box2.style.left = "25%";
  }

  handleRightClick() {
    let box = document.querySelector('.Portfolio-circle-one');
    let box2 = document.querySelector('.Portfolio-circle-two');

    box2.style.left = "-80%";
    box.style.left = "25%";
  }

  handleAboutTransition() {
    let main = document.querySelector('.Portfolio');

    main.style.height = "0vh";
  }

  handleContactTransition() {
    let about = document.querySelector('.About');
    let portfolio = document.querySelector('.Portfolio');

    about.style.display = "none";
    portfolio.style.height = "0vh";
  }

  handleSilethaRedirect() {
    window.location = "https://github.com/RevenantEverest/Siletha-2D"
  }

  handleCryptonRedirect() {
    window.location = "https://github.com/RevenantEverest/Crypton"
  }

  handlePortfolioOne() {
    if(this.state.currentBoxOneState === 7) {
      this.setState({
        currentBoxOneState: 1
      }, () => {
        this.componentDidMount();
      })
    }else {
      this.setState({
        portfolioBoxOne: this.state.portfolioBoxOneStates[this.state.currentBoxOneState++]
      })
    }
  }

  handlePortfolioTwo() {
    if(this.state.currentBoxTwoState === 9) {
      this.setState({
        currentBoxTwoState: 1
      }, () => {
        this.componentDidMount();
      })
    }else {
      this.setState({
        portfolioBoxTwo: this.state.portfolioBoxTwoStates[this.state.currentBoxTwoState++]
      })
    }
  }

  renderPortfolio() {
    return(
      <div className="Portfolio-container">

        <p className="Portfolio-move-right" onClick={(e) => this.handleRightClick()}>&rarr;</p>

        <div className="Portfolio-contents">

          <div className="Portfolio-circle-one">
            <h1 className="Portfolio-circle-one-header"  onClick={(e) => this.handleSilethaRedirect()}>Siletha</h1>
            <p className="Portfolio-circle-one-description">A browser RPG made in React.js and Express.js</p>
            <div className={`${this.state.portfolioBoxOne}`} onClick={(e) => this.handlePortfolioOne()}>
            </div>
          </div>

          <div className="Portfolio-circle-two">
            <h1 className="Portfolio-circle-two-header" onClick={(e) => this.handleCryptonRedirect()}>Crypton</h1>
            <p className="Portfolio-circle-two-description">An attempt at a crypto-currency in Golang</p>
            <div className={`${this.state.portfolioBoxTwo}`} onClick={(e) => this.handlePortfolioTwo()}>
            </div>
          </div>
        </div>

        <p className="Portfolio-move-left" onClick={(e) => this.handleLeftClick()}>&larr;</p>
        <h1 className="Portfolio-about" onClick={(e) => this.handleAboutTransition()}>ABOUT</h1>
        <h1 className="Portfolio-contact" onClick={(e) => this.handleContactTransition()}>CONTACT</h1>
      </div>
    );
  }

  render() {
    return(
      <div className="Portfolio">
        <Particles />
        {this.state.apiDataRecieved ? this.renderPortfolio() : ''}
      </div>
    );
  }
};

export default Portfolio;
