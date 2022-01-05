import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import NewBook from './books/pages/NewBook';
import UserBooks from './books/pages/UserBooks';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/users/:userId/books" exact>
          <UserBooks />
        </Route>
        <Route path="/books/new" exact>
          <NewBook />
        </Route>
        <Redirect to="/"/>
      </Switch>
      </main>
    </Router>
  );
}

export default App;
