import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal'

import './landing.styles.scss';
import gifLogo from '../../assets/logo/WhatsApp-Video-2020-05-29-at-9.13.56-AM.gif';

const Landing = ({onClick}) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <div className={'container page'} >
      <section className={'landing'}>
        <div className={'landing__title'}>
          <img src={gifLogo} onClick={ () => setIsModalOpen(true) } alt='gif__ok' className={'landing__gif'} />
          
        </div>
      </section>
      <Footer />
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={true}>
        <div>
          <p>Para nosotros este no es el mes de la igualdad, porque no somos iguales. Celebramos la diferencia porque es ahí donde están las nuevas respuestas.</p>
          <p>#HappyPride <span role='img' aria-labelledby='jsx-a11y/accessible-emoji'>🏳️‍🌈</span></p>
          <p>En NoName #HacemosNoDecimos Por eso creamos esta experiencia, para que le encuentres tu propio significado a nuestro nombre sin nombre.</p>
          <Link to='/home' onClick={onCloseModal} style={{ textDecoration: 'none' }}>
            ok, vamos! 
          </Link>  
        </div>
      </Modal>
    </div> 
  );}

export default Landing;

