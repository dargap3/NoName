import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Navbar from '../Navbar/Navbar';

import logo from '../../assets/logo/logox4.png';
import hamburger from '../../assets/images/hamburger.svg';


import './header.styles.scss'; 

const Header = ({ path, onCloseNav, onOpenNav, showNavbar }) => {
  return (
  <header className={`
    ${path === '/equipo/:noNamerId' ? 'header--nonamer' : ''}
    header
    `}
  >
    <button onClick={onOpenNav} className={'nav-toggle'} >
      <img src={hamburger} alt='button toggle' />
    </button>    
    { path !== '/equipo/:noNamerId' && 
      <div className={'header__logo'}>
        <img src={logo} alt='logo noname'/>
      </div>
    }
    <CSSTransition
      in={showNavbar}
      timeout={500}
      classNames="alert"
      unmountOnExit
    >
      <Navbar onCloseNav={onCloseNav} />
    </CSSTransition>
  </header>
);
}

export default Header;