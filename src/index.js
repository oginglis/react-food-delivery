import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/navbar';
import Carousel from './components/carousel';
import Popout from './components/popout';
import Facts from './components/facts';
import SquareInfo from './components/square_info';

import "./styles/main.css";

class App extends Component {
  state = {
    popoutActive: false,
    burgerActive: false,
  }

  changePopoutState = () => {
    if (this.state.popoutActive) {
      this.setState({popoutActive: false})
      this.setState({burgerActive: false})
    } else {
      this.setState({popoutActive: true})
      this.setState({burgerActive: true})
    }
  }

  render() {
    return (
      <div>
        <Popout popoutActive={this.state.popoutActive} changePopoutState={this.changePopoutState} />
        <div className={this.state.popoutActive ? 'darkener active': 'darkener' }></div>
        <Nav burgerActive={this.state.burgerActive} changePopoutState={this.changePopoutState} />
        <Carousel />
        <Facts/>
        <div className="square-grid-container">
          <SquareInfo />
          <SquareInfo />
          <SquareInfo />
          <SquareInfo />
        </div>
      </div>
    )
  }
}



const root = document.getElementById('root');

ReactDOM.render(<App name="Ollie" />, root);
