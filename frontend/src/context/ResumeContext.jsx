import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
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

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
