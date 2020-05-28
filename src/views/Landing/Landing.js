import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'

import './landing.styles.scss'

const Landing = () => (
	<div>
		<section className={'landing'}>
		  <div className={'landing__title'}>
		    <Link to='/home' style={{ textDecoration: 'none' }}>
		    	<h1 className={'landing__gif'} >N_N_M_</h1>
		    </Link>  
		  </div>
		</section>
		<Footer />
  </div> 
)

export default Landing;

