import React from 'react';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import './WannaBePartner.styles.scss';

const WannaBePartner = () => (
  <div className={'wanna-be-partner__container'}>
    <Navbar/>
    <Header/>
    <section className={'wanna-be-partner'} >
        <p className={'wanna-be-partner__body'}>
          <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS
          </strong>        
        </p>
        <p className={'wanna-be-partner__body'}>
        Si llegaste hasta aquí es porque estás cansado de escuchar buenas ideas, 
        que nunca se ejecutan. Si te ha pasado, <strong>hablemos.</strong>
        </p>
        <p className={'wanna-be-partner__body'}>Nosotros entendimos que el talento 
          con actitud es un recurso escaso y sobretodo para las empresas.</p>
        <p className={'wanna-be-partner__body last'}>Por eso juntamos <strong>un equipo tremendo </strong>
          que nunca te dirá qué hacer, lo hará contigo.</p>
    </section> 
    <Footer />
  </div>
);

export default WannaBePartner;