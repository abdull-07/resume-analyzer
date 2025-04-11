import React, { useState, useEffect } from 'react';
import { FaCertificate, FaTrash } from 'react-icons/fa';
import { useCV } from '../../context/CVContext';

const Certificate = () => {
  const { CVData, updateCVData } = useCV();
  const [isOpen, setIsOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [certName, setCertName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certUrl, setCertUrl] = useState('');

  useEffect(() => {
    if (CVData.certificates) {
      setCertificates(CVData.certificates);
    }
  }, [CVData.certificates]);

  const handleAddCertificate = (e) => {
    e.preventDefault();
    if (certName.trim() && issuer.trim()) {
      const newCertificate = {
        id: Date.now(),
        name: certName.trim(),
        issuer: issuer.trim(),
        issueDate,
        url: certUrl.trim()
      };
      const updatedCertificates = [...certificates, newCertificate];
      setCertificates(updatedCertificates);
      updateCVData('certificates', updatedCertificates);
      // Reset form
      setCertName('');
      setIssuer('');
      setIssueDate('');
      setCertUrl('');
    }
  };

  const handleDeleteCertificate = (certId) => {
    const updatedCertificates = certificates.filter(cert => cert.id !== certId);
    setCertificates(updatedCertificates);
    updateCVData('certificates', updatedCertificates);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div
        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaCertificate className="text-gray-600 text-4xl" />
          <h2 className="text-lg font-semibold">Certifications</h2>
        </div>
        <span className="text-gray-600 text-lg">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Existing Certificates List */}
          {certificates.length > 0 && (
            <div className="space-y-2">
              {certificates.map(cert => (
                <div
                  key={cert.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-purple-600">{cert.issuer}</p>
                    {cert.issueDate && (
                      <p className="text-sm text-gray-600">Issued: {cert.issueDate}</p>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteCertificate(cert.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add New Certificate Form */}
          <form
            onSubmit={handleAddCertificate}
            className="space-y-4 p-4 border rounded-lg bg-gray-50"
          >
            <div>
              <input
                type="text"
                placeholder="Certificate Name"
                className="w-full p-2 border rounded"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Issuing Organization"
                className="w-full p-2 border rounded"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Issue Date
                </label>
                <input
                  type="month"
                  className="w-full p-2 border rounded"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Certificate URL (Optional)
                </label>
                <input
                  type="url"
                  className="w-full p-2 border rounded"
                  placeholder="https://..."
                  value={certUrl}
                  onChange={(e) => setCertUrl(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-purple-500 text-white rounded"
            >
              + Add Certificate
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Certificate;