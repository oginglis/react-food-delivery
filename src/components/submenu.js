import React from 'react';

const Submenu = (props) => {
  return(
    <div className="sub-menu">
      <h2 className="sub-menu-title sub">{props.subMenuTitle}</h2>
      <ul className="sub-menu-list">
        {props.listItem.map((li, index)=> {
          return <li className="sub-menu-list-item lil" key={index}>{li}</li>
        })}
      </ul>
    </div>
  )
}

export default Submenu;
