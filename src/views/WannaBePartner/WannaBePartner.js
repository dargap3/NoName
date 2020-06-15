import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';

import './WannaBePartner.styles.scss';

const WannaBePartner = () => {
  const history = useHistory();

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <>  
      <section className={'wanna-be-partner'} > 
          <h2 className={'wanna-be-partner__body'}>
            <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS</strong>        
          </h2>
          <p className={'wanna-be-partner__body'}>
            Si llegaste hasta aquí es porque estás cansado de escuchar buenas ideas,
            que nunca se ejecutan. Si te ha pasado, 
            <span 
              onClick={ () => setIsModalOpen(true) }
              className={'animated-text animated-text--20'}
            >
              hablemos.
            </span>
          </p>
          <p className={'wanna-be-partner__body'}>
            Nosotros entendimos que el talento con actitud es un recurso escaso y sobretodo para las empresas.
          </p>
          <p className={'wanna-be-partner__body last'}>
            Por eso juntamos
            <span
              onClick={ () => history.push("/equipo")}
              className={'animated-text animated-text--18'}
            >
              un equipo tremendo
            </span><br/> 
            que nunca te dirá qué hacer, lo hará contigo.
          </p>
      </section> 
      <Footer />
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

export default WannaBePartner;