import React from 'react';


import Footer from '../../components/Footer/Footer';

import './curious.styles.scss';

const Curious = () => (
  <div className={'curious__container'}>
    
     
    <section className={'curious'} >
        <p className={'curious__body'}>
          <strong>NO SOMOS UN PUNTO COM HACEMOS LAS COSAS Y PUNTO
          </strong>        
        </p>
        <p className={'curious__body'}>
        Lo maravilloso de la World Wide Web es que 
        te lleva a lugares que nunca pensaste conocer. Has llegado a un 
        universo SIN NOMBRE en el que las empresas <br/><span className={'animated-text-c'}>no aceleran, escalan.</span>
        </p>
        <p className={'curious__body last'}>Quizás <span className={'animated-text-c'}>nuestros aliados <br/></span>
          o los no <span className={'animated-text-c'}>Nonamers<br/></span> te lo puedan explicar mejor.</p>
    </section>
    <Footer />
  </div>
);

export default Curious;