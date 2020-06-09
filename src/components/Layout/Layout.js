import React from 'react';

import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className={'container page'}>
    <Header />
    <main>
      { children }
    </main>
  </div>
);

export default Layout;