import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';

const MenuSubNav = ({items}) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="menu-items">
      {items.subnav ? (
        <>
          <button 
          type="button" 
          aria-haspopup="menu"
          aria-expanded= {dropdown? "true" : "false"}
          onMouseEnter= {()=> setDropdown((prev)=> !prev)} 
          >
            {items.name}{' '}
          </button>
        <Dropdown submenus={items.subnav} dropdown={dropdown}/>
        </>
      ) : (
        <a href='#'>{items.name}</a>
      )}
    </li>
    );
};

export default MenuSubNav;