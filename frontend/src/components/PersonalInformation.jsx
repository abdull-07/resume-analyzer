import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGlobe } from 'react-icons/fa';

const PersonalInformation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full cursor-pointer">
      <div 
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaUser className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <form className="mt-4 space-y-4 p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center space-x-3">
            {/* <FaUser className="text-gray-500" /> */}
            <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
          </div>
          <div className="flex items-center space-x-3">
            {/* <FaEnvelope className="text-gray-500" /> */}
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
          </div>
          <div className="flex items-center space-x-3">
            <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
            {/* <FaMapMarkerAlt className="text-gray-500" /> */}
          </div>
          <div className="flex items-center space-x-3">
            {/* <FaLinkedin className="text-gray-500" /> */}
            <input type="url" placeholder="LinkedIn Profile" className="w-full p-2 border rounded" />
            <input type="url" placeholder="Portfolio Website" className="w-full p-2 border rounded" />
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalInformation;
