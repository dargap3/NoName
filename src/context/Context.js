import React from "react";
import useQuery from "../hooks/useQuery/useQuery";

const Context = React.createContext({
  modalCurioso: {},
  modalHome: {},
  modalInicio: {},
  noNamers: [],
  smallTalks: [],
  coolnessReports: [],
  noNamersText: {},
});

const ContextProvider = ({ children }) => {
  const [modalCurioso, modalHome, modalInicio] = useQuery("modals");
  const noNamers = useQuery("nonamers");
  const smallTalks = useQuery("small-talks");
  const coolnessReports = useQuery("coolness-reports");
  const [noNamersText] = useQuery("nonamers-text");

  return (
    <Context.Provider
      value={{
        modalCurioso,
        modalHome,
        modalInicio,
        noNamers,
        smallTalks,
        coolnessReports,
        noNamersText,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
