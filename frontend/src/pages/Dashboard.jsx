import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHome from '../components/DashboardHome'
import MyResumes from '../components/documents/MyResumes'
import MyCVs from '../components/documents/MyCvs'
import MyCoverLetters from '../components/documents/MyCoverLetters'

function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeDocType, setActiveDocType] = useState("resumes");

  const documentTabs = [
    { id: 'resumes', label: 'Resumes' },
    { id: 'cvs', label: 'CVs' },
    { id: 'coverletters', label: 'Cover Letters' }
  ];

  return (
    <div className="flex">
      <Sidebar 
        setActiveSection={setActiveSection}
        setActiveDocType={setActiveDocType}
        activeSection={activeSection}
        activeDocType={activeDocType}
      />
      <main className="flex-1 p-6">
        {activeSection === "home" && <DashboardHome />}
        {activeSection === "documents" && (
          <div className="space-y-6">
            {/* Document Type Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {documentTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDocType(tab.id)}
                    className={`
                      py-4 px-6 font-medium text-sm border-b-2 transition-colors
                      ${activeDocType === tab.id 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Document Components */}
            {activeDocType === 'resumes' && <MyResumes />}
            {activeDocType === 'cvs' && <MyCVs />}
            {activeDocType === 'coverletters' && <MyCoverLetters />}
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
