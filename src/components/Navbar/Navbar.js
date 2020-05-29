import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../Footer/Footer'

import home from '../../assets/images/home.svg';
import './navbar.styles.scss';

const Navbar = () => (
  <nav className={'nav'}>
    <ul className={'nav__list'}>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/ser-un-aliado'}} activeClassName={'selected'} className={'nav__link'}>quiero ser un aliado<hr/></NavLink>
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/equipo'}} activeClassName={'selected'} className={'nav__link'}>quiero conocer<br/>al equipo<hr/></NavLink>
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/conocer-los-aliados'}} activeClassName={'selected'} className={'nav__link'}>quiero conocer a los aliados<hr/></NavLink>
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/soy-curioso'}} activeClassName={'selected'} className={'nav__link'}>quiero curiosear<hr/></NavLink>
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'selected'} className={'nav__link'}>
          <img src={home} alt='go to home section' /><hr/>
        </NavLink>
      </li>
    </ul>
    <Footer inverted />
  </nav>
)

export default Navbar;
