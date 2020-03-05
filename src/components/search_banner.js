import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBanner = (props) => {
  let styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${props.bgImage})`
  }

  return(
    <div className="search-banner-wrapper" style={styles}>
      <h1 className="search-banner-title">now go and find what you need...</h1>
      <div className="search-banner-searchbar">
        <input type="text" name="search" placeholder="What are you looking for?" autoComplete="off"/>
        <label htmlFor="search"><FontAwesomeIcon className="search-banner-search-icon" icon={faSearch} /></label>
      </div>
    </div>
  )
}

export default SearchBanner;


