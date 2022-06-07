import React from 'react';

import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';

import './footer.styles.scss';

const Footer = ({inverted}) => (
  <footer className={`
    ${inverted ? 'footer--dark' : '' }
    footer
  `}
  >
    <address className={'footer__text'}>
      <p>Edificio Buró 4.0 ·</p>
      <p>Carrera 43B # 1A Sur-7 ·</p>
      <p>Oficina 1502 · Medellín</p> 
    </address>
    <ul className={'social-list'}>
      <li>
        <a 
          rel="noopener noreferrer"
          target='blank' 
          href="https://www.linkedin.com/company/noname-colombia/?viewAsMember=true"
        >
          <img src={linkedin} alt='logo linkedin'/>
        </a>
      </li>
      <li>
        <a 
          rel="noopener noreferrer" 
          target='blank' 
          href="https://www.instagram.com/nonamecolombia/"
        >
          <img src={instagram} alt='logo instagram'/>
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer;