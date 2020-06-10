import React from 'react';

import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className={'container page'}>
    <Header />
    <main style={{marginTop: 175}}  className={'main'}>
      { children }
    </main>
  </div>
);

export default Layout;