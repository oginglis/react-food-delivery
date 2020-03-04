import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Submenu from './submenu';

export default class Navbar extends Component {
  state = {
    burgerActive: false,
    shopActive: false
  }

  handleBurgerClick = () => {
    if (this.state.burgerActive) {
      this.setState({ burgerActive: false });
    } else {
      this.setState({ burgerActive: true });
    }
    this.props.changePopoutState()
  }

  handleShopClick = () => {
    if (this.state.shopActive) {
      this.setState({ shopActive: false });
    } else {
      this.setState({ shopActive: true });
    }
  }

  render() {
    return(
      <div className="navbar">
        <div className="navbar-search">
          <div className="navbar-logo">
            <div className={this.state.burgerActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'} onClick={this.handleBurgerClick}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            <h1 className="site-title">FOOD DASH</h1>
          </div>
          <div className="navbar-searchbar">
            <input type="text" name="search" placeholder="What are you looking for?" autoComplete="off"/>
            <label htmlFor="search"><FontAwesomeIcon className="search-icon" icon={faSearch} /></label>
          </div>
          <h3 className="delivery-time sub">48 Hour Delivery</h3>
          <FontAwesomeIcon className="navbar-basket" icon={faShoppingBasket} />
        </div>
        <div className="navbar-navitems">
          <ul className="navbar-navitems-list">
            <li className='nav-list-item menu-text'>Home</li>
            <li className='nav-list-item menu-text' onClick={this.handleShopClick}>
              Shop
              <FontAwesomeIcon className="drop-down-shop" icon={faChevronDown} />
            </li>
            <li className='nav-list-item menu-text'>Samples</li>
            <li className='nav-list-item menu-text'>My Products</li>
            <li className='nav-list-item menu-text'>Helpful Hints</li>
            <li className='nav-list-item menu-text'>Contact Us</li>
            <li className='nav-list-item menu-text'>Login</li>
          </ul>
        </div>
        <div className={this.state.shopActive ? 'sub-menus' : 'sub-menus isHidden'} >
          <Submenu listItem={['All Essentials', 'Best Sellers', 'New In', 'All products']} subMenuTitle='Packaging Essentials' />
          <Submenu listItem={['Burger / Chips solutions', 'Pizza boxes', 'Hot food - board', 'Hot food - plastic', 'Soup / hot liquid containers', 'Salad / hot liquid containers']} subMenuTitle='Type' />
          <Submenu listItem={['Bowls and lids', 'Clamshells', 'Soup containers', 'Hot food boxes', 'Cutlery', 'Straws', 'Platters', 'View all']} subMenuTitle='Eco' />
          <Submenu listItem={['American / Burgers', 'Pan-Asian', 'Italian / Pasta / Pizza', 'British', 'Mexican / Tacos', 'Middle-Eastern Food', 'View all']} subMenuTitle='Cuisine' />
          <Submenu listItem={['Bags', 'Pizza Boxes', 'Greaseproof', 'Burger boxes']} subMenuTitle='Taste Branded' />
          <Submenu listItem={['All products', 'Internal Signage', 'External Signage']} subMenuTitle='Signage' />
        </div>
      </div>
    )
  }
}
