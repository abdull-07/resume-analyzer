import React, { useState, useEffect } from 'react';
import { FaLanguage, FaTrash } from 'react-icons/fa';
import { getAiSuggestions } from '../../utils/aiService';
import { useCV } from '../../context/CVContext';

const Languages = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');

  // Load existing languages from context
  useEffect(() => {
    if (CVData.languages) {
      setLanguages(CVData.languages);
    }
  }, [CVData.languages]);

  const proficiencyLevels = [
    'Native/Bilingual',
    'Fluent',
    'Advanced',
    'Intermediate',
    'Basic'
  ];

  const handleAddLanguage = (e) => {
    e.preventDefault();
    if (language && proficiency) {
      const newLanguage = {
        id: Date.now(),
        name: language,
        proficiency: proficiency
      };
      const updatedLanguages = [...languages, newLanguage];
      setLanguages(updatedLanguages);
      // Update context
      updateCVData('languages', updatedLanguages);
      // Reset form
      setLanguage('');
      setProficiency('');
    }
  };

  const handleDeleteLanguage = (languageId) => {
    const updatedLanguages = languages.filter(lang => lang.id !== languageId);
    setLanguages(updatedLanguages);
    // Update context
    updateCVData('languages', updatedLanguages);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaLanguage className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Languages</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Languages List */}
          {languages.length > 0 && (
            <div className="space-y-2">
              {languages.map(lang => (
                <div
                  key={lang.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{lang.name}</h3>
                    <p className="text-sm text-purple-600">{lang.proficiency}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteLanguage(lang.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Language Form */}
          <form
            onSubmit={handleAddLanguage}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Language"
                  className="w-full p-2 border rounded"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                />
              </div>
              <div>
                <select
                  className="w-full p-2 border rounded"
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value)}
                  required
                >
                  <option value="">Select Proficiency</option>
                  {proficiencyLevels.map(level => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Language
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Languages;