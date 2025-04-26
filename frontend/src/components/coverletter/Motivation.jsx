import React, { useState } from 'react';
import { FaUserTie, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const Motivation = () => {
  const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(CoverLetterData.motivation?.option || '');
  const [content, setContent] = useState(CoverLetterData.motivation?.content || '');

  const motivationOptions = [
    {
      id: 1,
      title: 'Career-oriented',
      // icon: <FaUserTie className="text-gray-600 text-lg mr-2" />,
      template: `I would describe myself as someone who is [Personal description]. Combined with my experience, I believe that I can make a valuable contribution to your organization. I see the position of [Desired position] as the perfect next step in my career. In the position of [Desired position] I expect to be able to develop myself further as a professional.`
    },
    {
      id: 2,
      title: 'Education-oriented',
      // icon: <FaGraduationCap className="text-gray-600 text-lg mr-2" />,
      template: `I would describe myself as someone who is [Personal description]. I would like to put these characteristics to use within your organization. Given my education at [School], I think I am perfect for the position of [Desired position]. The components that were discussed during my studies closely match the skills required for this position.`
    },
    {
      id: 3,
      title: 'Experience-oriented',
      // icon: <FaBriefcase className="text-gray-600 text-lg mr-2" />,
      template: `I would describe myself as someone who is [Personal description]. I would like to put these characteristics to use within your organization. My experience as [Current position] at [Organization], has provided me with the expertise to be able to make a valuable contribution to [Organization] in the position of [Desired position].`
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
    updateCoverLetterData('motivation', { option: selectedOption, content: content });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaUserTie className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Motivation</h2>
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
                {selectedOption || 'Select your motivation type'}
              </div>
              <span className="text-gray-500">{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {motivationOptions.map((option) => (
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
                placeholder="Your motivation content will appear here..."
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            Save Motivation
          </button>
        </form>
      )}
    </div>
  );
};

export default Motivation;