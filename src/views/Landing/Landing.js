import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

import { Context } from '../../context/Context'; 

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

import './landing.styles.scss';
import gifLogo from '../../assets/logo/WhatsApp-Video-2020-05-29-at-9.13.56-AM.gif';

const Landing = () => {
  const { modalInicio } = useContext(Context); 

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  const history = useHistory();
  const handleClick = () => {
    onCloseModal();
    history.push("/home"); 
  };

  useEffect(() => {
    if (modalInicio?.activar) {
      const setTimeOut = setTimeout(() => {
        setIsModalOpen(true);
      }, 4000);
      return () => {
        clearTimeout(setTimeOut);
      }
    } else {
      const setTimeOut = setTimeout(() => {
        history.push("/home");
      }, 4000);
      return () => {
        clearTimeout(setTimeOut);
      }
    }
  }, [history, modalInicio?.activar, modalIsOpen]);

  return (
    <div className={'container page'} >
      <section className={'landing'}>
        <div className={'landing__title'}>
          <img src={gifLogo} alt='gif' className={'landing__gif'} />         
        </div>
      </section>
      <Footer />
      
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <div
          className={'modal__content--landing'}
          style={{
            backgroundImage: `url(${modalInicio?.["imagen de fondo"]})`,
            backgroundSize: 'cover',
          }}
        >
        <button style={{marginLeft: '95%'}} className={'modal__close'} onClick={handleClick}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
            <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
          </svg>
        </button>
        <div className={'modal__text--landing'}>
          {
            parse (
              `<p>${modalInicio?.texto[0]}</p>
              <p>${modalInicio?.texto[1]}
                <span role='img' aria-labelledby='jsx-a11y/accessible-emoji'>${modalInicio?.texto[2]}</span>
              </p>
              <p>${modalInicio?.texto[3]}</p>
              `
            )
          }
        </div>
          <Link 
            to='/home' 
            onClick={onCloseModal}
            className={'modal__link--landing'}
          >
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

