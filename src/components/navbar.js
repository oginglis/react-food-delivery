import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import Submenu from './submenu';

export default class Navbar extends Component {
  state = {
  }

  handleClick() {
    console.log(this)
    this.classList.toggle('is-active')
  }
  render() {
    return(
      <div className="navbar">
        <div className="navbar-search">
          <div className="navbar-logo">
            <button class="hamburger hamburger--collapse" type="button" onClick={this.handleClick}>
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <h1 className="site-title">TASTE THE FOOD</h1>
          </div>
          <div className="navbar-searchbar">
            <input type="text" name="search" placeholder="What are you looking for?" autoComplete="off"/>
            <label htmlFor="search"><FontAwesomeIcon className="search-icon" icon={faSearch} /></label>
          </div>
          <h3 className="delivery-time">48 Hour Delivery</h3>
          <FontAwesomeIcon className="navbar-basket" icon={faShoppingBasket} />
        </div>
        <div className="navbar-navitems">
          <ul className="navbar-navitems-list">
            <li className='nav-list-item'>Home</li>
            <li className='shop-list-item nav-list-item'>
              Shop
              <FontAwesomeIcon className="drop-down-shop" icon={faArrowDown} />
            </li>
            <li className='nav-list-item'>Samples</li>
            <li className='nav-list-item'>My Products</li>
            <li className='nav-list-item'>Helpful Hints</li>
            <li className='nav-list-item'>Contact Us</li>
            <li className='nav-list-item'>Login</li>
          </ul>
        </div>
        <div className="sub-menus">
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
