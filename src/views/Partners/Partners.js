import React, { useContext } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import useWidth from '../../hooks/useWidth/useWidth';
import { useHistory } from 'react-router-dom';

import { Context } from '../../context/Context';

import '@brainhubeu/react-carousel/lib/style.css';
import './Partners.styles.scss';

const Partners = () => { 
  const { partners } = useContext(Context);
  const history = useHistory();

  const width = useWidth();

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
            onClick={ () => history.push('/contacto') } 
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
    </>
  );
}

export default Partners;