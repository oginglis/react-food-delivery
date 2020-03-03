import React, { Component } from 'react';

export default class Submenu extends Component {
  state = {}

  render() {
    return(
      <div className="sub-menu">
        <h2 className="sub-menu-title">Packaging Essentials</h2>
        <ul className="sub-menu-list">
          <li className="sub-menu-list-item">All Essentials</li>
          <li className="sub-menu-list-item">Best Sellers</li>
          <li className="sub-menu-list-item">New In</li>
          <li className="sub-menu-list-item">All Products</li>
        </ul>
      </div>
    )
  }
}
