import React from 'react';

import CoolnessReportsList from '../../components/CoolnessReportsList/CoolnessReportsList';
import SmallTalksCarousel from '../../components/SmallTalksCarousel/SmallTalksCarousel';

import LogoSmallTalks from  '../../assets/logo/LOGO SMALL TALKS-04 1.png';
import CoolnessReport from  '../../assets/logo/LOGO COOLNESS REPORT-05 1.png';

import './SmallTalksCoolnessReport.styles.scss';

const SmallTalksCoolnessReport = () => (
  <>
    <section className={'small-talks'}>
      <div className={'left'}>
        <div className={'image-container'}>
          <img src={LogoSmallTalks} alt=""/>
        </div>        
        <p>Conversaciones frescas pero trascendentales para el mundo de los negocios y las marcas.</p>
      </div>
      <div className={'right'}>
        <SmallTalksCarousel />          
        <div className={'line'}>
      </div>
      </div>
    </section>
    <section className={'coolness-report'}>
      <div className={'left left-coolness-report'}>
        <div className={'image-container'}>
          <img src={CoolnessReport} alt=""/>
        </div>        
        <p>Curaduría mensual de la cultura pop que hoy ocupa un lugar en nuestras conversaciones.</p>
      </div>
      <div className={'right right-coolness-report'}>
        <CoolnessReportsList />
      </div>
    </section>
  </> 
);

export default SmallTalksCoolnessReport;