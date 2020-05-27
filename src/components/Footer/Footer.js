import React from 'react';
import './footer.styles.scss';

const Footer = ({inverted}) => (
  <footer className={`
    ${inverted ? 'footer--dark' : '' }
    footer--light
  `}>
    <p>@nonamecolombia
  noname@noname.com
  Edificio Buró 4.0
  Carrera 43B # 1A Sur-7  
  oficina 1502</p> 
  </footer>
)

export default Footer;