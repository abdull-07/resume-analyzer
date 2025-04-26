import React from 'react';
import { useCoverLetter } from '../../context/CoverLetterContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGlobe, FaUser, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const CoverLetterPreview = () => {
  const { CoverLetterData } = useCoverLetter();
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 min-h-screen">
      {/* Personal Information */}
      {CoverLetterData.personalInfo && Object.keys(CoverLetterData.personalInfo).length > 0 && (
        <div className="border-b-2 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {CoverLetterData.personalInfo.firstName} {CoverLetterData.personalInfo.lastName}
          </h1>
          <div className="text-gray-600 mt-2 space-y-1">
            {CoverLetterData.personalInfo.email && (
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span>{CoverLetterData.personalInfo.email}</span>
              </div>
            )}
            {CoverLetterData.personalInfo.phone && (
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                <span>{CoverLetterData.personalInfo.phone}</span>
              </div>
            )}
            {CoverLetterData.personalInfo.address && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                <span>{CoverLetterData.personalInfo.address}</span>
              </div>
            )}
            {CoverLetterData.personalInfo.linkedin && (
              <div className="flex items-center">
                <FaLinkedin className="w-4 h-4 mr-2" />
                <a href={CoverLetterData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            {CoverLetterData.personalInfo.website && (
              <div className="flex items-center">
                <FaGlobe className="w-4 h-4 mr-2" />
                <a href={CoverLetterData.personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Portfolio Website
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Recipient */}
      {CoverLetterData.recipient && Object.keys(CoverLetterData.recipient).length > 0 && (
        <div className="mb-6">
          <div className="space-y-2">
            {CoverLetterData.recipient.contactPerson && (
              <div className="flex items-center">
                <FaUser className="w-4 h-4 mr-2 text-gray-600" />
                <span className="font-medium">{CoverLetterData.recipient.contactPerson}</span>
              </div>
            )}
            {CoverLetterData.recipient.organization && (
              <div className="flex items-center">
                <FaBuilding className="w-4 h-4 mr-2 text-gray-600" />
                <span>{CoverLetterData.recipient.organization}</span>
              </div>
            )}
            {CoverLetterData.recipient.address && (
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1 text-gray-600" />
                <div>
                  <p>{CoverLetterData.recipient.address}</p>
                  <p>{CoverLetterData.recipient.postCode} {CoverLetterData.recipient.city}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Date and Subject */}
      {CoverLetterData.dateAndSubject && (
        <div className="mb-6 space-y-4">
          {CoverLetterData.dateAndSubject.date && (
            <div className="flex items-center text-gray-600">
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              <span>{formatDate(CoverLetterData.dateAndSubject.date)}</span>
            </div>
          )}
          {CoverLetterData.dateAndSubject.subject && (
            <div className="font-medium text-gray-800">
              <span className="text-gray-600">Subject: </span>
              {CoverLetterData.dateAndSubject.subject}
            </div>
          )}
        </div>
      )}
      

      {/* Introduction */}
      {CoverLetterData.letterType && (
        <div className="mb-6">
          <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {CoverLetterData.letterType.content}
          </div>
        </div>
      )}

      {/* Current Section */}
      {CoverLetterData.currentSituation && (
        <div className="mb-6">
          <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {CoverLetterData.currentSituation.content}
          </div>
        </div>
      )}

      {/* Mortivation */}
      {CoverLetterData.motivation && (
        <div className="mb-6">
          <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {CoverLetterData.motivation.content}
          </div>
        </div>
      )}

      {/* Closing */}
      {CoverLetterData.closing && (
        <div className="mb-6">
          <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {CoverLetterData.closing.content}
          </div>
          {CoverLetterData.personalInfo && (
            <div className="mt-8 font-semibold">
              {CoverLetterData.personalInfo.firstName}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default CoverLetterPreview;