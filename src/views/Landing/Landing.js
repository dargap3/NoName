import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import './landing.styles.scss';
/* import gifLogo from '../../assets/logo/WhatsApp-Video-2020-05-29-at-9.13.56-AM.gif'; */
import firmaNoName from '../../assets/images/firma_noname (1).mp4';

const Landing = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <div className={'page'} >
      <section className={'landing'}>
        <div className={'landing__title'}>
          <video src={firmaNoName} onClick={ () => setIsModalOpen(true) } alt='gif__ok' className={'landing__gif'} autoPlay loop/>
          {/* <img src={gifLogo} onClick={ () => setIsModalOpen(true) } alt='gif__ok' className={'landing__gif'} />  */}         
        </div>
      </section>
      <Footer />
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={true}>
        <div className={'modal__content--landing'} >
          <p>Para nosotros este no es el mes de la igualdad, porque no somos iguales. Celebramos la diferencia porque es ahí donde están las nuevas respuestas.</p>
          <p>#HappyPride <span role='img' aria-labelledby='jsx-a11y/accessible-emoji'>🏳️‍🌈</span></p>
          <p>En NoName #HacemosNoDecimos Por eso creamos esta experiencia, para que le encuentres tu propio significado a nuestro nombre sin nombre.</p>
          <Link to='/home' onClick={onCloseModal} style={{ textDecoration: 'none' }}>
            ok, vamos! 
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z" fill="black"/>
            </svg>
          </Link>  
        </div>
      </Modal>
    </div> 
  );}

export default Landing;

