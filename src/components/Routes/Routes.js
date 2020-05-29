import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header'

import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import Team from '../../views/Team/Team';
import Partners from '../../views/Partners/Partners';
import Curious from '../../views/Curious/Curious';

const Routes = ({ showHeader, onClick }) => (
  <Router>
    {showHeader && <Header/> }        
    <Switch>
      <Route exact path='/'><Landing onClick={onClick} /></Route>
      <Route exact path='/home' component={Home} />
      <Route exact path='/ser-un-aliado' component={WannaBePartner} />
      <Route exact path='/equipo' component={Team} />
      <Route exact path='/conocer-los-aliados' component={Partners} />
      <Route exact path='/soy-curioso' component={Curious} />
    </Switch>
  </Router>
)

export default Routes;