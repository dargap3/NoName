import React from 'react';

import './Team.styles.scss';

const Team = () => {
  return (
    <div className={'team__container'}>  	
      <section className={'team'}>
        <p className={'team__body'}>
          LOS NAMES DETRÁS <br />DE NO NAME      
        </p>
        <p className={'team__body'}>
          <strong>Los NoNamers</strong> somos una colección de 11 seres humanos diversos y complementarios. 
          No somos consultores, ni asesores ni banqueros de inversión. 
          Somos doers que <br />#<strong>HacemosNoDecimos</strong> que las cosas pasen en las empresas más tremendas de Colombia.
        </p>
      </section>
      <section className={'profile-team'}>
        <div /> 
        <div />	
        <div />	
        <div />	
        <div />	
        <div />	
        <div />	
        <div />	
        <div />	
      </section>
    </div>
  );
}

export default Team;