import React,  { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Layout from '../Layout/Layout';
import Landing from '../../views/Landing/Landing';
import Home from '../../views/Home/Home';
import WannaBePartner from '../../views/WannaBePartner/WannaBePartner';
import NoNamers from '../../views/NoNamers/NoNamers';
import Partners from '../../views/Partners/Partners';
import NoNamer from '../../views/NoNamer/NoNamer';
import SmallTalksCoolnessReport from '../../views/SmallTalksCoolnessReport/SmallTalksCoolnessReport';

import './routes.styles.scss';

const routes = [
  { path: '/home',  Component: Home },
  { path: '/cool-stuff', Component: SmallTalksCoolnessReport},
  { path: '/nonamers', Component: NoNamers },
  { path: '/nonamers/:noNamerId',  Component: NoNamer },
  { path: '/aliados',  Component: Partners },
  { path: '/contacto',  Component: WannaBePartner },
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
          {({ match }) => (
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
                <Component onOpenNav={handleOpenNav}/>
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