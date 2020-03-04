import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/navbar';
import Carousel from './components/carousel';
import Popout from './components/popout';
import Facts from './components/facts';
import SquareInfo from './components/square_info';
import Submenus from './components/submenus';
import InfoBanner from './components/info_banner';

import "./styles/main.css";

class App extends Component {
  state = {
    popoutActive: false,
    burgerActive: false,
    shopActive: false,
    squareInfoTitle: ['All Essentials','Shop by Type', 'Shop by Cuisine', 'Signage'],
    sqaureInfoImages: ['https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80', 'https://images.unsplash.com/photo-1574641264510-d656942d6380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1665&q=80', 'https://images.unsplash.com/photo-1568327738723-947b3f0b9efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2698&q=80', 'https://images.unsplash.com/photo-1576867914540-542cb3be2ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'],
    squareInfoListItem: [['All essentials','Best sellers', 'New in','All products'],['Pizza boxes', 'Hot food - board', 'Hot food - plastic', 'Soup / hot liquid containers', 'Salad bowls and portion pots']]
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

  handleShopClick = () => {
    if (this.state.shopActive) {
      this.setState({ shopActive: false });
    } else {
      this.setState({ shopActive: true });
    }
  }


  render() {
    return (
      <div>
        <Popout popoutActive={this.state.popoutActive} changePopoutState={this.changePopoutState} />
        <div className={this.state.popoutActive ? 'darkener active': 'darkener' }></div>
        <Nav burgerActive={this.state.burgerActive} changePopoutState={this.changePopoutState} handleShopClick={this.handleShopClick} />
        <Submenus shopActive={this.state.shopActive}/>
        <Carousel />
        <Facts/>
        <div className="square-grid-container">
          <SquareInfo titleItem={this.state.squareInfoTitle[0]} listItem={this.state.squareInfoListItem[0]} image={this.state.sqaureInfoImages[0]}/>
          <SquareInfo titleItem={this.state.squareInfoTitle[1]} listItem={this.state.squareInfoListItem[1]} image={this.state.sqaureInfoImages[1]}/>
          <SquareInfo titleItem={this.state.squareInfoTitle[2]} listItem={this.state.squareInfoTitle} image={this.state.sqaureInfoImages[2]}/>
          <SquareInfo titleItem={this.state.squareInfoTitle[3]} listItem={this.state.squareInfoTitle} image={this.state.sqaureInfoImages[3]}/>
        </div>
        <InfoBanner id="test"/>
      </div>
    )
  }
}



const root = document.getElementById('root');

ReactDOM.render(<App name="Ollie" />, root);
