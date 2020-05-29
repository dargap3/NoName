import React from 'react';

import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className={'container'}>
    <Header />
    <main>
      <section>{ children }</section>
    </main>

  </div>
);

export default Layout;