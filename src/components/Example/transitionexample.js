import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
//import { Container, Navbar, Nav } from 'react-bootstrap'
//import Home from './pages/home'
//import About from './pages/about'
//import Contact from './pages/contact'
import './transitions/styles.css'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
]

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
        erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel
        porta turpis, ut iaculis justo.
      </p>
    </div>
  )
}

function Example() {
  return (
    <Router>
      <div>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={600}
                classNames="page"
                unmountOnExit
              >
                <div className={'wrapper'}>
                  <nav >
                    {routes.map(route => (
                      <NavLink
                        className={'nav'}
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                        exact
                      >
                        {route.name}
                      </NavLink>
                    ))}
                  </nav>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  )
}

export default Example;