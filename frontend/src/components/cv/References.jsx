import React, { useState, useEffect } from 'react';
import { FaUserFriends, FaTrash } from 'react-icons/fa';
import { getAiSuggestions } from '../../utils/aiService';
import { useCV } from '../../context/CVContext';

const References = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [references, setReferences] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load existing references from context
  useEffect(() => {
    if (CVData.references) {
      setReferences(CVData.references);
    }
  }, [CVData.references]);

  const handleAddReference = (e) => {
    e.preventDefault();
    if (name && position) {
      const newReference = {
        id: Date.now(),
        name,
        position,
        company,
        email,
        phone,
      };
      const updatedReferences = [...references, newReference];
      setReferences(updatedReferences);
      // Update context
      updateCVData('references', updatedReferences);
      // Reset form
      setName('');
      setPosition('');
      setCompany('');
      setEmail('');
      setPhone('');
    }
  };

  const handleDeleteReference = (referenceId) => {
    const updatedReferences = references.filter(ref => ref.id !== referenceId);
    setReferences(updatedReferences);
    // Update context
    updateCVData('references', updatedReferences);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaUserFriends className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">References</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing References List */}
          {references.length > 0 && (
            <div className="space-y-2">
              {references.map(reference => (
                <div
                  key={reference.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{reference.name}</h3>
                    <p className="text-sm text-purple-600">{reference.position}</p>
                    <p className="text-sm text-gray-600">{reference.company}</p>
                    <p className="text-sm text-gray-500">
                      {reference.email && `Email: ${reference.email}`}
                      {reference.email && reference.phone && ' | '}
                      {reference.phone && `Phone: ${reference.phone}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteReference(reference.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Reference Form */}
          <form
            onSubmit={handleAddReference}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Position"
                  className="w-full p-2 border rounded"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 border rounded"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border rounded"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Reference
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default References;