import React, { useState, useEffect } from 'react';
import { FaBullseye, FaTrash } from 'react-icons/fa';
import { useResume } from '../context/ResumeContext';

const Goals = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  const [goalText, setGoalText] = useState('');
  const [type, setType] = useState('Short Term');

  // Load existing goals from context
  useEffect(() => {
    if (resumeData.goals) {
      setGoals(resumeData.goals);
    }
  }, [resumeData.goals]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (goalText.trim()) {
      const newGoal = {
        id: Date.now(),
        text: goalText.trim(),
        type
      };
      const updatedGoals = [...goals, newGoal];
      setGoals(updatedGoals);
      // Update context
      updateResumeData('goals', updatedGoals);
      // Reset form
      setGoalText('');
      setType('Short Term');
    }
  };

  const handleDeleteGoal = (goalId) => {
    const updatedGoals = goals.filter(goal => goal.id !== goalId);
    setGoals(updatedGoals);
    // Update context
    updateResumeData('goals', updatedGoals);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaBullseye className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Career Goals</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Goals List */}
          {goals.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {goals.map(goal => (
                <div
                  key={goal.id}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full"
                >
                  <span className="font-medium">{goal.text}</span>
                  <span className="text-sm text-purple-600">• {goal.type}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteGoal(goal.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Goal Form */}
          <form
            onSubmit={handleAddGoal}
            className="grid grid-cols-3 gap-2 p-4 border rounded-lg bg-gray-50"
          >
            <input
              type="text"
              placeholder="Enter your career goal"
              className="col-span-2 p-2 border rounded"
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              required
            />
            <select
              className="p-2 border rounded"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="Short Term">Short Term</option>
              <option value="Long Term">Long Term</option>
            </select>
            <button
              type="submit"
              className="col-span-3 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              + Add Goal
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Goals;