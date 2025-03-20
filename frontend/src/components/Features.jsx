import { FaCheckCircle } from "react-icons/fa";
import React from 'react'

const Features = () => {
  const features = [
    { title: "AI-Powered Analysis", description: "Get insights for an ATS-friendly resume." },
    { title: "Job-Specific Optimization", description: "Tailor your resume with AI suggestions." },
    { title: "One-Click Cover Letter", description: "Generate professional cover letters instantly." },
    { title: "Multi-Format Download", description: "Export resumes in PDF, DOCX, or TXT." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center"
          >
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
