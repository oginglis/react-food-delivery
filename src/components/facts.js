import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleVan, faPoundSign, faTrash } from '@fortawesome/free-solid-svg-icons'



export default class Facts extends Component {
  state = {
    closeActive: false,
  }

  render(){
    return(
      <div className="facts-section-wrapper">
        <div className="fact">
          <FontAwesomeIcon icon={faShuttleVan} className="fact-icon" />
          <div clasName="fact-text">
            <h2 className="fact-title">free delivery</h2>
            <p className="fact-paragraph">We offer next day delivery as standard</p>
          </div>
        </div>
        <div className="fact">
          <FontAwesomeIcon icon={faPoundSign} className="fact-icon" />
          <div clasName="fact-text">
            <h2 className="fact-title">price promise</h2>
            <p className="fact-paragraph">Any profit we make we put back into giving you better pricing</p>
          </div>
        </div>
        <div className="fact">
          <FontAwesomeIcon icon={faTrash} className="fact-icon" />
          <div clasName="fact-text">
            <h2 className="fact-title">independently tested</h2>
            <p className="fact-paragraph">We thoroughly test all our packaging - see our 'Dash Rating' on every product</p>
          </div>
        </div>
      </div>
    )
  }
}
