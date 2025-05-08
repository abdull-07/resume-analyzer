import React, { useState } from 'react';
import { useAuth } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiEye, FiGrid, FiDownload, FiShare2, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PreviewToolbar = ({ documentType = 'resume', onFormat, isFullView, onViewToggle }) => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showTemplates, setShowTemplates] = useState(false);

  // Sample templates data
  const templateCategories = {
    resume: [
      { id: 1, name: 'Professional', thumbnail: '/templates/resume/professional.jpg' },
      { id: 2, name: 'Modern', thumbnail: '/templates/resume/modern.jpg' },
      { id: 3, name: 'Creative', thumbnail: '/templates/resume/creative.jpg' }
    ],
    cv: [
      { id: 1, name: 'Academic', thumbnail: '/templates/cv/academic.jpg' },
      { id: 2, name: 'Executive', thumbnail: '/templates/cv/executive.jpg' },
      { id: 3, name: 'Minimalist', thumbnail: '/templates/cv/minimalist.jpg' }
    ],
    coverletter: [
      { id: 1, name: 'Formal', thumbnail: '/templates/coverletter/formal.jpg' },
      { id: 2, name: 'Contemporary', thumbnail: '/templates/coverletter/contemporary.jpg' },
      { id: 3, name: 'Bold', thumbnail: '/templates/coverletter/bold.jpg' }
    ]
  };

  const redirectToAuth = (action) => {
    // Store the current path and action in state
    navigate("/signin", { 
      state: { 
        from: location.pathname,
        action: action // 'download' or 'share'
      } 
    });
  };

  const handleDownload = () => {
    if (!isSignedIn) {
      redirectToAuth('download');
      return;
    }
    // Implement download functionality
    console.log('Downloading document...');
  };

  const handleShare = () => {
    if (!isSignedIn) {
      redirectToAuth('share');
      return;
    }
    // Implement share functionality
    console.log('Sharing document...');
  };

  return (
    <>
      {/* Floating Toolbar */}
      <div className="sticky bottom-6 flex justify-center">
        <div className="bg-white rounded-full shadow-xl px-6 py-3 flex items-center justify-between gap-6 border border-gray-200 w-[600px]">
          
          {/* Left Section - Templates */}
          <div className="flex-1">
            <button 
              onClick={() => setShowTemplates(true)}
              className="flex flex-col items-center justify-center group"
              title="View Templates"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-600 transition-colors">
                <FiGrid className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-600">Templates</span>
            </button>
          </div>

          {/* Middle Section - Download & Share */}
          <div className="flex-1 flex justify-center gap-6">
            <button 
              onClick={handleDownload}
              className={`flex flex-col items-center justify-center group ${!isSignedIn && 'cursor-not-allowed opacity-50'}`}
              title={isSignedIn ? "Download" : "Sign in to download"}
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-600 transition-colors">
                <FiDownload className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-600">Download</span>
            </button>

            <button 
              onClick={handleShare}
              className={`flex flex-col items-center justify-center group ${!isSignedIn && 'cursor-not-allowed opacity-50'}`}
              title={isSignedIn ? "Share" : "Sign in to share"}
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-600 transition-colors">
                <FiShare2 className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-600">Share</span>
            </button>
          </div>

          {/* Right Section - Full Preview */}
          <div className="flex-1 flex justify-end">
            <button 
              onClick={onViewToggle}
              className="flex flex-col items-center justify-center group"
              title={isFullView ? "Exit Full View" : "Full Preview"}
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-600 transition-colors">
                <FiEye className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 text-gray-500 group-hover:text-blue-600">
                {isFullView ? "Exit Full View" : "Full View"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Templates Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {documentType === 'resume' && 'Resume Templates'}
                {documentType === 'cv' && 'CV Templates'}
                {documentType === 'coverletter' && 'Cover Letter Templates'}
              </h3>
              <button 
                onClick={() => setShowTemplates(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {templateCategories[documentType].map((template) => (
                <div 
                  key={template.id} 
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    console.log(`Selected template: ${template.name}`);
                    setShowTemplates(false);
                  }}
                >
                  <img 
                    src={template.thumbnail} 
                    alt={template.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-medium text-center">{template.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewToolbar;