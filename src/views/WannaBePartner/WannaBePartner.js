import React from 'react';

import Form from '../../components/Form/Form';

import './WannaBePartner.styles.scss';

const WannaBePartner = () => {
  return (
    <>  
      <section className={'wanna-be-partner'} > 
          <h2 className={'wanna-be-partner__body'}>
            <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS</strong>        
          </h2>
          <p className={'wanna-be-partner__body'}>
            Si llegaste hasta aquí es porque estás cansado de escuchar buenas ideas,
            que nunca se ejecutan. Si te ha pasado, hablemos.             
          </p>
          {/* <p className={'wanna-be-partner__body'}>
            Nosotros entendimos que el talento con actitud es un recurso escaso y sobretodo para las empresas.
          </p>
          <p className={'wanna-be-partner__body last'}>
            Por eso juntamos
            <span 
              onClick={handleClick}
              style={{marginLeft: '8px'}}
              className={'animated-text animated-text--18'}
            >
              un equipo tremendo
            </span><br/>
            que nunca te dirá qué hacer, lo hará contigo.
          </p> */}
        <section className={'form__container'}>
          <Form />        
        </section>      
      </section> 
    </>
  );
}

export default WannaBePartner;