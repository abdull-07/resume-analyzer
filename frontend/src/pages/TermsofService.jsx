import React from 'react';
import { FaGavel, FaUserShield, FaExclamationTriangle, FaCopyright } from 'react-icons/fa';

const TermsofService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: April 2024</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Agreement */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Resume Analyzer, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          {/* Usage Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Usage Rights</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">You are permitted to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Create and edit your resume</li>
                <li>Download your resume in available formats</li>
                <li>Use AI-powered suggestions for your content</li>
                <li>Access your resume from any device</li>
              </ul>
            </div>
          </section>

          {/* Restrictions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Restrictions</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Share inappropriate or false information</li>
                <li>Violate any intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FaCopyright className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-semibold">Copyright and Ownership</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The Resume Analyzer service, including its original content, features, and functionality, 
              is owned by us and is protected by international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend access to our service immediately, 
              without prior notice or liability, for any reason whatsoever, including without 
              limitation if you breach the Terms of Service.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            By using Resume Analyzer, you acknowledge that you have read and agree to these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsofService;