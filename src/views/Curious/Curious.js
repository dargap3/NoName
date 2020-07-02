import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import parse from 'html-react-parser';

import { Context } from '../../context/Context';

import Modal from '../../components/Modal/Modal';

import './curious.styles.scss';

const Curious = () => {
  const { modalCurioso } = useContext(Context);

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  const history = useHistory();

  const handleClickOne = () => {
    if (document.documentElement.scrollTop > 0) {
      scroll.scrollToTop();
      setTimeout(() => history.push('/equipo'), 1000);
    } else {
      history.push('/equipo'); 
    }
  }

  const handleClickTwo = () => {
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
          <strong>
            {'NO SOMOS UN PUNTO COM HACEMOS LAS COSAS Y PUNTO'}
          </strong>        
        </h2>
        <p className={'curious__body'}>
          Lo maravilloso de la World Wide Web es que te lleva a lugares que nunca pensaste conocer. Has llegado a un 
          universo SIN NOMBRE en el que las empresas <br/>
          <span 
            onClick={ () => setIsModalOpen(true) } 
            className={'animated-text animated-text--20'}
            style={{margin: '10px 0'}}
          >
            no aceleran, escalan.
          </span>
        </p>
        <p className={'curious__body'}>
          Quizás 
          <span 
            style={{marginLeft: '8px'}}
            className={'animated-text animated-text--20'} 
            onClick={handleClickTwo}
          >
            nuestros aliados
          </span>
        </p> 
        <p className={'curious__body'}>
          o los 
          <span 
            style={{marginLeft: '8px'}}
            className={'animated-text animated-text--20'}
            onClick={handleClickOne}
          >
            NoNamers
          </span>
        </p>
        <p className={'curious__body last'}>
          te lo puedan explicar mejor.
        </p>
      </section>
      
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <button className={'modal__close'} onClick={onCloseModal} style={{transform: 'scale(0.5)'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
            <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
          </svg>
        </button>
        <div className={'modal__content--home'}>
          <div className={'modal__text--home'} >
            {
              parse (
                `<p>${modalCurioso?.texto}</p>`
                ) 
            } 
          </div>
          <div className={'modal__img--home'}>
            <img src={modalCurioso?.gif} alt={modalCurioso?.alt} />
          </div>
        </div>          
      </Modal>
    </>
  );
}

export default Curious;