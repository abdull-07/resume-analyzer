import React from 'react';
import { FaRegEdit, FaRobot, FaMobileAlt, FaFileDownload, FaPuzzlePiece, FaEye } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRegEdit className="w-12 h-12 text-purple-500" />,
      title: "Interactive Resume Builder",
      description: "Easy-to-use section-based resume creation with intuitive interface for adding and editing content.",
      details: ["Multiple resume sections", "Drag and drop interface", "Real-time editing"]
    },
    {
      icon: <FaRobot className="w-12 h-12 text-purple-500" />,
      title: "AI-Powered Content Generation",
      description: "Get professional suggestions for each section using advanced AI technology.",
      details: ["Smart content suggestions", "Professional writing assistance", "Context-aware recommendations"]
    },
    {
      icon: <FaEye className="w-12 h-12 text-purple-500" />,
      title: "Real-time Preview",
      description: "See your changes instantly as you build your resume.",
      details: ["Live preview updates", "Multiple preview layouts", "Format consistency"]
    },
    {
      icon: <FaPuzzlePiece className="w-12 h-12 text-purple-500" />,
      title: "Comprehensive Sections",
      description: "Build a complete resume with all essential sections.",
      details: [
        "Personal Information",
        "Education & Work Experience",
        "Skills & Projects",
        "Certificates & Awards",
        "Achievements & Goals"
      ]
    },
    {
      icon: <FaFileDownload className="w-12 h-12 text-purple-500" />,
      title: "Export Options",
      description: "Download your resume in various formats (Coming Soon).",
      details: ["PDF export", "DOCX format", "Plain text version"]
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-purple-500" />,
      title: "Mobile Responsive",
      description: "Access and edit your resume on any device.",
      details: ["Works on all devices", "Responsive design", "Touch-friendly interface"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features for Your Resume
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to create a professional resume
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
          onClick={() => window.location.href = '/resume-builder'}
        >
          Start Building Your Resume
        </button>
      </div>
    </div>
  );
}

export default Features;
