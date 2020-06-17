import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

import Carousel from '@brainhubeu/react-carousel';

import image1 from '../../assets/images/image-one.png';
import firmaDani from '../../assets/images/firmas/firmaDani.png';

import './Partner.styles.scss';


const Partner = () => {
	const history = useHistory();
	const [likeOne, setLikeOne] = useState(false);
	const [likeTwo, setLikeTwo] = useState(false);
	const [likeThree, setLikeThree] = useState(false);

	const [ width, setWidth ] = useState(window.innerWidth);
	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
	  return () => {
	    window.removeEventListener('resize', handleResize); // componentunWillMount
	  }
	}, [width]);
	return (
    <section className={'partner-container'}>
    	<div className={'partner-signature'}>
    		<img src={firmaDani} alt={'firma Dani'} />
    		<div className={'arrow-back'} onClick={ () => history.goBack()}>
        <svg width="71" height="42" viewBox="0 0 71 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M71 21H17" stroke="#F4F3F1" stroke-width="9"/>
          <path d="M34 4L9 21L34 38" stroke="white" stroke-width="9"/>
        </svg>
    		</div>
    	</div>
    	<div className={'partner-description'}>
    		<h1 className={'partner-description__title'}>Daniel Upegui</h1>
    		<p className={'partner-description__role'}>Business Builder - Marketing</p>
				<p>@Dupegui</p>
				<div className={'carousel-container'}>
					<Carousel
		        autoPlay={6000}
		        animationSpeed={4000}
		        infinite
		        slidesPerPage={ width > 1000 ? 2.5 : 1 }
		        centered={false}       
		        >
		        <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
							<svg width="24" height="20" viewBox="0 0 24 20" fill={likeOne ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeOne(!likeOne)}>
							  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeOne ? 'none' : 'white'}/>
							</svg>
		        </div>
					  <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
					  	<svg width="24" height="20" viewBox="0 0 24 20" fill={likeTwo ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeTwo(!likeTwo)}>
					  	  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeTwo ? 'none' : 'white'}/>
					  	</svg>
		        </div>
					  <div>
					  	<img src={image1} alt='foto Dani' className={'image-carousel'}/>
							<svg width="24" height="20" viewBox="0 0 24 20" fill={likeThree ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeThree(!likeThree)}>
							  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeThree ? 'none' : 'white'}/>
							</svg>
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
