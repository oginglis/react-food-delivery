import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/navbar';
import Carousel from './components/carousel';
import Popout from './components/popout';

import "./styles/main.css";

class App extends Component {
  state = {
    popoutActive: false,
  }

  changePopoutState = () => {
    if (this.state.popoutActive) {
      this.setState({popoutActive: false})
    } else {
      this.setState({popoutActive: true})
    }
  }

  render() {
    return (
      <div>
        <Popout popoutActive={this.state.popoutActive} changePopoutState={this.changePopoutState} />
        <div className={this.state.popoutActive ? 'darkener' : 'darkener active' }></div>
        <Nav changePopoutState={this.changePopoutState} />
        <Carousel />
      </div>
    )
  }
}



const root = document.getElementById('root');

ReactDOM.render(<App name="Ollie" />, root);
