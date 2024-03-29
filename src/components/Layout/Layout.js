import React from "react";
import { useParams, useLocation } from "react-router-dom";
import BCorp from "../../assets/logo/EmpresaBCertificada_Logo2021_Blanco.png";
import useWidth from "../../hooks/useWidth/useWidth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.styles.scss";

const Layout = ({ children, path, onOpenNav, onCloseNav, showNavbar }) => {
  const { pathname } = useLocation();
  const { noNamerId } = useParams();

  const width = useWidth();

  return (
    <div className={"container page"}>
      <div
        className={"header-main-container"}
        style={
          path === "/cool-stuff" && width <= 750
            ? { marginLeft: 0 }
            : { marginLeft: "" }
        }
      >
        <Header
          path={path}
          onCloseNav={onCloseNav}
          onOpenNav={onOpenNav}
          showNavbar={showNavbar}
        />
        <main
          className={`${
            path === "/nonamers/:noNamerId" ||
            path === "/cool-stuff" ||
            path === "/home"
              ? "main--nonamer"
              : ""
          } main`}
        >
          {children}
          {width < 750 ? null :(
            <div className="logo-bcorp">
              <img src={BCorp} alt="BCopor" />
            </div>
          )}
        </main>
      </div>
      {width < 1000 &&
      (pathname === "/nonamers" ||
        pathname === `/nonamers/${noNamerId}`) ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
