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
      <div className="p-4 md:p-6 flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">Resume Builder</h1>
          <div className="space-y-4 md:space-y-6">
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

        {/* Divider - Horizontal on mobile, Vertical on desktop */}
        <div className="border-b border-gray-300 my-4 lg:border-r lg:border-b-0 lg:mx-6 lg:my-0"></div>

        {/* Preview Section */}
        <div className='w-full lg:w-1/2 lg:pl-6'>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">Resume Preview</h1>
          <ResumePreview />
        </div>
      </div>
    </ResumeProvider>
  )
}

export default ResumeBuilder