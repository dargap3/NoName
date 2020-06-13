import React, { useState, useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import './Partners.styles.scss';

import carouselImage1 from '../../assets/logo/logo-carpinteria.png'
import carouselImage2 from '../../assets/logo/logo-hierbas.png'
import carouselImage3 from '../../assets/logo/logo-noise.png'
import carouselImage4 from '../../assets/logo/logo-siembra.png'
import carouselImage5 from '../../assets/logo/logo-true.png'


const Partners = () => {
  const [ width, setWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  });
  return (
    <div className={'partners__container'}>	
      <section className={'partners'}>
        <p className={'partners__body'}>
          Los llamamos aliados 
          <strong>porque lo que tenemos con ellos no son negocios sino conspiraciones</strong> 
          para hacer país. Todos ellos nos han permitido meternos al lodo con ellos desde el día 1, y gracias a ellos #
          <strong>HacemosNoDecimos</strong> ⚒️
        </p> 
        <p className={'partners__body'}>
          <span className={'animated-text animated-text--20'}>
            ¿Hacemos país?
          </span>
        </p>
      </section>
      <section className={'partners__slider'}>
        <Carousel
        autoPlay={4000}
        animationSpeed={3000}
        centered
        infinite
        slidesPerPage = { width >= 1000 ? 3 : 1}
        >
          <img src={carouselImage5} alt='logo true' />
          <img src={carouselImage1} alt='logo la carpinteria' />
          <img src={carouselImage2} alt='logo taller de hierbas' />
          <img src={carouselImage4} alt='logo siembraViva' />
          <img src={carouselImage3} alt='logo noise' />
        </Carousel>
      </section>
      <Footer />
    </div>
  );
}

export default Partners;