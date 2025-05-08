import React, { useState } from 'react'
import PersonalInformation from '../components/coverletter/PersonalInformation'
import Recipient from '../components/coverletter/Recipient'
import DateAndSubject from '../components/coverletter/DateAndSubject'
import Introduction from '../components/coverletter/Introduction'
import CurrentSituation from '../components/coverletter/CurrentSituation'
import Motivation from '../components/coverletter/Motivation'
import Closing from '../components/coverletter/Closing'
import CoverLetterPreview from '../components/coverletter/CoverLetterPreview'
import PreviewToolbar from '../components/PreviewToolbar'
import { CoverLetterProvider } from '../context/CoverLetterContext'

const CoverLetterBuilder = () => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <CoverLetterProvider>
      <div className="p-4 md:p-6 flex flex-col lg:flex-row">
        {/* Form Section - Hide when isFullView is true */}
        {!isFullView && (
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
        )}
        
        {/* Divider - Show only when not in full view */}
        {!isFullView && (
          <div className="hidden lg:block border-r border-gray-300 mx-6"></div>
        )}
        
        {/* Preview Section with Toolbar */}
        <div className={`w-full ${!isFullView ? 'lg:w-1/2' : ''} flex flex-col`}>
          <div className="flex-1 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Cover Letter Preview</h1>
            <CoverLetterPreview />
          </div>

          {/* ToolBar */}
          <PreviewToolbar 
            documentType="coverletter"
            isFullView={isFullView}
            onViewToggle={() => setIsFullView(!isFullView)}
          />
        </div>
      </div>
    </CoverLetterProvider>
  );
};

export default CoverLetterBuilder
