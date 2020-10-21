import React from 'react';
import useQuery from '../hooks/useQuery/useQuery';

const Context = React.createContext({
  modalCurioso: {},
  modalHome: {},
  modalInicio: {},
  partners: [],
  noNamers: [],
  smallTalks: [],
  coolnessReports: [],
});

const ContextProvider = ( {children} ) => {
  const [modalCurioso, modalHome, modalInicio] = useQuery('modals');
  const partners = useQuery('partners');
  const noNamers = useQuery('nonamers');
  const smallTalks = useQuery('small-talks');
  const coolnessReports = useQuery('coolness-reports');

  return (
    <Context.Provider 
      value={{
        modalCurioso,
        modalHome,
        modalInicio,
        partners,
        noNamers,
        smallTalks,
        coolnessReports,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};