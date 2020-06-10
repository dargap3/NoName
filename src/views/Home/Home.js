import React, { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import './home.styles.scss';
import jamesFranco from '../../assets/gif/James Franco.gif'

const Home = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <>    
      <section className={'home'} >
        <p className={'home__body'}>
          Lo hacemos todo para que las PyMEs dejen de ser PyMEs. 
          ¿Cómo? Literalmente nos remangamos para hacer que las 
          mejores empresas escalen a niveles superiores, de una
          manera integral y disfrutando el camino &#9792;
        </p>
        <p className={'home__body'}>
            Por eso no somos una sola empresa, somos todas las 
            empresas con las que trabajamos. Y como nos dimos 
            cuenta que <span onClick={ () => setIsModalOpen(true) } className={'animated-text'}>era imposible tener muchos nombres,</span><br />
            tomamos uno en el que caben todos.
        </p>
        <p className={'home__body'}><span className={'animated-text'}>¿Tú qué estás buscando?</span></p>
      </section> 
      <Footer />
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
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