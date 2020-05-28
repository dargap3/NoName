import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import Team from '../../views/Team/Team';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/quiero-ser-un-aliado' component={WannaBePartner} />
      <Route exact path='/equipo' component={Team} />

    </Switch>
  </Router>
)

export default Routes;