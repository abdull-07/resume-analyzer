import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-12 bg-blue-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Start Your Career Journey Today!</h2>
      <p className="mb-6 text-lg">
        Create a professional resume & cover letter in minutes.  
        <span className="font-bold"> It’s completely free!</span>
      </p>
     <Link to="/signup">
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
        Get Started
      </button>
     </Link> 
    </section>
  );
};
  
  export default CTA;
  
