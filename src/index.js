import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/navbar';
import Carousel from './components/carousel';
import Popout from './components/popout';
import Facts from './components/facts';
import SquareInfo from './components/square_info';
import Submenus from './components/submenus';
import InfoBanner from './components/info_banner';
import FactBanner from './components/fact_banner';
import SearchBanner from './components/search_banner';

import "./styles/main.css";

class App extends Component {
  state = {
    popoutActive: false,
    burgerActive: false,
    shopActive: false,
    squareInfoTitle: ['All Essentials','Shop by Type', 'Shop by Cuisine', 'Signage'],
    sqaureInfoImages: ['https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80', 'https://images.unsplash.com/photo-1583359290631-79950e6f0837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80', 'https://images.unsplash.com/photo-1568327738723-947b3f0b9efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2698&q=80', 'https://images.unsplash.com/photo-1583228888368-d9cc94613a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'],
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
        <InfoBanner bannerButton="ORDER HERE" bannerTitle="test us out with free samples" bgImage="https://images.unsplash.com/photo-1583369105080-4337ce9e917d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
        <FactBanner factTitle="free next day delivery availble" factBody="test"/>
        <div className="info-banner-grid-one">
          <InfoBanner extraText="Why not try our packagin 101? It could be what you're looking for." bannerButton="MORE INFO" bannerTitle="expert recommendations" bgImage="https://images.unsplash.com/photo-1583354608715-177553a4035e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"/>
          <InfoBanner extraText="Any questions you have about our service, we'll do our best to answer." bannerButton="MORE INFO" bannerTitle="frequently asked questions" bgImage="https://images.unsplash.com/photo-1583354838252-2ed5c78ba103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>
        </div>
        <div className="info-banner-grid-two">
          <InfoBanner extraText="We want you to have the best packaging for your needs – that's why we test for heat retention, toughness and stability."  bannerTitle="quality assured packaging" bgImage="https://images.unsplash.com/photo-1519393890420-f28727375fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
          <InfoBanner extraText="Any questions you have about our service, we'll do our best to answer."  bannerTitle="best prices, guaranteed" bgImage="https://images.unsplash.com/photo-1487266659293-c4762f375955?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
          <InfoBanner extraText="Any questions you have about our service, we'll do our best to answer."  bannerTitle="hassle-free, stress-free" bgImage="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"/>
        </div>
        <SearchBanner bgImage="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" />
      </div>
    )
  }
}



const root = document.getElementById('root');

ReactDOM.render(<App name="Ollie" />, root);
