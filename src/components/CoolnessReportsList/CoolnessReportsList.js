import React, { useContext } from 'react';

import { Context } from '../../context/Context';

import CoolnessReport from '../CoolnessReport/CoolnessReport';

const CoolnessReportsList = () => {
  const { coolnessReports } = useContext(Context);
  const slicedCoolnessReports = coolnessReports.slice(coolnessReports.length - 3, coolnessReports.length);
  
  return (
    <>
      {
        slicedCoolnessReports.map((coolnessReport, index) => {
          const { imagen = '', nombre = '', report = '', } = { ...coolnessReport }
            return (
              <CoolnessReport imagen={imagen} nombre={nombre} report={report} index={index} />              
            );
        })
      }   
    </>
  )
}

export default CoolnessReportsList;