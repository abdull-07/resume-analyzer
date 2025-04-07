import React, { useState, useEffect } from 'react';
import { FaFolder, FaTrash } from 'react-icons/fa';
import { useResume } from '../../context/ResumeContext';

const Projects = () => {
  const { resumeData, updateResumeData } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  useEffect(() => {
    if (resumeData.projects) {
      setProjects(resumeData.projects);
    }
  }, [resumeData.projects]);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      const newProject = {
        id: Date.now(),
        name: projectName.trim(),
        technologies: technologies.trim(),
        description: description.trim(),
        url: projectUrl.trim()
      };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      updateResumeData('projects', updatedProjects);
      // Reset form
      setProjectName('');
      setTechnologies('');
      setDescription('');
      setProjectUrl('');
    }
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
    updateResumeData('projects', updatedProjects);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaFolder className="text-gray-600 text-4xl" />
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
                    <p className="text-sm text-gray-600">{project.technologies}</p>
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

            <div>
              <textarea
                rows="4"
                className="w-full p-2 border rounded resize-none"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
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
