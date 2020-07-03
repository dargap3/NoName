import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import { Context } from '../../context/Context';

import './NoNamers.styles.scss';

const NoNamers = () => {
  const { noNamers } = useContext(Context);
  const sortedNoNamers = noNamers.sort( (a, b) =>
    a.nombre > b.nombre ? 1 :
      a.nombre < b.nombre ? -1 : 0
  );

  const history = useHistory();

  return (
    <div className={'nonamers__container'}>  	 
      <section className={'nonamers'}>
        <p className={'nonamers__body'}>
          LOS NAMES DETRÁS <br />DE NO NAME      
        </p>
        <p className={'nonamers__body'}>
          <strong>Los NoNamers</strong> somos una colección de 11 seres humanos diversos y complementarios. 
          No somos consultores, ni asesores ni banqueros de inversión. 
          Somos doers que #<strong>HacemosNoDecimos</strong> que las cosas pasen en las empresas más tremendas de Colombia.
        </p>
      </section>
      <section className={'profile-nonamers'}>
        {(sortedNoNamers || []).map((item) => {
          const {id, carrusel, nombre} = {...item}
          const handleClick = () => {
            if (document.documentElement.scrollTop > 0) {
              scroll.scrollToTop();
              setTimeout(() => history.push(`/equipo/${id}`), 1000);
            } else {
              history.push(`/equipo/${id}`);
            }
          }
            return (
              <div key={id} onClick={handleClick}>
                <img src={carrusel?.[0]} alt={`foto ${nombre}`}/>     
              </div>
            )
          })}
      </section>
    </div>
  );
}

export default NoNamers;