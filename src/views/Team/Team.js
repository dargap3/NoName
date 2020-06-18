import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

import Footer from '../../components/Footer/Footer';

import './Team.styles.scss';

const Team = () => {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://website-noname.firebaseio.com/Equipo.json');
        const data = await response.json();
        
        setQuery(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);
  console.log(query)

  const history = useHistory();

  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  }, [width]);

  return (
    <div className={'team__container'}>  	 
      <section className={'team'}>
        <p className={'team__body'}>
          LOS NAMES DETRÁS <br />DE NO NAME      
        </p>
        <p className={'team__body'}>
          <strong>Los NoNamers</strong> somos una colección de 11 seres humanos diversos y complementarios. 
          No somos consultores, ni asesores ni banqueros de inversión. 
          Somos doers que #<strong>HacemosNoDecimos</strong> que las cosas pasen en las empresas más tremendas de Colombia.
        </p>
      </section>
      <section className={'profile-team'}> {/*AQUÍ IRIA UN MAP CON LAS IMAGENES DE LOS DATOS QUE SE TRAIGAN DE INSTAGRAM*/}
        {(query || []).map((item, index) => {
          const {id, imagen1} = {...item}
          const handleClick = () => {
            if (document.documentElement.scrollTop > 0) {
              scroll.scrollToTop();
              setTimeout(() => history.push(`/equipo/${id}`), 1000);
            } else {
              history.push(`/equipo/${id}`); 
            }
          }
            return (
              <div key={id} onClick={handleClick}>
                <img src={imagen1} alt='imagen NoNamer'/>            
              </div>
            )
          })}
      </section>
      {width > 1000 && <Footer />}
    </div>
  );
}

export default Team;