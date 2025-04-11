import React from 'react';
import { useCV } from '../../context/CVContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGlobe } from 'react-icons/fa';

const CVPreview = () => {
  const { CVData = {} } = useCV();
  const {
    personalInfo = {},
    professionalSummary = '',
    workExperience = [],
    education = [],
    skills = [],
    projects = [],
    languages = [],
    publications = [],
    certificates = [],
    awards = [],
    achievements = [],
    references = [],
    volunteerExperience = [],
    hobbies = [],
    goals = []
  } = CVData;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 min-h-screen">
      {/* Personal Information */}
      {personalInfo && Object.keys(personalInfo).length > 0 && (
        <div className="border-b-2 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div className="text-gray-600 mt-2 space-y-1">
            {personalInfo.email && (
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.address && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                <span>{personalInfo.address}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center">
                <FaLinkedin className="w-4 h-4 mr-2" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center">
                <FaGlobe className="w-4 h-4 mr-2" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Portfolio Website
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Professional Summary */}
      {professionalSummary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Professional Summary</h2>
          <p className="text-gray-700">{professionalSummary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Work Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id || Date.now()} className="mb-4">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600">{exp.companyName}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Education</h2>
          {education.map((edu) => (
            <div key={edu.id || Date.now()} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang.id || Date.now()} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {lang.name} {lang.proficiency && `• ${lang.proficiency}`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.id || Date.now()} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {skill.name} {skill.proficiency && `• ${skill.proficiency}`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Projects</h2>
          {projects.map((project) => (
            <div key={project.id || Date.now()} className="mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              {project.technologies && <p className="text-gray-600">{project.technologies}</p>}
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

      {/* Publications */}
      {publications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Publications</h2>
          {publications.map((pub) => (
            <div key={pub.id || Date.now()} className="mb-4">
              <h3 className="font-semibold">{pub.title}</h3>
              <p className="text-sm text-purple-600">{pub.authors}</p>
              <p className="text-gray-600">
                {pub.publisher} {pub.date && `• ${pub.date}`}
              </p>
              {pub.url && (
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  View Publication
                </a>
              )}
              {pub.description && <p className="mt-2 text-sm">{pub.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Certifications</h2>
          {certificates.map((cert) => (
            <div key={cert.id || Date.now()} className="mb-2">
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="text-gray-600">
                {cert.issuer} {cert.issueDate && `• ${cert.issueDate}`}
              </p>
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
      {(awards.length > 0 || achievements.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Awards & Achievements</h2>
          {awards.map((award) => (
            <div key={award.id || Date.now()} className="mb-2">
              <p className="font-medium">{award.title}</p>
              <p className="text-sm text-gray-600">
                {award.issuer} {award.date && `• ${award.date}`}
              </p>
            </div>
          ))}
          {achievements.map((achievement) => (
            <div key={achievement.id || Date.now()} className="mb-2">
              <p className="font-medium">{achievement.title}</p>
              {achievement.date && <p className="text-sm text-gray-600">{achievement.date}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Volunteer Experience */}
      {volunteerExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Volunteer Experience</h2>
          {volunteerExperience.map((exp) => (
            <div key={exp.id || Date.now()} className="mb-4">
              <h3 className="font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.organization}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm text-gray-500">
                {exp.city}, {exp.country}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Hobbies & Interests */}
      {hobbies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span key={hobby.id || Date.now()} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {hobby.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Goals Section */}
      {goals.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">Career Goals</h2>
          <div className="space-y-2">
            {/* Short Term Goals */}
            {goals.filter(goal => goal.type === 'Short Term').length > 0 && (
              <div className="mb-3">
                <h3 className="font-semibold text-gray-700">Short Term Goals</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {goals
                    .filter(goal => goal.type === 'Short Term')
                    .map((goal) => (
                      <li key={goal.id || Date.now()} className="text-gray-600">
                        {goal.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Long Term Goals */}
            {goals.filter(goal => goal.type === 'Long Term').length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700">Long Term Goals</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {goals
                    .filter(goal => goal.type === 'Long Term')
                    .map((goal) => (
                      <li key={goal.id || Date.now()} className="text-gray-600">
                        {goal.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* References */}
      {references.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref) => (
              <div key={ref.id || Date.now()} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{ref.name}</h3>
                <p className="text-purple-600">{ref.position}</p>
                <p className="text-gray-600">{ref.company}</p>
                {ref.email && (
                  <p className="text-sm">
                    <span className="text-gray-500">Email: </span>
                    {ref.email}
                  </p>
                )}
                {ref.phone && (
                  <p className="text-sm">
                    <span className="text-gray-500">Phone: </span>
                    {ref.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CVPreview;