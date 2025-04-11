import React, { useState, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { getAiSuggestions } from '../../utils/aiService';
import { useCV } from '../../context/CVContext';

const ProfessionalSummary = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');

  // Load existing summary from context
  useEffect(() => {
    if (CVData.professionalSummary) {
      setSummary(CVData.professionalSummary);
    }
  }, [CVData.professionalSummary]);

  const handleAiSuggestions = async () => {
    setLoading(true);
    const aiText = await getAiSuggestions(`Write a professional summary for a CV that is:
- Concise and impactful (3-4 sentences)
- Highlights key strengths and expertise
- Shows career goals and value proposition
- Professional and engaging

Example format:
"Results-driven software engineer with 5+ years of experience in full-stack development. Proven track record of delivering scalable solutions and leading cross-functional teams. Skilled in agile methodologies and passionate about creating innovative solutions that drive business growth."

Please generate a professional summary following this format.`);

    setSummary(aiText || 'No suggestions available. Please try again.');
    setLoading(false);
  };

  const handleSaveSummary = () => {
    if (summary.trim()) {
      updateCVData('professionalSummary', summary);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaUserTie className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Professional Summary</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <textarea
              rows="6"
              className="w-full p-2 border rounded resize-none"
              placeholder="Write a professional summary that highlights your key strengths, experience, and career objectives..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
            
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-purple-500 text-white p-2 rounded"
                onClick={handleAiSuggestions}
                disabled={loading}
              >
                {loading ? 'Loading...' : '+ AI Suggestions'}
              </button>
              
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded ml-auto"
                onClick={handleSaveSummary}
              >
                Save Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalSummary;
