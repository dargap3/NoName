import React, { useState, useContext } from 'react';
import parse from 'html-react-parser';
import useWidth from '../../hooks/useWidth/useWidth';

import { Context } from '../../context/Context';

import Modal from '../../components/Modal/Modal';

import './home.styles.scss';

const Home = ({ onOpenNav }) => {
  const { modalHome, bannerHome } = useContext(Context);
  const width = useWidth();
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  
  return (
    <>    
      <section className={'home'} >
        {
        <img src={ width < 750 ? bannerHome?.mobile : bannerHome?.desktop } alt='banner desktop' /> }
        {/* <p className={'home__body'}>
          Lo hacemos todo para que las PyMEs dejen de ser PyMEs. 
          ¿Cómo? Literalmente nos remangamos para hacer que las 
          mejores empresas escalen a niveles superiores, de una
          manera integral y disfrutando el camino.
          <span
            style={{marginLeft: '8px'}}
            role='img' 
            aria-labelledby='emoji'
          >
            🧗‍♀️
          </span> 
        </p>
        <p className={'home__body'}>
            Por eso no somos una sola empresa, somos todas las 
            empresas con las que trabajamos. Y como nos dimos 
            cuenta que
            <span 
              onClick={ () => setIsModalOpen(true) } 
              className={'animated-text animated-text--16'}
            >
            era imposible tener muchos nombres,
            </span><br />
            tomamos uno en el que caben todos. 
        </p>
        <p className={'home__body'}>
          <span 
            className={'animated-text animated-text--16'} 
            onClick={onOpenNav}
          >
            Y tú ¿qué quisieras saber?
          </span>
        </p> */}
      </section> 
      
      {/* <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false}>
        <button className={'modal__close'} onClick={onCloseModal} style={{transform: 'scale(0.5)'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 2L5 27" stroke="black" strokeWidth="4"/>
            <line x1="1.38919" y1="2.5612" x2="30.3892" y2="30.5612" stroke="black" strokeWidth="4"/>
          </svg>
        </button>
        <div className={'modal__content--home'}>
          <div className={'modal__text--home'} >
            {
              parse (
                `
                <h1>${modalHome?.texto[0]}</h1>
                <p>${modalHome?.texto[1]}</p>
                `
              )
            }
            
          </div>
          <div className={'modal__img--home'}>
            <img src={modalHome?.gif} alt="" />
          </div>
        </div>          
      </Modal> */}
    </>
);}

export default Home;