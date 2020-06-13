import React from 'react';

import Header from '../Header/Header';

import './Layout.styles.scss'

const Layout = ({ children, path }) => (
  <div className={'container page'}>
    <Header path={path} />
    <main className={'main'}>
      { children }
    </main>
  </div>
);

export default Layout;