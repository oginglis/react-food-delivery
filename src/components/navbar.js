import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  // state = {
  //   shopActive: false
  // }

  // handleShopClick = () => {
  //   if (this.state.shopActive) {
  //     this.setState({ shopActive: false });
  //   } else {
  //     this.setState({ shopActive: true });
  //   }
  // }

  render() {
    return(
      <div className="navbar">
        <div className="navbar-search">
          <div className="navbar-logo">
            <div className={this.props.burgerActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'} onClick={this.props.changePopoutState}>
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
            <li className='nav-list-item menu-text' onClick={this.props.handleShopClick}>
              Shop
              <FontAwesomeIcon className="drop-down-shop" icon={faChevronDown} />
            </li>
            <li className='nav-list-item menu-text'><a>Samples</a></li>
            <li className='nav-list-item menu-text'>My Products</li>
            <li className='nav-list-item menu-text'>Helpful Hints</li>
            <li className='nav-list-item menu-text'>Contact Us</li>
            <li className='nav-list-item menu-text'>Login</li>
          </ul>
        </div>
      </div>
    )
  }
}
