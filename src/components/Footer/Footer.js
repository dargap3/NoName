import React from 'react';
import './footer.styles.scss';

const Footer = ({inverted}) => (
  <footer className={`
    ${inverted ? 'footer--dark' : '' }
    footer--light
  `}>
    <p>@nonamecolombia</p>
    <p>noname@noname.com</p>
    <p>Calle NNA # NN - NN</p>    
  </footer>
)

export default Footer;