import React from 'react';
import { FaStar, FaBriefcase, FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "Tech Corp",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      story: "Using Resume Analyzer helped me land my dream job! The AI suggestions made my resume stand out, and the real-time preview feature was invaluable.",
      achievement: "Received 3 job offers within 2 weeks"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Data Analytics Co",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      story: "The resume builder's professional formatting and AI-powered content suggestions helped me showcase my skills effectively.",
      achievement: "50% salary increase in new role"
    },
    {
      name: "Emma Wilson",
      role: "UX Designer",
      company: "Creative Solutions",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      story: "The customizable sections and clean design options helped me create a resume that perfectly represented my creative portfolio.",
      achievement: "Featured in top design magazine"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600">
            See how Resume Analyzer has helped professionals advance their careers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Successful Job Placements</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Interview Success Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
            <div className="text-gray-600">Average Salary Increase</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="text-blue-600 text-sm">{story.company}</p>
                </div>
              </div>
              <div className="mb-6">
                <FaQuoteLeft className="text-gray-300 text-2xl mb-2" />
                <p className="text-gray-600 italic">{story.story}</p>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <FaStar className="mr-2" />
                {story.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <a
            href="/resume-builder"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Create Your Resume Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
