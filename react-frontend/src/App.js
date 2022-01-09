import React, { useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import NewBook from './books/pages/NewBook';
import UserBooks from './books/pages/UserBooks';
import UpdateBook from './books/pages/UpdateBook';
import Login from './users/pages/Login';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { LoginContext } from './shared/context/login-contex'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/users/:userId/books" exact>
          <UserBooks />
        </Route>
        <Route path="/books" exact>
          <UserBooks />
        </Route>
        <Route path="/books/new" exact>
          <NewBook />
        </Route>
        <Route path="/books/:bookId" exact>
          <UpdateBook />
        </Route>
        <Redirect to="/"/>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/books" exact>
          <UserBooks />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/login"/>
      </Switch>
    );
  }

  return (
    <LoginContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
        <Switch>{routes}</Switch>
        </main>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
