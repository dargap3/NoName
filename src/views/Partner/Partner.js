import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

import Carousel from '@brainhubeu/react-carousel';

import image1 from '../../assets/images/image-one.png';
import firmaDani from '../../assets/images/firmas/firmaDani.png';
import heartIcon from '../../assets/images/heart-icon.png';

import './Partner.styles.scss';


const Partner = () => {
	const [ width, setWidth ] = useState(window.innerWidth);
	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
	  return () => {
	    window.removeEventListener('resize', handleResize); // componentunWillMount
	  }
	}, [width]);
	const history = useHistory();
	return (
    <section className={'partner-container'}>
    	<div className={'partner-signature'}>
    		<img src={firmaDani} alt={'firma Dani'} />
    		<div className={'arrow-back'} onClick={ () => history.goBack()}>
    			<svg width="42" height="24" viewBox="0 0 42 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
    			<path d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z" fill="inherit"/>
    			</svg>
    		</div>
    	</div>
    	<div className={'partner-description'}>
    		<h1 className={'partner-description__title'}>Daniel Upegui</h1>
    		<p className={'partner-description__role'}>Business Builder - Marketing</p>
				<p>@Dupegui</p>
				<div className={'carousel-container'}>
					<Carousel
		        autoPlay={4000}
		        animationSpeed={3000}
		        infinite
		        slidesPerPage={ width > 1000 ? 2.5 : 1 }
		        centered={false}       
		        >
		        <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
							<img src={heartIcon} alt={'icono de me gusta'} />
		        </div>
					  <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
							<img src={heartIcon} alt={'icono de me gusta'} />
		        </div>
					  <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
							<img src={heartIcon} alt={'icono de me gusta'} />
		        </div>
					</Carousel>	
				</div>
				<p className={'partner-description__personality'}>
					 <span>"Dani</span> tiene la sonrisa más grande del mundo, y eso lo define. 
					 Cuando lo vea me va a entender. En cuanto entra a un lugar, se siente su carácter, su dinamismo, su tranquilidad. 
					 Si tiene la oportunidad de trabajar con él me va a entender.” <span>Camilo Upegui - Hermano</span>.
				</p>
    	</div>
    	{width > 1000 && <Footer />}
    </section>
	);
}

export default Partner;
