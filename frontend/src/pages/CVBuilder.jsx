import React from 'react'
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
import { CVProvider } from '../context/CVContext'

const CVBuilder = () => {
  return (
    <CVProvider>
      <div className="flex flex-col lg:flex-row p-4 md:p-6">
        {/* Form Section */}
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

        {/* Divider - Horizontal on mobile, Vertical on desktop */}
        <div className="border-b border-gray-300 my-4 lg:border-r lg:border-b-0 lg:mx-6 lg:my-0"></div>

        {/* Preview Section */}
        <div className='w-full lg:w-1/2 lg:pl-6'>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">CV Preview</h1>
          <CVPreview />
        </div>
      </div>
    </CVProvider>
  )
}

export default CVBuilder