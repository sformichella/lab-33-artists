import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [artistName, setArtistName] = useState('');
  const [recording, setRecording] = useState('');

  return (
    <AppContext.Provider value={{
      artistName,
      setArtistName,
      recording,
      setRecording
    }}>
      { children }
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const {
    artistName,
    setArtistName,
    recording,
    setRecording
  } = useContext(AppContext);

  return { artistName, setArtistName, recording, setRecording };
};
