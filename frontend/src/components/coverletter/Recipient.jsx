import React, { useState, useEffect } from 'react';
import { FaRegAddressCard, FaUser, FaBuilding, FaMapMarkerAlt, FaMailBulk, FaCity } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const Recipient = () => {
  const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    contactPerson: '',
    organization: '',
    address: '',
    postCode: '',
    city: ''
  });

  // Load existing data from context when component mounts
  useEffect(() => {
    if (CoverLetterData.recipient) {
      setFormData(prevData => ({
        ...prevData,
        ...CoverLetterData.recipient
      }));
    }
  }, [CoverLetterData.recipient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCoverLetterData('recipient', formData);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaRegAddressCard className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Recipient</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 p-4 border rounded-lg bg-gray-50">
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="pl-10 w-full p-2 border rounded"
                placeholder="Contact Person"
                required
              />
            </div>
          </div>

          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding className="text-gray-400" />
              </div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="pl-10 w-full p-2 border rounded"
                placeholder="Organization Name"
                required
              />
            </div>
          </div>

          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="pl-10 w-full p-2 border rounded"
                placeholder="Street Address"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMailBulk className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="postCode"
                  value={formData.postCode}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded"
                  placeholder="Post Code"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCity className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded"
                  placeholder="City"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Save Recipient Information
          </button>
        </form>
      )}
    </div>
  );
};

export default Recipient;