import React from 'react';
import { Animated } from "react-animated-css";

import useWidth from '../../hooks/useWidth/useWidth';
import { useMouseTracker } from '../../hooks/useMouseTracker/useMouseTracker';

const CoolnessReport = ({ nombre, imagen, report, index, tab, setTab}) => {
  const width = useWidth();
  const mouseTracker = useMouseTracker();

  return (
    <div key={nombre} className={'right__list'} onClick={() => setTab(index)}>
      <a href={report} download={nombre} target="_blank" rel="noopener noreferrer">
        <p><b>CR</b>{nombre}</p>
      </a>
      <Animated 
        animationIn={'fadeIn'} 
        animationOut={'fadeOut'} 
        animationInDuration={1000} 
        animationOutDuration={1000} 
        isVisible={tab === index || width > 1024 ? true : false}
      >
        <div
          className={'right__list_image'}
          style={{position: `${width > 1024 && 'fixed'}`, left: width > 1024 && mouseTracker.x + 20, top: width > 1024 && mouseTracker.y + 20}}
        >
          <img src={imagen} alt={nombre}/>  
        </div>    
      </Animated>
    </div>
  );
  }

export default CoolnessReport;