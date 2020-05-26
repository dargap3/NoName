import React from 'react';

import logo from '../../assets/logo/logo.svg';
import hamburger from '../../assets/images/hamburger.svg';


import './header.styles.scss';

const Header = () => (
  <header className={'header'}>
    <button className={'nav-toggle'} >
      <img src={hamburger} alt='button toggle' />
    </button>
    <div className={'header__logo'}>
      <img src={logo} alt='logo noname'/>
    </div>
  </header>
)

export default Header;