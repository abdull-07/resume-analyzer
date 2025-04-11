import React, { createContext, useContext, useState } from 'react';

const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [CVData, setCVData] = useState({
    personalInfo: {},
  });

  const updateCVData = (section, data) => {
    setCVData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <CVContext.Provider value={{ CVData, updateCVData }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => useContext(CVContext);
