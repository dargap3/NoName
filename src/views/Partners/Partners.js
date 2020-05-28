import React from 'react';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';  

import './Partners.styles.scss';

const Partners = () => (
	<div className={'partners-container'}>
	  <Navbar />
		<Header />
		<section className={'partners'}>
			<p className={'partners__body'}>
				 Los llamamos aliados <strong>porque lo que tenemos con ellos no son negocios sino conspiraciones</strong> para hacer país. 
				 Todos ellos nos han permitido meternos al lodo con ellos desde el día 1, y gracias a ellos #<strong>HacemosNoDecimos</strong> ⚒️
			</p>
			<p className={'partners__body'}>
				¿Hacemos país?
			</p>
			<div className={'partners__line'}/>
		</section>
		<section className={'partners-slider'}>
	
		</section>
    <Footer />
	</div>
)

export default Partners;