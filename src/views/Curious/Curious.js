import React, { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import './curious.styles.scss';
import ladder from '../../assets/gif/Escaleras.gif'

const Curious = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <section className={'curious'} >
          <p className={'curious__body'}>
            <strong>NO SOMOS UN PUNTO COM HACEMOS LAS COSAS Y PUNTO
            </strong>        
          </p>
          <p className={'curious__body'}>
          Lo maravilloso de la World Wide Web es que 
          te lleva a lugares que nunca pensaste conocer. Has llegado a un 
          universo SIN NOMBRE en el que las empresas <br/><span onClick={ () => setIsModalOpen(true) } className={'animated-text-c'}>no aceleran, escalan.</span>
          </p>
          <p className={'curious__body last'}>Quizás <span className={'animated-text-c'}>nuestros aliados <br/></span>
            o los no <span className={'animated-text-c'}>Nonamers<br/></span> te lo puedan explicar mejor.</p>
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