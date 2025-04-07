import React from 'react';
import { FaShieldAlt, FaUserLock, FaCookie, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: April 2024</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our Resume Analyzer service.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaUserLock className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Data Collection</h2>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Information we collect:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Personal information (name, email, contact details)</li>
                <li>Education history</li>
                <li>Work experience</li>
                <li>Skills and certifications</li>
                <li>Project details</li>
              </ul>
              <p className="text-gray-600">
                All data is processed locally in your browser and is not permanently stored on our servers.
              </p>
            </div>
          </section>

          {/* Cookie Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaCookie className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Cookie Policy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We use essential cookies to ensure the basic functionality of our service. 
              These cookies do not track your browsing activity across other sites.
            </p>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <div className="space-y-3 text-gray-600">
              <p>Your data is used exclusively for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Generating your resume</li>
                <li>Providing AI-powered suggestions</li>
                <li>Improving our service</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <p className="text-gray-600">
              If you have any questions about our privacy policy, please contact us at:{' '}
              <a href="mailto:privacy@resumeanalyzer.com" className="text-blue-600">privacy@resumeanalyzer.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy