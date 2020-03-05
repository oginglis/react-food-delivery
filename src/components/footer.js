import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Footer extends Component {

  render(){
    return(
      <div className="footer-wrapper" id="footer"  >
        <div className="footer-all-section-wrapper">
          <div className="footer-section-wrapper">
            <h2 className="footer-section-title">Customer Service</h2>
            <ul className="footer-section-list">
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>Delivery</li>
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>FAQs</li>
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>Contact Us</li>
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>Privacy Policy</li>
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>Terms & Conditions</li>
              <li className="footer-section-list-item" onClick={this.props.toggleModalActive}>Cookie</li>
            </ul>
          </div>
          <div className="footer-section-wrapper">
            <h2 className="footer-section-title" >Subscribe</h2>
            <p>We'd love to keep you up-to-date with our latest offers and products – just join our mailing list.</p>
            <input type="text" placeholder="Email address"/>
            <h4 className="footer-sign-up" onClick={this.props.toggleModalActive}>Sign Up</h4>
          </div>
          <div className="footer-section-wrapper">
            <h2 className="footer-section-title">Registered Address</h2>
            <p>FOOD DASH Limited The Dash Building - Level 40 Ballon Bridge House 1 Food Lane ECSR 3WE</p>
          </div>
          <div className="footer-section-wrapper">
            <h2 className="footer-section-title">Questions about your order?</h2>
            <p>We're here to help! Email us at pag@foodrun.com or call 231086 521 1264. </p>
          </div>
        </div>
        <h1 className="site-title-footer">
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
            className="site-title-footer-linked">
            FOOD DASH
          </Link>
        </h1>
      </div>
    )
  }
}




