import React from 'react';

import Header from '../Header/Header';

import './Layout.styles.scss'

const Layout = ({ children, path, onOpenNav, onCloseNav, showNavbar }) => {

	return (
		<div className={'container page'}>
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
	)	
}

export default Layout;