import React, { createContext, useContext, useState } from 'react';

const CoverLetterContext = createContext();

export const CoverLetterProvider = ({ children }) => {
  const [CoverLetterData, setCoverLetterData] = useState({
    personalInfo: {},
    education: [],
    workExperience: [],
    skills: [],
    projects: [],
    certificates: [],
    hobbies: [],
    achievements: [],
    awards: [],
    goals: []
  });

  const updateCoverLetterData = (section, data) => {
    setCoverLetterData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <CoverLetterContext.Provider value={{ CoverLetterData, updateCoverLetterData }}>
      {children}
    </CoverLetterContext.Provider>
  );
};

export const useCoverLetter = () => useContext(CoverLetterContext);
