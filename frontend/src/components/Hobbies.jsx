import React, { useState, useEffect } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useResume } from '../context/ResumeContext';

const Hobbies = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [hobbies, setHobbies] = useState([]);
  const [hobbyName, setHobbyName] = useState('');

  useEffect(() => {
    if (resumeData.hobbies) {
      setHobbies(resumeData.hobbies);
    }
  }, [resumeData.hobbies]);

  const handleAddHobby = (e) => {
    e.preventDefault();
    if (hobbyName.trim()) {
      const newHobby = {
        id: Date.now(),
        name: hobbyName.trim()
      };
      const updatedHobbies = [...hobbies, newHobby];
      setHobbies(updatedHobbies);
      updateResumeData('hobbies', updatedHobbies);
      setHobbyName('');
    }
  };

  const handleDeleteHobby = (hobbyId) => {
    const updatedHobbies = hobbies.filter(hobby => hobby.id !== hobbyId);
    setHobbies(updatedHobbies);
    updateResumeData('hobbies', updatedHobbies);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaHeart className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Hobbies & Interests</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Hobbies List */}
          {hobbies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hobbies.map(hobby => (
                <div
                  key={hobby.id}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full"
                >
                  <span>{hobby.name}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteHobby(hobby.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Hobby Form */}
          <form
            onSubmit={handleAddHobby}
            className="flex gap-2 p-4 border rounded-lg bg-gray-50"
          >
            <input
              type="text"
              placeholder="Add a hobby (e.g., Photography, Chess, Hiking)"
              className="flex-grow p-2 border rounded"
              value={hobbyName}
              onChange={(e) => setHobbyName(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hobbies;