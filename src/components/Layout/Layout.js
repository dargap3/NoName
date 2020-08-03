import React, { useState, useEffect } from 'react';
import  { useParams, useLocation} from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.styles.scss'

const Layout = ({ children, path, onOpenNav, onCloseNav, showNavbar }) => {
  const { pathname } = useLocation();
  const { noNamerId } = useParams();

  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  });

	return (
      <div className={'container page'}>
        <div className={'header-main-container'}>
          <Header
            path={path}
            onCloseNav={onCloseNav}
            onOpenNav={onOpenNav}
            showNavbar={showNavbar}
          /> 
          <main className={`
            ${path === '/equipo/:noNamerId' ? 'main--nonamer' : ''}
            main
          `}>
            { children }
          </main>
        </div>
        {
          width < 1200 && (pathname === '/equipo' || pathname === `/equipo/${noNamerId}`)  ? null : <Footer />
        }
      </div>
	);
}

export default Layout;