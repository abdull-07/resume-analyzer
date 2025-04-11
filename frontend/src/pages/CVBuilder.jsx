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
      <div className="flex p-6">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">CV Builder</h1>
          <div className="space-y-6">
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
        <div className="border-r border-gray-500 mx-6"></div>
        <div className='w-1/2'>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Resume Preview</h1>
          <CVPreview />
        </div>
      </div>
    </CVProvider>
  )
}

export default CVBuilder
