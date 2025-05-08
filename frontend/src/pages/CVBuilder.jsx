import React, { useState } from 'react'
import PersonalInformation from '../components/cv/PersonalInformation'
import WorkExperience from '../components/cv/WorkExperience'
import ProfessionalSummary from '../components/cv/ProfessionalSummary'
import Education from '../components/cv/Education'
import Skill from '../components/cv/Skill'
import Certificate from '../components/cv/Certificate'
import Projects from '../components/cv/Projects'
import References from '../components/cv/References'
import Languages from '../components/cv/Languages'
import Hobbies from '../components/cv/Hobbies'
import Achievements from '../components/cv/Achievements'
import Awards from '../components/cv/Awards'
import Publications from '../components/cv/Publications'
import VolunteerExperience from '../components/cv/VolunteerExperience'
import CVPreview from '../components/cv/CVPreview'
import PreviewToolbar from '../components/PreviewToolbar'
import { CVProvider } from '../context/CVContext'

const CVBuilder = () => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <CVProvider>
      <div className="p-4 md:p-6 flex flex-col lg:flex-row">
        {/* Form Section - Hide when isFullView is true */}
        {!isFullView && (
          <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">CV Builder</h1>
            <div className="space-y-4 md:space-y-6">
              <PersonalInformation />
              <WorkExperience />
              <ProfessionalSummary />
              <Education />
              <Skill />
              <Certificate />
              <Projects />
              <References />
              <Languages />
              <Hobbies />
              <Achievements />
              <Awards />
              <Publications />
              <VolunteerExperience />
            </div>
          </div>
        )}

        {/* Divider - Show only when not in full view */}
        {!isFullView && (
          <div className="border-b border-gray-300 my-4 lg:border-r lg:border-b-0 lg:mx-6 lg:my-0"></div>
        )}

        {/* Preview Section with Toolbar */}
        <div className={`w-full ${!isFullView ? 'lg:w-1/2 lg:pl-6' : ''} flex flex-col`}>
          <div className="flex-1 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">CV Preview</h1>
            <CVPreview />
          </div>

          {/* ToolBar */}
          <PreviewToolbar 
            documentType="cv"
            isFullView={isFullView}
            onViewToggle={() => setIsFullView(!isFullView)}
          />
        </div>
      </div>
    </CVProvider>
  );
};

export default CVBuilder