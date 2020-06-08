import React from 'react';

import Footer from '../../components/Footer/Footer';

import './Partners.styles.scss';

const Partners = () => (
	<>	
		<section className={'partners'}>
			<p className={'partners__body'}>
				 Los llamamos aliados <strong>porque lo que tenemos con ellos no son negocios sino conspiraciones</strong> para hacer país. 
				 Todos ellos nos han permitido meternos al lodo con ellos desde el día 1, y gracias a ellos #<strong>HacemosNoDecimos</strong> ⚒️
			</p>
			<p className={'partners__body animated-text'}>
				¿Hacemos país?
			</p>
		</section>
		<section className={'partners__slider'}>
		</section>
    <Footer />
	</>
)

export default Partners;