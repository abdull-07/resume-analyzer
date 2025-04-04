import React, { useState } from 'react';
import { FaCode, FaTrash } from 'react-icons/fa';
import { getAiSuggestions } from '../utils/aiService';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPresent, setIsPresent] = useState(false);
  const [description, setDescription] = useState('');

  const handleAiSuggestions = async () => {
    setLoading(true);
    const aiText = await getAiSuggestions(`Write a professional and concise project description for a resume based on these details:
- Project Name: ${projectName}
- Technologies Used: ${technologies}
- Duration: ${startDate} to ${isPresent ? 'Present' : endDate}

The description should:
- Highlight the project's purpose and impact
- Emphasize technical challenges overcome
- Include quantifiable achievements
- Showcase your role and contributions
- Be concise and impactful

Example output:
"Developed a full-stack e-commerce platform using React and Node.js, implementing secure payment processing and real-time inventory management. Improved user experience resulting in 40% increase in customer retention."

Now, generate a similar description for the given project.`);

    setDescription(aiText || 'No suggestions available. Please try again.');
    setLoading(false);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (projectName && technologies) {
      const newProject = {
        id: Date.now(),
        name: projectName,
        technologies,
        url: projectUrl,
        startDate,
        endDate: isPresent ? 'Present' : endDate,
        description
      };
      setProjects([...projects, newProject]);
      // Reset form
      setProjectName('');
      setTechnologies('');
      setProjectUrl('');
      setStartDate('');
      setEndDate('');
      setIsPresent(false);
      setDescription('');
    }
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaCode className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Projects</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Projects List */}
          {projects.length > 0 && (
            <div className="space-y-2">
              {projects.map(project => (
                <div key={project.id} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex-grow">
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-gray-600">
                      {project.startDate} - {project.endDate}
                    </p>
                    <p className="text-sm text-purple-600">{project.technologies}</p>
                    {project.url && (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Project URL
                      </a>
                    )}
                    <p className="text-sm mt-1">{project.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Project Form */}
          <form onSubmit={handleAddProject} className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <div>
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-2 border rounded"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Technologies Used (e.g., React, Node.js, MongoDB)"
                className="w-full p-2 border rounded"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="url"
                placeholder="Project URL (optional)"
                className="w-full p-2 border rounded"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="month"
                  className="w-full p-2 border rounded"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
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
                placeholder="Project Description"
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
              + Add Project
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Projects;
