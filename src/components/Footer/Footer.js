import React from 'react';

import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';

import './footer.styles.scss';

const Footer = ({inverted}) => (
  <footer className={`
    ${inverted ? 'footer--dark' : '' }
    footer--light
  `}>
    <div className={'footer__text'}>
      <p>Edificio Buró 4.0 ·</p>
      <p>Carrera 43B # 1A Sur-7 ·</p>
      <p>Oficina 1502 · Medellín</p> 
    </div>
    <div className={'redes'}>
      <img src={linkedin} alt='logo linkedin'/>
      <img src={instagram} alt='logo instagram'/>
      <img src={twitter} alt='logo twitter'/> 
    </div>
  </footer>
)

export default Footer;