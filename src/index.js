import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/navbar';
import Carousel from './components/carousel';

import "./styles/main.css";

import "./scripts/hamburger";

const App = (props) => {
  return (
    <div>
      <Nav nav="test" />
      <Carousel/>
    </div>
  )
}


const root = document.getElementById('root');

ReactDOM.render(<App name="Ollie" />, root);
