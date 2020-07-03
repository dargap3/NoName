import React from 'react';
import useQuery from '../hooks/useQuery/useQuery';

const Context = React.createContext({
  modalCurioso: {},
  modalHome: {},
  modalInicio: {},
  partners: [],
  noNamers: [],
});

const ContextProvider = ( {children} ) => {
  const [modalCurioso, modalHome, modalInicio] = useQuery('modals');
  const partners = useQuery('partners');
  const noNamers = useQuery('nonamers');

  return (
    <Context.Provider 
      value={{
        modalCurioso,
        modalHome,
        modalInicio,
        partners,
        noNamers,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};