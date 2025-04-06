import React, { useState, useEffect } from 'react';
import { FaMedal, FaTrash } from 'react-icons/fa';
import { useResume } from '../context/ResumeContext';

const Awards = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [awards, setAwards] = useState([]);
  const [awardTitle, setAwardTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [date, setDate] = useState('');


  useEffect(()=>{
    if (resumeData.awards) {
      setAwards(resumeData.awards);
    }
  },[resumeData.awards]);


  const handleAddAward = (e) => {
  e.preventDefault();
  if (awardTitle.trim() && issuer.trim()) {
    const newAward = {
      id: Date.now(),
      title: awardTitle.trim(),
      issuer: issuer.trim(),
      date
    };
    const updatedAwards = [...awards, newAward];
    setAwards(updatedAwards);
    updateResumeData('awards', updatedAwards); // Use the new array directly
    // Reset form
    setAwardTitle('');
    setIssuer('');
    setDate('');
  }
};

const handleDeleteAward = (awardId) => {
  const updatedAwards = awards.filter(award => award.id !== awardId);
  setAwards(updatedAwards);
  updateResumeData('awards', updatedAwards); // Add this line
};


  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaMedal className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Awards & Honors</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Awards List */}
          {awards.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {awards.map(award => (
                <div
                  key={award.id}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full"
                >
                  <span className="font-medium">{award.title}</span>
                  <span className="text-sm text-purple-600">• {award.issuer}</span>
                  {award.date && (
                    <span className="text-sm text-gray-600">• {award.date}</span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteAward(award.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Award Form */}
          <form
            onSubmit={handleAddAward}
            className="grid grid-cols-3 gap-2 p-4 border rounded-lg bg-gray-50"
          >
            <input
              type="text"
              placeholder="Award Title"
              className="p-2 border rounded"
              value={awardTitle}
              onChange={(e) => setAwardTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Issuing Organization"
              className="p-2 border rounded"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              required
            />
            <input
              type="month"
              className="p-2 border rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              type="submit"
              className="col-span-3 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              + Add Award
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Awards;