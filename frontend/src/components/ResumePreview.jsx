import React from 'react';
import { useResume } from '../context/ResumeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGlobe } from 'react-icons/fa';

const ResumePreview = () => {
  const { resumeData } = useResume();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 min-h-screen">
      {/* Personal Information */}
      {resumeData.personalInfo && Object.keys(resumeData.personalInfo).length > 0 && (
        <div className="border-b-2 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
          </h1>
          <div className="text-gray-600 mt-2 space-y-1">
            {resumeData.personalInfo.email && (
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.address && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                <span>{resumeData.personalInfo.address}</span>
              </div>
            )}
            {resumeData.personalInfo.linkedin && (
              <div className="flex items-center">
                <FaLinkedin className="w-4 h-4 mr-2" />
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            {resumeData.personalInfo.website && (
              <div className="flex items-center">
                <FaGlobe className="w-4 h-4 mr-2" />
                <a href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Portfolio Website
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Work Experience */}
      {resumeData.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Work Experience</h2>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600">{exp.companyName}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.isPresent ? 'Present' : exp.endDate}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.isPresent ? 'Present' : edu.endDate}
              </p>
              <p className="mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {skill.name} • {skill.proficiency}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Projects</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.technologies}</p>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  Project Link
                </a>
              )}
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certificates */}
      {resumeData.certificates.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Certifications</h2>
          {resumeData.certificates.map((cert, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer} • {cert.issueDate}</p>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Awards & Achievements */}
      {(resumeData.awards.length > 0 || resumeData.achievements.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Awards & Achievements</h2>
          {resumeData.awards.map((award, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{award.title}</p>
              <p className="text-sm text-gray-600">{award.issuer} • {award.date}</p>
            </div>
          ))}
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.date}</p>
            </div>
          ))}
        </div>
      )}

      {/* Hobbies & Interests */}
      {resumeData.hobbies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.hobbies.map((hobby, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {hobby.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Goals Section */}
      {resumeData.goals && resumeData.goals.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Career Goals</h2>
          <div className="space-y-2">
            {/* Short Term Goals */}
            {resumeData.goals.filter(goal => goal.type === 'Short Term').length > 0 && (
              <div className="mb-3">
                <h3 className="font-semibold text-gray-700">Short Term Goals</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {resumeData.goals
                    .filter(goal => goal.type === 'Short Term')
                    .map(goal => (
                      <li key={goal.id} className="text-gray-600">
                        {goal.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Long Term Goals */}
            {resumeData.goals.filter(goal => goal.type === 'Long Term').length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700">Long Term Goals</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {resumeData.goals
                    .filter(goal => goal.type === 'Long Term')
                    .map(goal => (
                      <li key={goal.id} className="text-gray-600">
                        {goal.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;