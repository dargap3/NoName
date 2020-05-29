import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Layout from '../Layout/Layout'
import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import Team from '../../views/Team/Team';
import Partners from '../../views/Partners/Partners';
import Curious from '../../views/Curious/Curious';

const Routes = () => (
  <Router>       
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={ () => (
         <Layout>
           <Home />
          </Layout>
        )} />
      <Route exact path='/ser-un-aliado' component={ () => (
         <Layout>
           <WannaBePartner />
          </Layout>
        )} />
      <Route exact path='/equipo' component={ () => (
         <Layout>
           <Team />
          </Layout>
        )} />
      <Route exact path='/conocer-los-aliados' component={ () => (
         <Layout>
           <Partners />
          </Layout>
        )} />
      <Route exact path='/soy-curioso' component={ () => (
         <Layout>
           <Curious />
          </Layout>
        )} />
    </Switch>
  </Router>
)

export default Routes;