import React, { useState, useContext } from 'react';

import { Context } from '../../context/Context';

import CoolnessReport from '../CoolnessReport/CoolnessReport';

const CoolnessReportsList = () => {
  const { coolnessReports } = useContext(Context);
  const slicedCoolnessReports = coolnessReports.slice(coolnessReports.length - 3, coolnessReports.length);

  const [tab, setTab] = useState(-1);
  
  return (
    <>
      {
        slicedCoolnessReports.map((coolnessReport, index) => {
          const { imagen = '', nombre = '', report = '', } = { ...coolnessReport }
            return (
              <CoolnessReport key={nombre} imagen={imagen} nombre={nombre} report={report} index={index} tab={tab} setTab={setTab} />              
            );
        })
      }   
    </>
  )
}

export default CoolnessReportsList;