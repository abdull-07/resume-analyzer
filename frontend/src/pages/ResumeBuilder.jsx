import React from 'react'
import PersonalInformation from '../components/resume/PersonalInformation'
import Education from '../components/resume/Education'
import WorkExperience from '../components/resume/WorkExperience'
import Skill from '../components/resume/Skill'
import Projects from '../components/resume/Projects'
import Hobbies from '../components/resume/Hobbies'
import Certificate from '../components/resume/Certificate'
import Achievements from '../components/resume/Achievements'
import Awards from '../components/resume/Awards'
import Goals from '../components/resume/Goals'
import ResumePreview from '../components/resume/ResumePreview'
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
        <div className="border-r border-gray-500 mx-6"></div>
        <div className='w-1/2'>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Resume Preview</h1>
          <ResumePreview />
        </div>
      </div>
    </ResumeProvider>
  )
}

export default ResumeBuilder
