import React from 'react'
import {Link} from 'react-router-dom'

const DashboardHome = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
        <div className="grid grid-cols-3 gap-6">
          <Link to="/ResumeBuilder"><div className="p-4 bg-blue-100 rounded-lg shadow-md">Resume Builder</div></Link>
          <Link to="/CoverLetterBuilder"><div className="p-4 bg-yellow-100 rounded-lg shadow-md">Cover Letter Builder</div></Link>
          <Link to="/ResumeAnalizer"><div className="p-4 bg-green-100 rounded-lg shadow-md">Resume Anylizer</div></Link>
        </div>
      </div>
  )
}

export default DashboardHome
