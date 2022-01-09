import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LoginContext } from '../../context/login-contex';

import './NavLinks.css';

const NavLinks = (props) => {
  const auth =  useContext(LoginContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/books" exact>ALL BOOKS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
        <NavLink to="users/user1/books">MY BOOKS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/books/new">ADD BOOK</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;