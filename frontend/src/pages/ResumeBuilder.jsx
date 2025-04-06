import React from 'react'
import PersonalInformation from '../components/PersonalInformation'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Hobbies from '../components/Hobbies'
import Certificate from '../components/Certificate'
import Achievements from '../components/Achievements'
import Awards from '../components/Awards'
import Goals from '../components/Goals'
import ResumePreview from '../components/ResumePreview'
import { ResumeProvider } from '../context/ResumeContext'

const ResumeBuilder = () => {
  return (
    <ResumeProvider>
      <div className="p-6 flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Resume Builder</h1>
          <div className="space-y-6">
            <PersonalInformation />
            <Education />
            <WorkExperience/>
            <Skill/>
            <Projects/>
            <Certificate/>
            <Hobbies/>
            <Achievements/>
            <Awards/>
            <Goals/>
          </div>
        </div>
        <div className="border-r border-gray-200 mx-6"></div>
        <div className='w-1/2'>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Resume Preview</h1>
          <ResumePreview />
        </div>
      </div>
    </ResumeProvider>
  )
}

export default ResumeBuilder
