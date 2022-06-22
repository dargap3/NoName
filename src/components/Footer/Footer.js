import React from "react";
import BCopr from "../../assets/logo/EmpresaBCertificada_Logo2021_Blanco.png";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import useWidth from "../../hooks/useWidth/useWidth";

import "./footer.styles.scss";

const Footer = ({ inverted }) => {
  const width = useWidth();
  return (
    <footer
      className={`
    ${inverted ? "footer--dark" : ""}
    footer
  `}
    >
      {width >= 750 ? null : (
        <img src={BCopr} style={{ width: "7%" }} alt="Bcorp" />
      )}
      
      <address className={"footer__text"}>
        <p>Edificio Buró 4.0 ·</p>
        <p>Carrera 43B # 1A Sur-7 ·</p>
        <p>Oficina 1502 · Medellín</p>
      </address>
      <ul className={"social-list"}>
        <li>
          <a
            rel="noopener noreferrer"
            target="blank"
            href="https://www.linkedin.com/company/noname-colombia/?viewAsMember=true"
          >
            <img src={linkedin} alt="logo linkedin" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="blank"
            href="https://www.instagram.com/nonamecolombia/"
          >
            <img src={instagram} alt="logo instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
