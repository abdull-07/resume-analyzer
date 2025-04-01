// Privacy Policy & Terms Section

import React from 'react'
import { Link } from "react-router-dom";

const PTS = () => {
  return (
    <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Privacy Policy & Terms</h2>
      <p className="text-gray-700 mb-8">
        We value your privacy and transparency. Please read our <strong>Privacy Policy</strong> and <strong>Terms of Service</strong> to understand how we handle your data.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Link to="/privacy-policy" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Read Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition">
          Read Terms of Service
        </Link>
      </div>
    </div>
  </section>
  )
}

export default PTS
