import React from 'react';


import Footer from '../../components/Footer/Footer';

import './home.styles.scss';

const Home = () => (
  <>    
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
          cuenta que <span className={'animated-text'}>era imposible tener muchos nombres,</span><br />
           tomamos uno en el que caben todos.
        </p>
        <p className={'home__body'}><span className={'animated-text'}>¿Tú qué estás buscando?</span></p>
      </section> 
      <Footer />
  </>
)

export default Home;