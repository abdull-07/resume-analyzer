import React, { useState, useEffect } from 'react';
import { FiFileText, FiFile, FiMail, FiEdit, FiX } from 'react-icons/fi';
import { FaRegStar} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TemplatesGallery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('resume');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    templateType: 'resume',
    requirements: ''
  });

  // Sample template data
  const templates = {
    resume: [
      {
        id: 1,
        name: 'Modern Professional',
        category: 'Creative',
        preview: '/templates/resume-modern.jpg',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Executive',
        category: 'Corporate',
        preview: '/templates/resume-executive.jpg',
        rating: 4.6
      },
      {
        id: 3,
        name: 'Minimalist',
        category: 'Simple',
        preview: '/templates/resume-minimal.jpg',
        rating: 4.9
      },
      {
        id: 4,
        name: 'ATS Optimized',
        category: 'Professional',
        preview: '/templates/resume-ats.jpg',
        rating: 4.7
      }
    ],
    cv: [
      {
        id: 1,
        name: 'Academic',
        category: 'Research',
        preview: '/templates/cv-academic.jpg',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Medical',
        category: 'Healthcare',
        preview: '/templates/cv-medical.jpg',
        rating: 4.5
      }
    ],
    coverletter: [
      {
        id: 1,
        name: 'Classic',
        category: 'Formal',
        preview: '/templates/coverletter-classic.jpg',
        rating: 4.6
      },
      {
        id: 2,
        name: 'Contemporary',
        category: 'Creative',
        preview: '/templates/coverletter-contemporary.jpg',
        rating: 4.7
      }
    ]
  };

  const handleTemplateSelect = (template, type) => {
    switch (type) {
      case 'resume':
        if (template.id === 4) { // ATS template ID
          navigate('/resume-builder', { 
            state: { 
              templateId: template.id,
              templateName: 'ATS Optimized'
            } 
          });
        } else {
          navigate('/resume-builder', { state: { templateId: template.id } });
        }
        break;
      case 'cv':
        navigate('/cv-builder', { state: { templateId: template.id } });
        break;
      case 'coverletter':
        navigate('/coverletter-builder', { state: { templateId: template.id } });
        break;
      default:
        break;
    }
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Template request:', formData);
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      templateType: 'resume',
      requirements: ''
    });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add useEffect to manage body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Professional Templates</h1>
          <p className="text-lg text-gray-600">
            Choose from our curated collection of high-converting templates
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center px-5 py-3 rounded-md text-sm font-medium transition-all ${activeTab === 'resume' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FiFileText className="mr-2" />
              Resume Templates
            </button>
            <button
              onClick={() => setActiveTab('cv')}
              className={`flex items-center px-5 py-3 rounded-md text-sm font-medium transition-all ${activeTab === 'cv' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FiFile className="mr-2" />
              CV Templates
            </button>
            <button
              onClick={() => setActiveTab('coverletter')}
              className={`flex items-center px-5 py-3 rounded-md text-sm font-medium transition-all ${activeTab === 'coverletter' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FiMail className="mr-2" />
              Cover Letters
            </button>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates[activeTab].map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Template Preview */}
              <div className="relative pb-[120%] bg-gray-100">
                <img 
                  src={template.preview} 
                  alt={template.name} 
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="inline-block bg-purple-600 text-xs px-2 py-1 rounded-md mb-1">
                    {template.category}
                  </span>
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-amber-500">
                    <FaRegStar className="mr-1" />
                    <span className="text-sm font-medium">{template.rating}</span>
                  </div>
                </div>
                {/* Modify the Use Template button */}
                <button 
                  onClick={() => handleTemplateSelect(template, activeTab)}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  <FiEdit />
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Can't find what you're looking for?
          </h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Request Custom Template
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-50 overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Existing modal header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Request Custom Template</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            {/* Existing form content */}
            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template Type
                </label>
                <select
                  name="templateType"
                  value={formData.templateType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="resume">Resume</option>
                  <option value="cv">CV</option>
                  <option value="coverletter">Cover Letter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatesGallery;