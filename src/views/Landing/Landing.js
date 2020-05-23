import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'

import './landing.styles.scss'

const Landing = () => (
  <>
    <section className={'landing'}>
      <div className={'landing__title'}>
        <h1 className={'landing__gif'} >N_N_M_</h1>
        <Link to='/home' >OK, VAMOS!</Link>  
      </div>
      <Footer />      
    </section>
  </>
)

export default Landing;

