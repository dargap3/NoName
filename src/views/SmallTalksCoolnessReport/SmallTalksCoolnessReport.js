import React, { useState } from 'react';

import Carousel from '@brainhubeu/react-carousel';
import Modal from '../../components/Modal/Modal';
import useWidth from '../../hooks/useWidth/useWidth';

import {Animated} from "react-animated-css";

import LogoSmallTalks from  '../../assets/logo/LOGO SMALL TALKS-04 1.png';
import CoolnessReport from  '../../assets/logo/LOGO COOLNESS REPORT-05 1.png';
import SmallTalk1 from '../../assets/images/PORTADAS SMALL TALKS_Mesa de trabajo 1 1.png';
import SmallTalk2 from '../../assets/images/PORTADAS SMALL TALKS_Mesa de trabajo 1 copia 1.png';
import SmallTalk3 from '../../assets/images/PORTADAS SMALL TALKS_Mesa de trabajo 1 copia 2.png';
import './SmallTalksCoolnessReport.styles.scss';

const carouselData = [
  {
    id: 0,
    imageSrc: SmallTalk1,
    videoUrl: "https://www.youtube.com/embed/MH6TJU0qWoY",
  },
  {
    id: 1,
    imageSrc: SmallTalk2,
    videoUrl: "https://www.youtube.com/embed/xwtdhWltSIg",
  },
  {
    id: 2,
    imageSrc: SmallTalk3,
    videoUrl: "https://www.youtube.com/embed/4TeshUpfml4",
  },
];

const coolnessReportList = [
  {
    id: 0,
    imageSrc: SmallTalk1,
    text: 'uno',
  },
  {
    id: 0,
    imageSrc: SmallTalk2,
    text: 'dos',
  },
  {
    id: 0,
    imageSrc: SmallTalk3,
    text: 'tres',
  },
];

const SmallTalksCoolnessReport = () => {
  const width = useWidth();

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [tab, setTab] = useState(-1);

  const onCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={'small-talks'}>
        <div className={'left'}>
          <div className={'image-container'}>
            <img src={LogoSmallTalks} alt=""/>
          </div>
          <p>En NoName Coolness meets Business en cada una de nuestras interacciones. Nuestros resultados muestran de cómo lo hacemos y nuestras conversaciones de quiénes somos. Ahora queremos llevar nuestro cool factor a un formato audiovisual, entrevistando a NoNamers del mundo, personas que estén en el ecosistema de los Game Changers y que, incluso, pueda parecer imposible acceder a ellos.</p>
          <p>Small Talks – Big Minds es un formato de conversación/entrevista diseñado para plataformas digitales, fresco y con un lenguaje de la cultura digital pero con preguntas y respuestas trascendentales para el mundo de los negocios y las marcas.</p>
        </div>
        <div className={'right'}>
          <Carousel
              autoPlay={8000}
              animationSpeed={2000}
              keepDirectionWhenDragging
              centered
              infinite
              slidesPerPage={ width >= 1000 ? 3 : 1}
              arrows
            >
              {
                carouselData.map( (data) => (
                  <>
                    <div className={'right__image'}>
                      <img 
                        key={data.id}
                        src={data.imageSrc}
                        alt={''}
                        onClick={ () => setIsModalOpen(true) }
                        className={'carru_image'} 
                      />  
                    </div>
                    <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false} className={'small-talks-modal'}>
                      <iframe title={data.id} src={data.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                    </Modal>
                  </>
                ))
              }
          </Carousel>
          <div className={'line'}>
          </div>
        </div>
      </section>
      <section className={'coolness-report'}>
        <div className={'left left-coolness-report'}>
          <div className={'image-container'}>
            <img src={CoolnessReport} alt=""/>
          </div>
          <p>Small Talks – Big Minds es un formato de conversación/entrevista diseñado para plataformas digitales, fresco y con un lenguaje de la cultura digital pero con preguntas y respuestas trascendentales para el mundo de los negocios y las marcas.</p>
        </div>
        <div className={'right right-coolness-report'}>
          {coolnessReportList.map((item, index) => {
            const { imageSrc = '', text = '', } = { ...item }
            return (
              <div className={'right__list'} onClick={() => setTab(index)}>
                <p className={tab === index && 'active-text'}>{text}</p>
                <Animated 
                  animationIn={'fadeIn'} 
                  animationOut={'fadeOut'} 
                  isVisible={tab === index ? true : false}
                >
                  <div className={'right__list_image'}>
                    <img src={imageSrc} alt={text}/>  
                  </div>
                </Animated>
              </div>
            )
          })}
        </div>
      </section>
    </> 
)};

export default SmallTalksCoolnessReport;