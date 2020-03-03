import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import Submenu from './submenu';

export default class Navbar extends Component {
  state = {}

  render() {
    return(
      <div className="navbar">
        <div className="navbar-search">
          <div className="navbar-logo">
            <h1 className="site-title">TASTE THE FOOD</h1>
          </div>
          <div className="navbar-searchbar">
            <input type="text" name="search" placeholder="What are you looking for?" autocomplete="off"/>
            <label htmlFor="search"><FontAwesomeIcon className="search-icon" icon={faSearch} /></label>
          </div>
          <h3 className="delivery-time">48 Hour Delivery</h3>
          <FontAwesomeIcon className="navbar-basket" icon={faShoppingBasket} />
        </div>
        <div className="navbar-navitems">
          <ul className="navbar-navitems-list">
            <li className='nav-list-item'>Home</li>
            <li className='shop-list-item nav-list-item'>Shop<FontAwesomeIcon className="drop-down-shop" icon={faArrowDown} /></li>
            <li className='nav-list-item'>Samples</li>
            <li className='nav-list-item'>My Products</li>
            <li className='nav-list-item'>Helpful Hints</li>
            <li className='nav-list-item'>Contact Us</li>
            <li className='nav-list-item'>Login</li>
          </ul>
          <Submenu />
        </div>
      </div>
    )
  }
}
