import React from 'react';

import Footer from '../../components/Footer/Footer';

import './WannaBePartner.styles.scss';

const WannaBePartner = () => (
  <>  
    <section className={'wanna-be-partner'} >
        <p className={'wanna-be-partner__body'}>
          <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS
          </strong>        
        </p>
        <p className={'wanna-be-partner__body'}>
        Si llegaste hasta aquí es porque estás cansado de escuchar buenas ideas, 
        que nunca se ejecutan. Si te ha pasado, <span className={'animated-text'}>hablemos.</span>
        </p>
        <p className={'wanna-be-partner__body'}>Nosotros entendimos que el talento 
          con actitud es un recurso escaso y sobretodo para las empresas.</p>
        <p className={'wanna-be-partner__body last'}>Por eso juntamos <span className={'animated-text'}>un equipo tremendo </span>
          que nunca te dirá qué hacer, lo hará contigo.</p>
    </section> 
    <Footer />
  </>
);

export default WannaBePartner;