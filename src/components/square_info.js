import React, { Component } from 'react';

export default class SquareInfo extends Component {
  render(){
    return(
      <div className="square-info-wrapper">
        <img className="square-info-image" src="https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80" alt=""/>
        <div className="square-info-text">
          <h2 className="square-info-title">Packing Essentials</h2>
          <ul className="square-info-list">
            <li className="square-info-list-item">All essentials</li>
            <li className="square-info-list-item">Best Sellers</li>
            <li className="square-info-list-item">New In</li>
            <li className="square-info-list-item">All Products</li>
          </ul>
        </div>
      </div>
    )
  }
}
