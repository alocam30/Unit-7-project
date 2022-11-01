import React from 'react';
import { NavLink } from 'react-router-dom';

//navigation links
const Nav = () => {
    return (
     <nav className="main-nav">
        <ul>
          <li><NavLink to='/cafes'>Cafes</NavLink></li>
          <li><NavLink to='/cities'>Cities</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
      </nav>

);

};

export default Nav;