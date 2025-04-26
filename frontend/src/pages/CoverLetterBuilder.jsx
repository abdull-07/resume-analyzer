import React from 'react'

import PersonalInformation from '../components/coverletter/PersonalInformation'
import Recipient from '../components/coverletter/Recipient'
import DateAndSubject from '../components/coverletter/DateAndSubject'
import Introduction from '../components/coverletter/Introduction'
import CurrentSituation from '../components/coverletter/CurrentSituation'
import Motivation from '../components/coverletter/Motivation'
import Closing from '../components/coverletter/Closing'

import CoverLetterPreview from '../components/coverletter/CoverLetterPreview'

import { CoverLetterProvider } from '../context/CoverLetterContext'

const CoverLetterBuilder = () => {
  return (
    <CoverLetterProvider>
      <div className="p-4 md:p-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Cover Letter Builder</h1>
          <div className="space-y-6">
            <PersonalInformation />
            <Recipient />
            <DateAndSubject />
            <Introduction />
            <CurrentSituation />
            <Motivation />
            <Closing />
          </div>
        </div>
        
        <div className="hidden lg:block border-r border-gray-300 mx-6"></div>
        
        <div className='w-full lg:w-1/2'>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Cover Letter Preview</h1>
          <div className="sticky top-6">
            <CoverLetterPreview />
          </div>
        </div>
      </div>
    </CoverLetterProvider>
  );
};

export default CoverLetterBuilder
