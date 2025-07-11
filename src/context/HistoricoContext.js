import React, { createContext, useState, useContext } from 'react';

const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
  const [historico, setHistorico] = useState([]);

  const adicionarHistorico = (etiqueta) => {
    setHistorico((prev) => [...prev, { ...etiqueta, data: new Date().toISOString() }]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarHistorico }}>
      {children}
    </HistoricoContext.Provider>
  );
};

export const useHistorico = () => useContext(HistoricoContext);
