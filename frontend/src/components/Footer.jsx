import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">WAres</h3>
          <p className="text-gray-400">
            Create professional resumes and cover letters effortlessly.  
            <span className="font-semibold"> It’s completely free!</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/features" className="text-gray-400 hover:text-white transition">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
            <li><Link to="/contect" className="text-gray-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-2xl"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} WAres. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
