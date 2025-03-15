import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import CoverLetterBuilder from "../pages/CoverLetterBuilder";
import Pricing from "../pages/Pricing";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Conditionally Render Home or Dashboard */}
      <Route
        path="/"
        element={
          <>
            <SignedOut>
              <Home />
            </SignedOut>
            <SignedIn>
              <Dashboard />
            </SignedIn>
          </>
        }
      />
      <Route path="/resumebuilder" element={<ResumeBuilder />} />
      <Route path="/coverletterbuilder" element={<CoverLetterBuilder />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default AppRoutes;
