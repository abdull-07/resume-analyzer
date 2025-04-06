import React, { useState, useEffect } from 'react';
import { FaTools, FaTrash } from 'react-icons/fa';
import { useResume } from '../context/ResumeContext';

const Skill = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [skillName, setSkillName] = useState('');
  const [proficiency, setProficiency] = useState('Beginner');
  const [skills, setSkills] = useState([]);

  // Load existing skills data from context
  useEffect(() => {
    if (resumeData.skills) {
      setSkills(resumeData.skills);
    }
  }, [resumeData.skills]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillName.trim() && proficiency) {
      const newSkill = {
        id: Date.now(),
        name: skillName.trim(),
        proficiency
      };
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
      // Update context
      updateResumeData('skills', updatedSkills);
      // Reset form
      setSkillName('');
      setProficiency('Beginner');
    }
  };

  const handleDeleteSkill = (skillId) => {
    const updatedSkills = skills.filter(skill => skill.id !== skillId);
    setSkills(updatedSkills);
    // Update context
    updateResumeData('skills', updatedSkills);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaTools className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Skills</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Skills List */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <div
                  key={skill.id}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 rounded-full"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-purple-600">• {skill.proficiency}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Skill Form */}
          <form onSubmit={handleAddSkill} className="flex gap-2 p-4 border rounded-lg bg-gray-50">
            <input
              type="text"
              placeholder="Add a skill (e.g., Python, React, Project Management)"
              className="flex-grow p-2 border rounded"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              required
            />
            <select
              className="w-40 p-2 border rounded"
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
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

export default Skill;