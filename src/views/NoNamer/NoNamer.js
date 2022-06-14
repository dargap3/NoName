import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import useWidth from '../../hooks/useWidth/useWidth';
import { Context } from '../../context/Context';

import Carousel from '@brainhubeu/react-carousel';

import './noNamer.styles.scss';

const NoNamer = () => {
  const { noNamers } = useContext(Context);
  const { noNamerId } = useParams();
  const history = useHistory();

  const [noNamer, setNoNamer]= useState({});
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const updateNoNamer = await (noNamers|| []).find( (item) => item?.id === noNamerId) || {};
        setNoNamer({...updateNoNamer})
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noNamers]);

  const width = useWidth();

	const [likeOne, setLikeOne] = useState(false);
	const [likeTwo, setLikeTwo] = useState(false);
	const [likeThree, setLikeThree] = useState(false);
	
	return (
    <section className={'noNamer-container'}>
    	<div className={'noNamer-signature'}>
    		<img src={ noNamer?.firma } alt='nonamer firma' />
    		<div className={'arrow-back'} onClick={ () => history.push('/nonamers')} >
	        <svg width="71" height="42" viewBox="0 0 71 42" fill="none" xmlns="http://www.w3.org/2000/svg">
	          <path d="M71 21H17" stroke="#F4F3F1" strokeWidth="9"/>
	          <path d="M34 4L9 21L34 38" stroke="white" strokeWidth="9"/>
	        </svg>
    		</div>
    	</div>
    	<div className={'noNamer-description'}>
    		<h1 className={'noNamer-description__title'}>{noNamer?.nombre}</h1>
    		<p className={'noNamer-description__role'}>{noNamer?.cargo}</p>
        <a href={noNamer?.instagramurl} target='blank'>
				  <p>{noNamer?.instagram}</p>
        </a>
				<div className={'carousel-container'}>
					<Carousel
		        autoPlay={7000}
		        animationSpeed={4000}
		        infinite
            keepDirectionWhenDragging
		        slidesPerPage={ width >= 1200 ? 2.5 : width >= 1000 ? 2 : 1}
		        centered={false}   
		        >
		        <div className={'carousel__picture'}>
					  	<img src={noNamer?.carrusel?.[0]} alt='foto NoNamer' className={'image-carousel'}/>
							<svg width="24" height="20" viewBox="0 0 24 20" fill={likeOne ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeOne(!likeOne)}>
							  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeOne ? 'none' : 'white'}/>
							</svg>
		        </div>
					  <div className={'carousel__picture'}>
					  	<img src={noNamer?.carrusel?.[1]} alt='foto NoNamer' className={'image-carousel'}/>
					  	<svg width="24" height="20" viewBox="0 0 24 20" fill={likeTwo ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeTwo(!likeTwo)}>
					  	  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeTwo ? 'none' : 'white'}/>
					  	</svg>
		        </div>
					  <div className={'carousel__picture'}>
					  	<img src={noNamer?.carrusel?.[2]} alt='foto NoNamer' className={'image-carousel'}/>
							<svg width="24" height="20" viewBox="0 0 24 20" fill={likeThree ? 'red' : 'black'} xmlns="http://www.w3.org/2000/svg" onClick={() => setLikeThree(!likeThree)}>
							  <path d="M1.7782 3.09827C5.67253 -1.55591 10.0861 2.58119 11.9035 5.42541C11.9035 5.42541 17.745 -1.94376 21.6393 2.71044C27.5495 9.77392 12.2929 19 12.2929 19C12.2929 19 -2.50557 12.4066 1.7782 3.09827Z" stroke={likeThree ? 'none' : 'white'}/>
							</svg>
		        </div>
					</Carousel>	
				</div>
        <p className={'noNamer-description__personality'}>
          {
            parse (`${noNamer?.descripcion}`)
          }
        </p>				
    	</div>
    </section>
	);
}

export default NoNamer;
