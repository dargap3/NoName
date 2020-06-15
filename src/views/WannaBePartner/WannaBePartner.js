import React from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import Footer from '../../components/Footer/Footer';

import './WannaBePartner.styles.scss';

const WannaBePartner = () => {
  const history = useHistory();
  const handleClick = () => {
    if (document.documentElement.scrollTop > 0) {
      scroll.scrollToTop();
      setTimeout(() => history.push('/equipo'), 1000);
    } else {
      history.push('/equipo'); 
    }
  }

  return (
    <>  
      <section className={'wanna-be-partner'} > 
          <h2 className={'wanna-be-partner__body'}>
            <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS</strong>        
          </h2>
          <p className={'wanna-be-partner__body'}>
            Si llegaste hasta aquí es porque estás cansado de escuchar buenas ideas,
            que nunca se ejecutan. Si te ha pasado, 
            <span className={'animated-text animated-text--20'}>hablemos.</span>
          </p>
          <p className={'wanna-be-partner__body'}>
            Nosotros entendimos que el talento con actitud es un recurso escaso y sobretodo para las empresas.
          </p>
          <p className={'wanna-be-partner__body last'}>
            Por eso juntamos
            <span onClick={handleClick} className={'animated-text animated-text--18'}>un equipo tremendo</span><br/> 
            que nunca te dirá qué hacer, lo hará contigo.
          </p>
      </section> 
      <Footer />
    </>
  );
}

export default WannaBePartner;