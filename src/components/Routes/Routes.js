import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
    </Switch>
  </Router>
)

export default Routes;