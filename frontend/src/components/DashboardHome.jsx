import React from 'react'
import { Link } from 'react-router-dom'
import { FiFileText, FiFilePlus, FiSearch, FiLinkedin, FiEdit, FiLayers, FiMail, FiHelpCircle, FiAward, FiBriefcase} from 'react-icons/fi'

const DashboardHome = () => {
  const CardContainer = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {children}
    </div>
  );

  const Card = ({ to, bgColor, icon, title, description }) => (
    <Link to={to}>
      <div className={`p-4 ${bgColor} rounded-lg shadow-md transition transform hover:scale-95 hover:shadow-lg w-full text-center font-medium text-gray-700`}>
        <div className="flex flex-col items-center">
          <div className="text-2xl mb-2">{icon}</div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  )

  return (
    <div className='p-4 sm:p-6'>
      <h1 className="text-xl sm:text-2xl font-extrabold uppercase mb-4">Welcome back!</h1>

      {/* <section className="mb-8">
        <h3 className="text-lg sm:text-2xl font-medium mb-4">Import</h3>
        <CardContainer>
          <Card to="#" bgColor="bg-green-200" icon={<FiFileText />} title="PDF Import" description="Give your old resume a makeover"/>
          <Card to="#" bgColor="bg-green-200" icon={<FiLinkedin />} title="LinkedIn Import" description="Import your LinkedIn profile"/>
        </CardContainer>
      </section> */}

      <section className="mb-8">
        <h3 className="text-lg sm:text-2xl font-medium mb-4">Resume</h3>
        <CardContainer>
          <Card to="/resume-builder" bgColor="bg-blue-100" icon={<FiEdit />} title="Resume Builder" description="Create and edit your resumes"/>
          <Card to="/templates-gallery" bgColor="bg-blue-100" icon={<FiLayers />} title="Templates Gallery" description="Professional resume templates"/>
          <Card to="/resume-analizer" bgColor="bg-blue-100" icon={<FiSearch />} title="Resume Analyzer" description="Check your resume for issues"/>
        </CardContainer>
      </section>

      <section className="mb-8">
        <h3 className="text-lg sm:text-2xl font-medium mb-4">CV</h3>
        <CardContainer>
          <Card to="/cv-builder" bgColor="bg-blue-200" icon={<FiFilePlus />} title="CV Builder" description="Create comprehensive CVs"/>
          <Card to="/templates-gallery" bgColor="bg-blue-200" icon={<FiLayers />} title="Templates Gallery" description="Academic CV templates"/>
        </CardContainer>
      </section>

      <section className="mb-8">
        <h3 className="text-lg sm:text-2xl font-medium mb-4">Cover Letter</h3>
        <CardContainer>
          <Card to="/coverletter-builder" bgColor="bg-yellow-100" icon={<FiMail />} title="Cover Letter Builder" description="Create and edit your cover letters" />
          <Card to="/templates-gallery" bgColor="bg-yellow-100" icon={<FiLayers />} title="Templates Gallery" description="Professional letter templates" />
        </CardContainer>
      </section>

      <section className="mb-8">
        <h3 className="text-lg sm:text-2xl font-medium mb-4">Other</h3>
        <CardContainer>
          <Card to="/feedback" bgColor="bg-green-200" icon={<FiAward />} title="Resume Feedback" description="Improve your resume with AI"/>
          <Card to="#" bgColor="bg-green-200" icon={<FiHelpCircle />} title="Interview Questions" description="Prepare for your next interview"/>
          <Card to="#" bgColor="bg-green-200" icon={<FiBriefcase />} title="Jobs" description="Find the best Job according to your Skills"/>
        </CardContainer>
      </section>
    </div>
  )
}

export default DashboardHome
