import React from 'react';

import Footer from '../../components/Footer/Footer';
import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import './Partners.styles.scss';

import carouselImage1 from '../../assets/images/Logo_TV_2015.png'
import carouselImage2 from '../../assets/images/Moby-logo.png'
import carouselImage3 from '../../assets/images/Docker-Logo-White-RGB_Horizontal.png'

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
      <Carousel
      autoPlay={2000}
      animationSpeed={1000}
      infinite
      >
        <img src={carouselImage1} alt='' />
        <img src={carouselImage2} alt='' />
        <img src={carouselImage3} alt='' />
      </Carousel>
		</section>
    <Footer />
	</>
)

export default Partners;