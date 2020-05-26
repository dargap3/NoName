import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../Footer/Footer'

import home from '../../assets/images/home.svg';
import './navbar.styles.scss';

const Navbar = () => (
  <nav className={'nav'}>
    <ul className={'nav__list'}>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'nav__link'} className={'nav__link'}>quiero ser un aliado</NavLink>
        <hr  className={'nav__line nav__line--1'} />
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'nav__link'} className={'nav__link'}>quiero conocer<br/>al equipo</NavLink>
        <hr className={'nav__line nav__line--2'} />
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'nav__link'} className={'nav__link'}>quiero conocer a los aliados</NavLink>
        <hr className={'nav__line nav__line--3'} />
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'nav__link'} className={'nav__link'}>quiero curiosear</NavLink>
        <hr className={'nav__line nav__line--4'} />
      </li>
      <li className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'nav__link'} className={'nav__link'}>
          <img src={home} alt='go to home section' />
        <hr className={'nav__line nav__line--5'} />
        </NavLink>
      </li>
    </ul>
    <Footer inverted />
  </nav>
)

export default Navbar;
