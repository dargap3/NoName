import React, { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import jamesFranco from '../../assets/gif/James Franco.gif'

import './home.styles.scss';

const Home = ({ onOpenNav }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <>    
      <section className={'home'} >
        <p className={'home__body'}>
          Lo hacemos todo para que las PyMEs dejen de ser PyMEs. 
          ¿Cómo? Literalmente nos remangamos para hacer que las 
          mejores empresas escalen a niveles superiores, de una
          manera integral y disfrutando el camino.
          <span
            style={{marginLeft: '8px'}}
            role='img' 
            aria-labelledby='emoji'
          >
            🧗‍♀️
          </span> 
        </p>
        <p className={'home__body'}>
            Por eso no somos una sola empresa, somos todas las 
            empresas con las que trabajamos. Y como nos dimos 
            cuenta que
            <span 
              onClick={ () => setIsModalOpen(true) } 
              className={'animated-text animated-text--16'}
            >
            era imposible tener muchos nombres,
            </span><br />
            tomamos uno en el que caben todos. 
        </p>
        <p className={'home__body'}>
          <span 
            className={'animated-text animated-text--16'} 
            onClick={onOpenNav}
          >
            ¿Tú qué estás buscando?
          </span>
        </p>
      </section> 
      <Footer />
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <button className={'modal__close'} onClick={onCloseModal} style={{transform: 'scale(0.5)'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
            <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
          </svg>
        </button>
        <div className={'modal__content--home'}>
          <div className={'modal__text--home'} >
            <h1>BUENO, NO IMPOSIBLE. EN MÉXICO REGISTRARON A UNA MUJER CON MÁS DE 30 NOMBRES:</h1>
            <p>"Maria de la Asunción Luisa Gonzaga Guadalupe Refugio Luz Loreto Salud Altagracia Carmen Matilde Josefa Ignacia Francisca Solano Vicenta Ferrer Antonia Ramona Agustina Carlota Inocencia Federica"</p>
          </div>
          <div className={'modal__img--home'}>
            <img src={jamesFranco} alt=""/>
          </div>
        </div>          
      </Modal>
    </>
);}

export default Home;