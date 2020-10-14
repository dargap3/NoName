import React from 'react';
import {useMouseTracker} from '../../hooks/useMouseTracker/useMouseTracker';
import './MouseTracker.styles.scss';

const  MouseTracker = () => {
  const mouseTracker = useMouseTracker();

  return (      
    <div className={'mouse-tracker'} style={{ position: 'fixed', left: mouseTracker.x - 20, top: mouseTracker.y - 20}} />      
  );
}

export default MouseTracker;