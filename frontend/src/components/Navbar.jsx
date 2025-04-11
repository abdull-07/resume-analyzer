import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-white w-full">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-400">
        WAres
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 hover:underline">Home</Link>

        {/* Show these links only when the user is signed in */}
        <SignedIn>
          {/* <Link to="/resumebuilder" className="hover:text-blue-400 hover:underline">Resume Builder</Link> */}
          {/* <Link to="/coverletterbuilder" className="hover:text-blue-400 hover:underline">Cover Letter</Link> */}
        </SignedIn>

        {/* <Link to="/pricing" className="hover:text-blue-400 hover:underline">Pricing</Link> */}
        <Link to="/features" className="hover:text-blue-400 hover:underline">Features</Link>
        <Link to="/faq" className="hover:text-blue-400 hover:underline">FAQ</Link>
        <Link to="/contact" className="hover:text-blue-400 hover:underline">Contact</Link>
      </div>

      {/* Authentication Buttons */}
      <div>

        <SignedOut>
          <div className="flex gap-4">
            <Link to="/signin">  {/* Corrected route */}
              <button className="px-[10px] py-[5px] bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                SignIn
              </button>
            </Link>

            <Link to="/signup">  {/* Corrected route */}
              <button className="px-[10px] py-[5px] bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
                SignUp
              </button>
            </Link>
          </div>
        </SignedOut>


        <SignedIn>
          {/* User Profile Dropdown (Clerk) */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
