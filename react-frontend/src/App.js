import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import NewBook from './books/pages/NewBook';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/books/new" exact>
          <NewBook />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
