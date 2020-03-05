import React from 'react';

const FactBanner = (props) => {

  return(
    <div className="fact-banner-wrapper" id="fact-banner">
      <div>
        <h1 className="fact-banner-title">{props.factTitle}</h1>
      </div>
    </div>
  )
}

export default FactBanner;
