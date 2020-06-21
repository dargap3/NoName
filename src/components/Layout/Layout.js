import React, { useState, useEffect } from 'react';
import  { useParams } from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.styles.scss'

const Layout = ({ children, path, onOpenNav, onCloseNav, showNavbar, ...props }) => {
  const Route = props.location.pathname;
  const { partnerId } = useParams();
  console.log('partner', partnerId)
  const [ width, setWidth ] = useState(window.innerWidth);

  console.log('props', props)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  });
	return (
      <div className={'container page'}>
        <div className={'hmcontainer'}>
          <Header
            path={path}
            onCloseNav={onCloseNav}
            onOpenNav={onOpenNav}
            showNavbar={showNavbar}
          /> 
          <main className={'main'}>
            { children }
          </main>
        </div>
        {
          width < 1000 && (Route === '/equipo' || Route === `/equipo/${partnerId}`)  ? null : <Footer />
        }
      </div>
	);
}

export default Layout;