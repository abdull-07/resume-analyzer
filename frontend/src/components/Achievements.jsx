import React, { useState,useEffect } from 'react';
import { FaTrophy, FaTrash } from 'react-icons/fa';
import { useResume } from '../context/ResumeContext';

const Achievements = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (resumeData.achievements) {
      setAchievements(resumeData.achievements);
    }
  }, [resumeData.achievements]);

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newAchievement = {
        id: Date.now(),
        title: title.trim(),
        date
      };
      // Update the achievements state
      const updatedAchievements = [...achievements, newAchievement];
      setAchievements(updatedAchievements);
  
      // Update context with the updated achievements array
      updateResumeData('achievements', updatedAchievements);
  
      // Reset form
      setTitle('');
      setDate('');
    }
  };
  

  const handleDeleteAchievement = (achievementId) => {
    const updatedAchievements = achievements.filter(achievement => achievement.id !== achievementId);
    setAchievements(updatedAchievements);
    updateResumeData('achievements', updatedAchievements); // Update context after deleting
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaTrophy className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Achievements</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Achievements List */}
          {achievements.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full"
                >
                  <span className="font-medium">{achievement.title}</span>
                  {achievement.date && (
                    <span className="text-sm text-gray-600">• {achievement.date}</span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteAchievement(achievement.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Achievement Form */}
          <form
            onSubmit={handleAddAchievement}
            className="grid grid-cols-2 gap-2 p-4 border rounded-lg bg-gray-50"
          >
            <input
              type="text"
              placeholder="Achievement Title"
              className="p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="col-span-2 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              + Add Achievement
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Achievements;