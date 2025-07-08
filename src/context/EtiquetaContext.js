import React, { createContext, useState, useContext } from 'react';

const EtiquetaContext = createContext();

export const EtiquetaProvider = ({ children }) => {
  const [etiquetas, setEtiquetas] = useState([]);

  const adicionarEtiqueta = (produto) => {
    setEtiquetas((prev) => [...prev, produto]);
  };

  const limparEtiquetas = () => {
    setEtiquetas([]);
  };

  return (
    <EtiquetaContext.Provider value={{ etiquetas, adicionarEtiqueta, limparEtiquetas }}>
      {children}
    </EtiquetaContext.Provider>
  );
};

export const useEtiqueta = () => useContext(EtiquetaContext);
