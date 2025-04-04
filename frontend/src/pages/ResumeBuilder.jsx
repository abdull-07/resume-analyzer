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

const ResumeBuilder = () => {
  return (
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
      <div className="border rounded-full ml-5 mr-5"></div>
      <div className='w-1/2'>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Resume Preview</h1>
      </div>
    </div>
  )
}

export default ResumeBuilder
