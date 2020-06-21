import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';

import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';

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

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={'partners'}>
        <p className={'partners__body'}>
          Los llamamos aliados 
          <strong style={{margin: '0px 8px'}}>porque lo que tenemos con ellos no son negocios sino conspiraciones</strong> 
          para hacer país. Todos ellos nos han permitido meternos al lodo con ellos desde el día 1, y gracias a ellos #
          <strong>HacemosNoDecimos</strong> ⚒️
        </p> 
        <p className={'partners__body'}>
          <span 
            onClick={ () => setIsModalOpen(true) } 
            className={'animated-text animated-text--20'}
          >
            ¿Hacemos país?
          </span> 
        </p>
      </section>
      <section className={'partners__slider'}>
        <Carousel
          autoPlay={5000}
          animationSpeed={4000}
          keepDirectionWhenDragging
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
      
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <button className={'modal__close'} onClick={onCloseModal}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
            <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
          </svg>
        </button>
        <section className={'form__container'}>
          <Form />        
        </section>      
      </Modal>
    </>
  );
}

export default Partners;