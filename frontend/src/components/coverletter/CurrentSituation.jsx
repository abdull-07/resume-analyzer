import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaUserTie, FaUserGraduate, FaUserSlash } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const CurrentSituation = () => {
  const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(CoverLetterData.currentSituation?.option || '');
  const [content, setContent] = useState(CoverLetterData.currentSituation?.content || '');

  const situationOptions = [
    {
      id: 1,
      title: 'I am currently working',
      // icon: <FaBriefcase className="text-gray-600 text-lg mr-2" />,
      template: `I am currently working as [Current position] at [Organization] in [City]. In this position I am responsible for [Responsibilities]. I have especially experienced [Positive aspects] as very positive.`
    },
    {
      id: 2,
      title: 'I am currently working and have recently completed my studies',
      // icon: <FaUserTie className="text-gray-600 text-lg mr-2" />,
      template: `I am currently working as [Current position] at [Organization] in [City]. In this position I am responsible for [Responsibilities]. I have completed my [Education] studies at [School].`
    },
    {
      id: 3,
      title: 'I am currently working and have ample experience',
      // icon: <FaUserTie className="text-gray-600 text-lg mr-2" />,
      template: `I am currently working as [Current position] at [Organization] in [City]. In this position I am responsible for [Responsibilities]. Over the past [Duration] [Months or years], I have gained ample experience in the field of [Experience gained].`
    },
    {
      id: 4,
      title: 'I have completed my studies',
      // icon: <FaGraduationCap className="text-gray-600 text-lg mr-2" />,
      template: `I have completed my [Education] studies at [School]. During these studies, students are readied for the position of [Desired position]. The studies focus on [Emphasis] as the topics of [Topics] are extensively discussed. In order to make good use of my acquired knowledge and skills, I would like to work for [Organization], in the position of [Desired position].`
    },
    {
      id: 5,
      title: 'I am currently studying',
      // icon: <FaUserGraduate className="text-gray-600 text-lg mr-2" />,
      template: `I am currently studying [Education] at [School]. During these studies, students are readied to become [Desired position]. The emphasis lies on [Emphasis] as during the educational process the topics of [Topics] are discussed. I would like to use my skills with [Organization], in order to make optimal use of my acquired knowledge.`
    },
    {
      id: 6,
      title: 'I am currently out of work',
      // icon: <FaUserSlash className="text-gray-600 text-lg mr-2" />,
      template: `I am currently not employed. However, I would like to gain experience through the possibilities offered by [Organization] to develop myself in the position of [Desired position]. I am very motivated to get started and would like to show that I can add value to [Organization].`
    }
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option.title);
    setContent(option.template);
    setIsDropdownOpen(false);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCoverLetterData('currentSituation', { option: selectedOption, content: content });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaBriefcase className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Current Situation</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 p-4 border rounded-lg bg-gray-50">
          {/* Dropdown Selector */}
          <div className="relative">
            <button
              type="button"
              className="w-full flex justify-between items-center p-3 border rounded-lg bg-white text-left"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center">
                {selectedOption || 'Select your current situation'}
              </div>
              <span className="text-gray-500">{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {situationOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.icon}
                    <span>{option.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedOption && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Content:</label>
              <textarea
                value={content}
                onChange={handleContentChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows="6"
                placeholder="Your current situation content will appear here..."
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            Save Current Situation
          </button>
        </form>
      )}
    </div>
  );
};

export default CurrentSituation;