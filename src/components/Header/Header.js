import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Navbar from '../Navbar/Navbar'

import logo from '../../assets/logo/logo.svg';
import hamburger from '../../assets/images/hamburger.svg';


import './header.styles.scss'; 

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const handleCloseNavbar = () => setShowNavbar(false);
  return (
  <header className={'header'}>
    
      <button onClick={() => setShowNavbar(true)} className={'nav-toggle'} >
        <img src={hamburger} alt='button toggle' />
      </button>
    
    <div className={'header__logo'}>
      <img src={logo} alt='logo noname'/>
    </div>
    <CSSTransition
        in={showNavbar}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
      <Navbar
          onClose={() => setShowNavbar(false)}
          onClick={handleCloseNavbar}
        />
      </CSSTransition>
  </header>
);
}

export default Header;