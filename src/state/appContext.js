import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [artistName, setArtistName] = useState('');

  return (
    <AppContext.Provider value={{ artistName, setArtistName }}>
      { children }
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const { artistName, setArtistName } = useContext(AppContext);

  return { artistName, setArtistName };
};
