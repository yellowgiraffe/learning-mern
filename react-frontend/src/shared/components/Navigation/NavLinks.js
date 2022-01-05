import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/user1/books">MY BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/books/new">ADD BOOK</NavLink>
      </li>
      <li>
        <NavLink to="/login">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;