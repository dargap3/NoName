import React from 'react';


import Footer from '../../components/Footer/Footer';

import './home.styles.scss';

const Home = () => (
  <div className={'home__container'}>
    
    
      <section className={'home'} >
        <p className={'home__body'}>
        Lo hacemos todo para que las PyMEs dejen de ser PyMEs. 
        ¿Cómo? Literalmente nos remangamos para hacer que las 
        mejores empresas escalen a niveles superiores, de una
        manera integral y disfrutando el camino &#9792;
        </p>
        <p className={'home__body'}>
          Por eso no somos una sola empresa, somos todas las 
          empresas con las que trabajamos. Y como nos dimos 
          cuenta que <strong>era imposible tener muchos nombres,</strong><br />
           tomamos uno en el que caben todos.
        </p>
        <p className={'home__body'}><strong>¿Tú qué estás buscando?</strong></p>
      </section> 
      <Footer />
  </div>
)

export default Home;