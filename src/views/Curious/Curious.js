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
        universo SIN NOMBRE en el que las empresas <br/><strong>no aceleran, escalan.</strong>
        </p>
        <p className={'curious__body last'}>Quizás <strong>nuestros aliados <br/></strong>
          o los no <strong>Nonamers<br/></strong> te lo puedan explicar mejor.</p>
    </section>
    <Footer />
  </div>
);

export default Curious;