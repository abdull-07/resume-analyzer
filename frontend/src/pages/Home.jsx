import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import React from 'react'

const Home = () => {
  return (
    <>
      {/* -------------------------------------------------------------------- Heoor Section -------------------------------------------------------------------- */}
      {/* <div className="py-6 text-3xl font-bold text-blue-600 h-[85vh] flex items-center justify-center bg-lavender"> */}
      {/* <div className='w-[50%]'> */}
      {/* <h4 className="text-xl text-black px-5 big-shoulders">Customizable & ATS-friendly templates</h4> */}
      {/* <h1 className="text-3xl text-black px-5 py-2 poppins-bold-italic">Stand Out. Get Hired. Succeed.</h1> */}
      {/* <p className="text-xl text-black px-5 poppins-extralight-italic">Your resume is your first impression. Make it count with AI-assisted writing, formatting, and optimization for better job opportunities.</p> */}
      {/* <div className='flex justify-center items-center p-5 gap-10 buttons'> */}
      {/* <SignedOut> */}
      {/* <SignInButton> */}
      {/* <Link to="/resumebuilder"><button className="bg-blue-500 text-white rounded-md text-base px-4 py-2 hover:bg-transparent hover:text-blue-500 hover:border border-blue-300 big-shoulderst">Create My Resume</button></Link> */}
      {/* </SignInButton> */}
      {/* </SignedOut> */}
      {/* <SignedOut> */}
      {/* <SignInButton> */}
      {/* <button className="border border-blue-300 text-blue-500 rounded-md text-base px-4 py-2 hover:bg-blue-500 hover:text-white hover:border-0 big-shoulders">Get Started</button> */}
      {/* </SignInButton> */}
      {/* </SignedOut> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className='w-[50%] text-center'> */}
      {/* <h4 className="text-xl text-blue-500 p-5">Customizable & ATS-friendly templates</h4> */}
      {/* </div> */}
      {/* </div> */}

      <section className="bg-gray-100 text-center py-20 px-6">
        <div className="py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build a Job-Winning Resume & Cover Letter <br />
            <span className="text-blue-500">in Just Minutes with AI</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Struggling to create the perfect resume and cover letter? Let our AI-powered tools do the work for you.
            Get professionally formatted, ATS-friendly resumes and personalized cover letters that make recruiters take notice.
          </p>
          <div className="mt-6 flex justify-center gap-4">
                <Link to="/resumebuilder">
                  <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    Start My Resume
                  </button>
                </Link>
            <Link to="/coverletterbuilder">
              <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
                Generate Cover Letter
              </button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Trusted by thousands of job seekers to land their dream job.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI Resume Builder</h2>
            <p className="mt-4 text-lg text-gray-600">
              No more struggling with formatting! Our AI-powered resume generator creates a professional
              resume in minutes. Customize it to match your style and impress recruiters effortlessly.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ AI-Powered Resume Generation</li>
              <li>✅ ATS-Optimized & HR-Approved Templates</li>
              <li>✅ Real-Time Customization & Edits</li>
              <li>✅ One-Click Download in Multiple Formats (PDF, DOCX, TXT)</li>
              <li>✅ AI Resume Score & Improvement Suggestions</li>
            </ul>
            <Link to="/resumebuilder">
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                Create My Resume
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/resume-preview.png"
              alt="AI Resume Builder Preview"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/coverletter-preview.png"
              alt="AI Cover Letter Generator Preview"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI Cover Letter Builder</h2>
            <p className="mt-4 text-lg text-gray-600">
              You don't have to type a single word! Let AI generate a job-winning cover letter for you in seconds.
              Choose a design that matches your resume and get more interview calls.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ AI-Powered Writing Assistance</li>
              <li>✅ Professionally Designed Templates</li>
              <li>✅ Job-Specific Customization & Formatting</li>
            </ul>
            <Link to="/coverletterbuilder">
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                Generate Cover Letter
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
