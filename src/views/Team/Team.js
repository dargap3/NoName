import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import Footer from '../../components/Footer/Footer';

import image1 from '../../assets/images/image-one.png';
import image2 from '../../assets/images/image-two.png';
import image3 from '../../assets/images/image-three.png';
import image4 from '../../assets/images/image-four.png';
import image5 from '../../assets/images/image-five.png';
import image6 from '../../assets/images/image-six.png';
import image7 from '../../assets/images/image-seven.png';
import image8 from '../../assets/images/image-eight.png';
import image9 from '../../assets/images/image-nine.png';
import image10 from '../../assets/images/image10.png';
import image11 from '../../assets/images/image11.png';


import './Team.styles.scss';

const Team = () => {
  const history = useHistory();
  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  }, [width]);

  const handleClick = () => {
    if (document.documentElement.scrollTop > 0) {
      scroll.scrollToTop();
      setTimeout(() => history.push(`/equipo/${900}`), 1000);
    } else {
      history.push(`/equipo/${900}`); 
    }
  }

  return (
    <div className={'team__container'}>  	
      <section className={'team'}>
        <p className={'team__body'}>
          LOS NAMES DETRÁS <br />DE NO NAME      
        </p>
        <p className={'team__body'}>
          <strong>Los NoNamers</strong> somos una colección de 11 seres humanos diversos y complementarios. 
          No somos consultores, ni asesores ni banqueros de inversión. 
          Somos doers que #<strong>HacemosNoDecimos</strong> que las cosas pasen en las empresas más tremendas de Colombia.
        </p>
      </section>
      <section className={'profile-team'}> {/*AQUÍ IRIA UN MAP CON LAS IMAGENES DE LOS DATOS QUE SE TRAIGAN DE INSTAGRAM*/}
        <div onClick={handleClick}>
          <img src={image1} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image2} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image3} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image4} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image5} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image6} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image7} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image8} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image9} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image10} alt={'person one'}/>
        </div>
        <div onClick={handleClick}>
          <img src={image11} alt={'person one'}/>
        </div>
      </section>
      {width > 1000 && <Footer />}
    </div>
  );
}

export default Team;