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
          <Link to="/resumebuilder" className="hover:text-blue-400 hover:underline">Resume Builder</Link>
          <Link to="/coverletterbuilder" className="hover:text-blue-400 hover:underline">Cover Letter</Link>
        </SignedIn>

        <Link to="/pricing" className="hover:text-blue-400 hover:underline">Pricing</Link>
      </div>

      {/* Authentication Buttons */}
      <div>
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700 transition-all duration-500">
              Get Started
            </button>
          </SignInButton>
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
