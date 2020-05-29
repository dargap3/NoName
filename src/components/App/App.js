import React, { useState } from 'react';
import Routes from '../Routes/Routes';

import './App.scss';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const handleClick = () => setShowHeader(true);
  return (
  <div className={'container'}>
    <Routes showHeader={showHeader} onClick={ handleClick} />
  </div>
)};

export default App;
