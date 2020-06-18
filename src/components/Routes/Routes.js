import React,  { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Layout from '../Layout/Layout'
import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import Team from '../../views/Team/Team';
import Partners from '../../views/Partners/Partners';
import Curious from '../../views/Curious/Curious';
import Partner from '../../views/Partner/Partner';

import './routes.styles.scss'


const routes = [
  { path: '/home',  Component: Home },
  { path: '/ser-un-aliado',  Component: WannaBePartner },
  { path: '/equipo', Component: Team },
  { path: '/conocer-los-aliados',  Component: Partners },
  { path: '/soy-curioso',  Component: Curious },
  { path: '/equipo/:partnerId',  Component: Partner }
]



const Routes = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleCloseNavbar = () => setShowNavbar(false);
  const handleOpenNav = () => setShowNavbar(true);

  return (
    <Router>
      <Route exact path='/'>      
        { ({ match }) => (
          <CSSTransition          
            in={match !== null}
            timeout={750}
            classNames={'page'}
            unmountOnExit
            apear
          >
            <Landing />
          </CSSTransition>
          )
        }
      </Route>

      { routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match, ...props }) => (
            <CSSTransition
              in={match !== null}
              timeout={750}
              classNames={'page'}
              unmountOnExit
              apear
            >
              <Layout
                path={path}
                onCloseNav={handleCloseNavbar}
                onOpenNav={handleOpenNav}
                showNavbar={showNavbar}
              >
                <Component onOpenNav={handleOpenNav} {...props} />
              </Layout>
            </CSSTransition>
          )}
        </Route>
      ))
      }
    </Router>
    );
}

export default Routes;