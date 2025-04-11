import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  return (
    <div className='p-6'>
      <h1 className="text-2xl font-extrabold uppercase mb-4">Welcome back!</h1>
      <h3 className="text-2xl font-medium mb-4 mt-4">Builders</h3>
      <div className="grid grid-cols-3 gap-6">
        <Link to="/resume-builder"><div className="p-4 bg-blue-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Resume Builder</div></Link>
        <Link to="/cv-builder"><div className="p-4 bg-blue-200 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">CV Builder</div></Link>
        <Link to="/coverletter-builder"><div className="p-4 bg-yellow-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Cover Letter Builder</div></Link>
      </div>
      <h3 className="text-2xl font-medium mb-4 mt-4">Resume</h3>
      <div className="grid grid-cols-3 gap-6">
        {/* <Link to="/resume-builder"><div className="p-4 bg-blue-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Resume Builder</div></Link> */}
        <Link to="/templates-gallery"><div className="p-4 bg-blue-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Templates Gallery</div></Link>
        <Link to="/resume-analizer"><div className="p-4 bg-blue-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Resume Anylizer</div></Link>
      </div>
      <h3 className="text-2xl font-medium mb-4 mt-4">CV</h3>
      <div className="grid grid-cols-3 gap-6">
        {/* <Link to="/cv-builder"><div className="p-4 bg-blue-200 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">CV Builder</div></Link> */}
        <Link to="/templates-gallery"><div className="p-4 bg-blue-200 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Templates Gallery</div></Link>
      </div>
      <h3 className="text-2xl font-medium mb-4 mt-4">Cover Letter</h3>
      <div className="grid grid-cols-3 gap-6">
        {/* <Link to="/coverletter-builder"><div className="p-4 bg-yellow-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Cover Letter Builder</div></Link> */}
        <Link to="/templates-gallery"><div className="p-4 bg-yellow-100 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Templates Gallery</div></Link>
      </div>
      <h3 className="text-2xl font-medium mb-4 mt-4">Other</h3>
      <div className="grid grid-cols-3 gap-6">
        <Link to="/feedback"><div className="p-4 bg-green-200 rounded-lg shadow-md transition transform hover:scale-90 hover:shadow-md">Feedback</div></Link>
      </div>
    </div>
  )
}

export default DashboardHome
