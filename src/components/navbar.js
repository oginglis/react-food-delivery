import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

export default class Navbar extends Component {

  render() {
    return(
      <div className="navbar" id="nav">
        <div className="navbar-search">
          <div className="navbar-logo">
            <div className={this.props.burgerActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'} onClick={this.props.changePopoutState}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            <h1 className="site-title">
              <Link
                activeClass="active"
                to="carousel"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-180}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="site-title-ollie">
                FOOD DASH
              </Link>
            </h1>
          </div>
          <div className="navbar-searchbar">
            <input type="text" name="search" placeholder="What are you looking for?" autoComplete="off"/>
            <label htmlFor="search"><FontAwesomeIcon className="search-icon" icon={faSearch} onClick={this.props.toggleModalActive}/></label>
          </div>
          <h3 className="delivery-time sub">48 Hour Delivery</h3>
          <FontAwesomeIcon className="navbar-basket" icon={faShoppingBasket} onClick={this.props.toggleModalActive}/>
        </div>
        <div className="navbar-navitems">
          <ul className="navbar-navitems-list">
            <li className='nav-list-item menu-text'>
              <Link
                activeClass="active"
                to="carousel"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-180}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="site-title">
                Home
              </Link></li>
            <li className='nav-list-item menu-text' onClick={this.props.handleShopClick}>
              Shop
              <FontAwesomeIcon className="drop-down-shop" icon={faChevronDown} />
            </li>
            <li className='nav-list-item menu-text'>
              <Link
                to="fact-banner"
                smooth={true}
                hashSpy={true}
                offset={-450}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}>
                Samples
              </Link></li>
            <li className='nav-list-item menu-text'>
              <Link

                to="products"

                smooth={true}
                hashSpy={true}
                offset={-180}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}>
                My Products
              </Link>
            </li>
            <li className='nav-list-item menu-text'>
              <Link
                to="fact-banner"
                smooth={true}
                hashSpy={true}
                offset={-180}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}>
                Helpful Hints
              </Link>
            </li>
            <li className='nav-list-item menu-text'>
              <Link
                to="footer"
                smooth={true}
                hashSpy={true}
                offset={-450}
                duration={1000}
                isDynamic={true}
                ignoreCancelEvents={false}>
                Contact Us
              </Link>
            </li>
            <li className='nav-list-item menu-text' onClick={this.props.toggleModalActive}>Login</li>
          </ul>
        </div>
      </div>
    )
  }
}
