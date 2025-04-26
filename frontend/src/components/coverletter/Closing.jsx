import React, { useState } from 'react';
import { FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const Closing = () => {
  const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(CoverLetterData.closing?.option || '');
  const [content, setContent] = useState(CoverLetterData.closing?.content || '');

  const closingOptions = [
    {
      id: 1,
      title: 'Job vacancy application',
    //   icon: <FaFileAlt className="text-gray-600 text-lg mr-2" />,
      template: `I would like to further explain my motivation for the position of [Desired position] during a personal meeting. You can reach me either by phone via [Your phone number] or by email via [Your email address]. Thank you for your consideration. I look forward to hearing from you.\n\nSincerely,\n\n[Given name] [Family name]\n\nAttachment: Resume`
    },
    {
      id: 2,
      title: 'Open application',
    //   icon: <FaEnvelope className="text-gray-600 text-lg mr-2" />,
      template: `I would like to further explain my motivation to work at [Organization] during a personal meeting. You can reach me either by phone via [Your phone number] or by email via [Your email address].\n\nThank you for your consideration. I look forward to hearing from you.\n\nSincerely,\n\n[Given name] [Family name]\n\nAttachment: Resume`
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
    updateCoverLetterData('closing', { option: selectedOption, content: content });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Closing</h2>
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
                {selectedOption || 'Select closing type'}
              </div>
              <span className="text-gray-500">{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {closingOptions.map((option) => (
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
                rows="8"
                placeholder="Your closing content will appear here..."
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            Save Closing
          </button>
        </form>
      )}
    </div>
  );
};

export default Closing;