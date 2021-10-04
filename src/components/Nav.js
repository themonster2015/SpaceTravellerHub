import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div className="nav-items">
      <NavLink to="/" activeClassName="selected" exact>Rockets</NavLink>
      <NavLink to="/missions" activeClassName="selected">Missions</NavLink>
      <NavLink to="/profile" activeClassName="selected">My Profile</NavLink>
    </div>
  </nav>
);

export default Nav;
