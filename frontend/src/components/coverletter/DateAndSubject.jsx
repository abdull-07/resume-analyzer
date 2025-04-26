import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useCoverLetter } from '../../context/CoverLetterContext';

const DateAndSubject = () => {
  const { CoverLetterData, updateCoverLetterData } = useCoverLetter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    city: '',
    subject: '', // Add this line
    applicationType: '',
    desiredPosition: ''
  });

  useEffect(() => {
    if (CoverLetterData.dateAndSubject) {
      setFormData(prevData => ({
        ...prevData,
        ...CoverLetterData.dateAndSubject
      }));
    }
  }, [CoverLetterData.dateAndSubject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCoverLetterData('dateAndSubject', formData);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Date and Subject</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 p-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="pl-3 w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                  placeholder="City"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                placeholder="Subject (e.g., Application for [Position] at [Company])"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500 bg-white"
                required
              >
                <option value="">Select Application Type</option>
                <option value="openApplication">Open application</option>
                <option value="application">Application</option>
              </select>
            </div>
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="desiredPosition"
                  value={formData.desiredPosition}
                  onChange={handleChange}
                  className="pl-3 w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                  placeholder="Desired Position"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Save Date and Subject
          </button>
        </form>
      )}
    </div>
  );
};

export default DateAndSubject;