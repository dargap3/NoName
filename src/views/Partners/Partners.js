import React from 'react';

import Footer from '../../components/Footer/Footer';
import ControlledCarousel from '../../components/ControlledCarousel/ControlledCarousel'

import './Partners.styles.scss';

const Partners = () => (
	<div className={'partners-container'}>	
		<section className={'partners'}>
			<p className={'partners__body'}>
				 Los llamamos aliados <strong>porque lo que tenemos con ellos no son negocios sino conspiraciones</strong> para hacer país. 
				 Todos ellos nos han permitido meternos al lodo con ellos desde el día 1, y gracias a ellos #<strong>HacemosNoDecimos</strong> ⚒️
			</p>
			<p className={'partners__body animated-text'}>
				¿Hacemos país?
			</p>
		</section>
		<section className={'partners-slider'}>
      <ControlledCarousel />
		</section>
    <Footer />
	</div>
)

export default Partners;