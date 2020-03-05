import React from 'react';

const InfoBanner = (props) => {
  let styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props.bgImage})`
  }

  let copy;
  if (props.extraText) {
    copy = <p className="optional-text-banner">{props.extraText}</p>
  } else {
    copy = null;
  }
  let button;
  if (props.bannerButton) {
    button = <p className="info-banner-paragraph">{props.bannerButton}</p>
  } else {
    button = null;
  }

  return(
    <div className="info-banner-wrapper" style={styles} >
      <div className="info-banner-text-wrapper">
        <h1 className="info-banner-title">{props.bannerTitle}</h1>
        {copy}
        {button}
      </div>
    </div>
  )
}

export default InfoBanner;


