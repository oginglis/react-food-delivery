import React from 'react';

import Submenu from './submenu';

const Submenus = (props) => {
  return(
    <div className={props.shopActive ? 'sub-menus' : 'sub-menus isHidden'} >
      <Submenu listItem={['All Essentials', 'Best Sellers', 'New In', 'All products']} subMenuTitle='Packaging Essentials' />
      <Submenu listItem={['Burger / Chips solutions', 'Pizza boxes', 'Hot food - board', 'Hot food - plastic', 'Soup / hot liquid containers', 'Salad / hot liquid containers']} subMenuTitle='Type' />
      <Submenu listItem={['Bowls and lids', 'Clamshells', 'Soup containers', 'Hot food boxes', 'Cutlery', 'Straws', 'Platters', 'View all']} subMenuTitle='Eco' />
      <Submenu listItem={['American / Burgers', 'Pan-Asian', 'Italian / Pasta / Pizza', 'British', 'Mexican / Tacos', 'Middle-Eastern Food', 'View all']} subMenuTitle='Cuisine' />
      <Submenu listItem={['Bags', 'Pizza Boxes', 'Greaseproof', 'Burger boxes']} subMenuTitle='Taste Branded' />
      <Submenu listItem={['All products', 'Internal Signage', 'External Signage']} subMenuTitle='Signage' />
    </div>
  )
}

export default Submenus;
