import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the Resume Analyzer work?",
      answer: "Our Resume Analyzer uses AI technology to help you create professional resumes. It provides section-specific suggestions, real-time preview, and various export options to make your resume stand out."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your data is secure. We don't store any personal information permanently, and all data is processed locally in your browser."
    },
    {
      question: "Can I export my resume in different formats?",
      answer: "Yes, you can download your resume in PDF and DOCX formats. This feature ensures compatibility with various application systems and maintains your resume's formatting."
    },
    {
      question: "How do I get AI suggestions for my resume content?",
      answer: "Each section has an 'AI Suggestions' button. Click it to receive professional recommendations based on your input. You can then edit and customize these suggestions."
    },
    {
      question: "What sections can I include in my resume?",
      answer: "You can include Personal Information, Education, Work Experience, Skills, Projects, Certificates, Achievements, Awards, Career Goals, and Hobbies & Interests."
    },
    {
      question: "Is the resume builder mobile-friendly?",
      answer: "Yes, our resume builder is fully responsive and works on all devices including smartphones and tablets."
    },
    {
      question: "Can I see how my resume will look while I'm creating it?",
      answer: "Yes, there's a real-time preview feature that shows exactly how your resume will look as you add or edit information."
    },
    {
      question: "How do I organize my resume sections?",
      answer: "Each section can be expanded or collapsed for easy organization. Simply click on the section headers to manage your content efficiently."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about using our Resume Analyzer
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
