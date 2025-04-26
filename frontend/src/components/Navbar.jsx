import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400">
            WAres
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-400 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-400 hover:underline">Home</Link>

            <SignedIn>
              {/* Signed-in links can be added here */}
            </SignedIn>

            <Link to="/features" className="text-gray-700 hover:text-blue-400 hover:underline">Features</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-400 hover:underline">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-400 hover:underline">Contact</Link>

            {/* Authentication Buttons */}
            <div className="ml-4">
              <SignedOut>
                <div className="flex gap-4">
                  <Link to="/signin">
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition text-sm">
                      SignIn
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition text-sm">
                      SignUp
                    </button>
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-400 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-blue-400 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-blue-400 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-400 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-200">
              <SignedOut>
                <div className="flex flex-col space-y-4">
                  <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                      SignIn
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
                      SignUp
                    </button>
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;