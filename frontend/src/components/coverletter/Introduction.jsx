import React, {useState} from 'react'
import { FaEnvelopeOpenText, FaNewspaper, FaGlobe, FaPenAlt, FaChevronDown } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const Introduction = () => {
    const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(CoverLetterData.letterType?.option || '');
    const [content, setContent] = useState(CoverLetterData.letterType?.content || '');
  
    const letterOptions = [
      {
        id: 1,
        title: 'Open Application',
        template: `Dear Sir or Madam,\n\nBy means of this letter I would like to inquire about the possibility of filling an outstanding [Position type] at [Organization]. My preference would be to fill the position of [Desired position].`
      },
      {
        id: 2,
        title: 'Response to ad in newspaper or magazine',
        template: `Dear Sir or Madam,\n\nMy attention was immediately drawn to the ad in [Name of newspaper or magazine] in which you state you are looking for a [Desired position]. The profile you have outlined fits me very well as I will further explain in this letter.`
      },
      {
        id: 3,
        title: 'Response to online ad',
        template: `Dear Sir or Madam,\n\nMy attention was immediately drawn to the ad on [Website name] in which you state you are looking for a [Desired position]. The profile you have outlined fits me very well as I will further explain in this letter.`
      },
      {
        id: 4,
        title: 'Other',
        template: `Dear Sir or Madam,\n\nWith this letter I would like to express my interest in filling an open vacancy at [Organization], in particular, the position of [Desired position].`
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
      updateCoverLetterData('letterType', { option: selectedOption, content: content });
    };
  
    return (
      <div className="bg-white p-4 rounded-xl shadow-md w-full">
        <div
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-3">
            <FaEnvelopeOpenText className="text-gray-600 text-4xl" />
            <h2 className="text-lg font-semibold">Introduction</h2>
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
                  {selectedOption || 'Select an Option'}
                </div>
                <FaChevronDown className={`text-gray-500 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {letterOptions.map((option) => (
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
                  placeholder="Your letter content will appear here..."
                />
              </div>
            )}
  
            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            >
              Save Introduction
            </button>
          </form>
        )}
      </div>
    );
  };

export default Introduction
