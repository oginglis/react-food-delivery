import React, { Component } from 'react';

export default class SquareInfo extends Component {
  componentDidMount = () => {
  }
  render(){
    return(
      <div className="square-info-wrapper" id="products">
        <img className="square-info-image" src={this.props.image} alt=""/>
        <div className="square-info-text">
          <h2 className="square-info-title">{this.props.titleItem}</h2>
          <ul className="square-info-list">
            {this.props.listItem.map((item) => {
              return <li className="square-info-list-item" key={item}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}



// Shop by Type
// Burger / Chips solutions
// Pizza boxes
// Hot food - board
// Hot food - plastic
// Soup / hot liquid containers
// Salad bowls and portion pots
