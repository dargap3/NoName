import React from 'react';
import { CSSTransition } from 'react-transition-group';

import useWidth from '../../hooks/useWidth/useWidth';

import Navbar from '../Navbar/Navbar';

import logo from '../../assets/logo/logox4.png';
import hamburger from '../../assets/images/hamburger.svg';

import './header.styles.scss'; 

const Header = ({ path, onCloseNav, onOpenNav, showNavbar }) => {
  const width = useWidth();
  return (
  <header 
    className={`${(path === '/nonamers/:noNamerId' || path === '/cool-stuff' || path === '/home') ? 'header--nonamer' : ''} header`}
    style={
            (path === '/cool-stuff' && width <= 750) ? {marginLeft: '12%'} : {marginLeft: ''}
          }
  >
    <button onClick={onOpenNav} className={'nav-toggle'} >
      <img src={hamburger} alt='button toggle' />
    </button>    
    { ((path === '/nonamers/:noNamerId') || (path === '/cool-stuff')|| (path === '/home')) ? null :
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