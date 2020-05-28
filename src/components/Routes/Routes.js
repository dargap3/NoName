import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import Team from '../../views/Team/Team';
import Partners from '../../views/Partners/Partners';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/ser-un-aliado' component={WannaBePartner} />
      <Route exact path='/equipo' component={Team} />
      <Route exact path='/conocer-los-aliados' component={Partners} />
    </Switch>
  </Router>
)

export default Routes;