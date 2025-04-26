import React, { useState } from 'react';
import { FiFileText, FiFile, FiMail } from 'react-icons/fi';
import { FaRegStar, FaDownload } from 'react-icons/fa';

const TemplatesGallery = () => {
  const [activeTab, setActiveTab] = useState('resume');

  // Sample template data
  const templates = {
    resume: [
      {
        id: 1,
        name: 'Modern Professional',
        category: 'Creative',
        preview: '/templates/resume-modern.jpg',
        downloads: '12.5k',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Executive',
        category: 'Corporate',
        preview: '/templates/resume-executive.jpg',
        downloads: '8.2k',
        rating: 4.6
      },
      {
        id: 3,
        name: 'Minimalist',
        category: 'Simple',
        preview: '/templates/resume-minimal.jpg',
        downloads: '15.7k',
        rating: 4.9
      }
    ],
    cv: [
      {
        id: 1,
        name: 'Academic',
        category: 'Research',
        preview: '/templates/cv-academic.jpg',
        downloads: '5.3k',
        rating: 4.7
      },
      {
        id: 2,
        name: 'Medical',
        category: 'Healthcare',
        preview: '/templates/cv-medical.jpg',
        downloads: '3.8k',
        rating: 4.5
      }
    ],
    coverletter: [
      {
        id: 1,
        name: 'Classic',
        category: 'Formal',
        preview: '/templates/coverletter-classic.jpg',
        downloads: '7.1k',
        rating: 4.6
      },
      {
        id: 2,
        name: 'Contemporary',
        category: 'Creative',
        preview: '/templates/coverletter-contemporary.jpg',
        downloads: '9.4k',
        rating: 4.7
      }
    ]
  };

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
                  <div className="text-sm text-gray-500">
                    {template.downloads} downloads
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  <FaDownload />
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Can't find what you're looking for?</h3>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Request Custom Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatesGallery;