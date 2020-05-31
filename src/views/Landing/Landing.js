import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'

import './landing.styles.scss';
import gifLogo from '../../assets/logo/WhatsApp-Video-2020-05-29-at-9.13.56-AM.gif';

const Landing = ({onClick}) => (
	<div className={'container page'} >
		<section className={'landing'}>
		  <div className={'landing__title'}>
		    <Link to='/home' style={{ textDecoration: 'none' }}>
		    	<img src={gifLogo} onClick={onClick} alt='gif__ok' className={'landing__gif'} />
		    </Link>  
		  </div>
		</section>
		<Footer />
  </div> 
)

export default Landing;

