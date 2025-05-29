import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ATSTemplate = ({ resumeData }) => {
  const { personalInfo, workExperience, education, skills, projects, certificates, achievements } = resumeData;

  return (
    <div className="bg-white p-8 max-w-[850px] mx-auto font-sans">
      {/* Header/Contact Info */}
      <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h1>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {personalInfo?.email && (
            <div className="flex items-center">
              <FaEnvelope className="w-4 h-4 mr-2 text-gray-600" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo?.phone && (
            <div className="flex items-center">
              <FaPhone className="w-4 h-4 mr-2 text-gray-600" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo?.address && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-600" />
              <span>{personalInfo.address}</span>
            </div>
          )}
          {personalInfo?.linkedin && (
            <div className="flex items-center">
              <FaLinkedin className="w-4 h-4 mr-2 text-gray-600" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </header>

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Work Experience</h2>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{exp.jobTitle}</h3>
              <div className="text-gray-600">
                {exp.companyName} | {exp.startDate} - {exp.isPresent ? 'Present' : exp.endDate}
              </div>
              <p className="mt-2 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold">{edu.degree}</h3>
              <div className="text-gray-600">
                {edu.institution} | {edu.startDate} - {edu.isPresent ? 'Present' : edu.endDate}
              </div>
              {edu.description && <p className="mt-1">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                {skill.name} {skill.proficiency && `(${skill.proficiency})`}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold">{project.name}</h3>
              {project.technologies && (
                <div className="text-gray-600 text-sm">{project.technologies}</div>
              )}
              <p className="mt-1">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certificates?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Certifications</h2>
          {certificates.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="font-bold">{cert.name}</div>
              <div className="text-gray-600 text-sm">
                {cert.issuer} {cert.issueDate && `• ${cert.issueDate}`}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ATSTemplate;
