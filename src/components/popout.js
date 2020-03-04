import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Popout extends Component {
  state = {
    closeActive: false,
  }

  render(){
    return(
      <div className={ this.props.popoutActive ? 'popout-wrapper' : 'popout-wrapper close-pop'  }>
        <FontAwesomeIcon className="pop-exit" icon={faTimes} onClick={this.props.changePopoutState} />
        <ul className="popout-list">
          <li className='menu-text pop-item'>Home</li>
          <li className='menu-text pop-item' onClick={this.handleShopClick}>
            Shop
            <FontAwesomeIcon className="drop-down-shop" icon={faChevronDown} />
          </li>
          <li className='menu-text pop-item'>Samples</li>
          <li className='menu-text pop-item'>My Products</li>
          <li className='menu-text pop-item'>Helpful Hints</li>
          <li className='menu-text pop-item'>Contact Us</li>
          <li className='menu-text pop-item'>Login</li>
        </ul>
      </div>
    )
  }
}
