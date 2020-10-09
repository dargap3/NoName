import React, { useState, useContext } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import useWidth from '../../hooks/useWidth/useWidth';

import { Context } from '../../context/Context';

import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';

import '@brainhubeu/react-carousel/lib/style.css';
import './Partners.styles.scss';

const Partners = () => { 
  const { partners } = useContext(Context);

  const width = useWidth();

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
      <section className={'partners__carousel'}>
        <Carousel
          autoPlay={5000}
          animationSpeed={4000}
          keepDirectionWhenDragging
          centered
          infinite
          slidesPerPage = { width >= 1000 ? 3 : width >= 750 ? 2 : 1}
        >
          {
            partners.map( (partner) => (
              <img 
                key={partner.id}
                src={partner.logo}
                alt={`${partner.nombre} logo`} 
              />
            ))
          }   
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