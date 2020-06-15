import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import './curious.styles.scss';
import ladder from '../../assets/gif/Escaleras.gif'

const Curious = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  const history = useHistory();

  const handleClickOne = () => {
    if (document.documentElement.scrollTop > 0) {
      scroll.scrollToTop();
      setTimeout(() => history.push('/equipo'), 1000);
    } else {
      history.push('/equipo'); 
    }
  }

  const handleClickTwo = () => {
    if (document.documentElement.scrollTop > 0) {
      scroll.scrollToTop();
      setTimeout(() => history.push('/conocer-los-aliados'), 1000);
    } else {
      history.push('/conocer-los-aliados'); 
    }
  }

  return (
    <>
      <section className={'curious'} >
          <h2 className={'curious__body'}>
            <strong>NO SOMOS UN PUNTO COM HACEMOS LAS COSAS Y PUNTO
            </strong>        
          </h2>
          <p className={'curious__body'}>
            Lo maravilloso de la World Wide Web es que te lleva a lugares que nunca pensaste conocer. Has llegado a un 
            universo SIN NOMBRE en el que las empresas <br/>
            <span 
              onClick={ () => setIsModalOpen(true) } 
              className={'animated-text animated-text--20'}
            >
              no aceleran, escalan.
            </span>
          </p>
          <p className={'curious__body'}>
            Quizás 
            <span 
              className={'animated-text animated-text--20'}
              onClick={handleClickTwo}
            >
              nuestros aliados
            </span>
          </p> 
          <p className={'curious__body'}>
            o los 
            <span 
              className={'animated-text animated-text--20'}
              onClick={handleClickOne}
            >
              Nonamers
            </span>
          </p>
          <p className={'curious__body last'}>
            te lo puedan explicar mejor.
          </p>
      </section>
      <Footer />
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <div className={'modal__content--home'}>
          <div className={'modal__text--home'} >
            <p>Una significa aumentar la velocidad y la otra, alcanzar el máximo potencial posible. <strong>¿Qué tal la vista allá arriba?</strong></p>
          </div>
          <div className={'modal__img--home'}>
            <img src={ladder} alt=""/>
          </div>
        </div>          
      </Modal>
    </>
  );
}

export default Curious;