import React, { useState, useEffect } from 'react';
import { FaHandsHelping, FaTrash } from 'react-icons/fa';
import { getAiSuggestions } from '../../utils/aiService';
import { useCV } from '../../context/CVContext';

const VolunteerExperience = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPresent, setIsPresent] = useState(false);
  const [description, setDescription] = useState('');

  // Load existing volunteer experience data from context
  useEffect(() => {
    if (CVData.volunteerExperience) {
      setExperiences(CVData.volunteerExperience);
    }
  }, [CVData.volunteerExperience]);

  const handleAiSuggestions = async () => {
    setLoading(true);
    const aiText = await getAiSuggestions(`Write a meaningful volunteer experience description for a CV based on these details:
- Organization: ${organization}
- Role: ${role}
- Location: ${city}, ${country}
- Duration: ${startDate} to ${isPresent ? 'Present' : endDate}

The description should:
- Highlight contributions and impact
- Showcase leadership and initiative
- Emphasize community engagement
- Include quantifiable achievements

Example output:
"Led volunteer team of 10 members in organizing monthly food drives, serving 200+ families in need. Developed and implemented new donation tracking system, increasing efficiency by 40%."

Now, generate a similar description for this volunteer experience.`);

    setDescription(aiText || 'No suggestions available. Please try again.');
    setLoading(false);
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (organization && role) {
      const newExperience = {
        id: Date.now(),
        organization,
        role,
        city,
        country,
        startDate,
        endDate: isPresent ? 'Present' : endDate,
        description,
      };
      const updatedExperiences = [...experiences, newExperience];
      setExperiences(updatedExperiences);
      // Update context
      updateCVData('volunteerExperience', updatedExperiences);
      // Reset form
      setOrganization('');
      setRole('');
      setCity('');
      setCountry('');
      setStartDate('');
      setEndDate('');
      setIsPresent(false);
      setDescription('');
    }
  };

  const handleDeleteExperience = (experienceId) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== experienceId);
    setExperiences(updatedExperiences);
    // Update context
    updateCVData('volunteerExperience', updatedExperiences);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaHandsHelping className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Volunteer Experience</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Volunteer Experience List */}
          {experiences.length > 0 && (
            <div className="space-y-2">
              {experiences.map(experience => (
                <div
                  key={experience.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{experience.organization}</h3>
                    <p className="text-sm text-purple-600">{experience.role}</p>
                    <p className="text-sm text-gray-600">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p className="text-sm text-gray-500">
                      {experience.city}, {experience.country}
                    </p>
                    <p className="text-sm mt-1">{experience.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteExperience(experience.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Experience Form */}
          <form
            onSubmit={handleAddExperience}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div>
              <input
                type="text"
                placeholder="Organization Name"
                className="w-full p-2 border rounded"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Volunteer Role"
                  className="w-full p-2 border rounded"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 border rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full p-2 border rounded"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="month"
                  className="w-full p-2 border rounded"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="month"
                    className="w-full p-2 border rounded"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    disabled={isPresent}
                    required={!isPresent}
                  />
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isPresent}
                      onChange={() => setIsPresent(!isPresent)}
                    />
                    Present
                  </label>
                </div>
              </div>
            </div>

            <div>
              <textarea
                rows="4"
                className="w-full p-2 border rounded resize-none"
                placeholder="Description of your volunteer work..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  className="ml-auto bg-purple-500 text-white p-2 rounded"
                  onClick={handleAiSuggestions}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : '+ AI Suggestions'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Volunteer Experience
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VolunteerExperience;