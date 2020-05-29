import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../Footer/Footer'

import home from '../../assets/images/home.svg';
import './navbar.styles.scss';

const Navbar = ({onClick}) => (
  <nav className={'nav'}>
    <ul className={'nav__list'}>
      <li onClick={onClick} className={'nav__item'}>
        <NavLink to={{pathname: '/ser-un-aliado'}} activeClassName={'selected'} className={'nav__link'}>quiero ser un aliado<hr className={'nav__link--1'}/></NavLink>
      </li>
      <li onClick={onClick} className={'nav__item'}>
        <NavLink to={{pathname: '/equipo'}} activeClassName={'selected'} className={'nav__link'}>quiero conocer<br/>al equipo<hr className={'nav__link--2'}/></NavLink>
      </li>
      <li onClick={onClick} className={'nav__item'}>
        <NavLink to={{pathname: '/conocer-los-aliados'}} activeClassName={'selected'} className={'nav__link'}>quiero conocer a los aliados<hr className={'nav__link--3'}/></NavLink>
      </li>
      <li onClick={onClick} className={'nav__item'}>
        <NavLink to={{pathname: '/soy-curioso'}} activeClassName={'selected'} className={'nav__link'}>quiero curiosear<hr className={'nav__link--4'}/></NavLink>
      </li>
      <li onClick={onClick} className={'nav__item'}>
        <NavLink to={{pathname: '/home'}} activeClassName={'selected'} className={'nav__link'}>
          <img src={home} alt='go to home section' /><hr className={'nav__link--5'}/>
        </NavLink>
      </li>
    </ul>
    <Footer inverted />
  </nav>
)

export default Navbar;
