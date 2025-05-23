import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import CoverLetterBuilder from "../pages/CoverLetterBuilder";
import Pricing from "../pages/Pricing";
import SignInPage from "../pages/auth/sign-in/signin";
import SignUpPage from "../pages/auth/log-in/login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsofService";
import FAQ from "../pages/FAQ";
import SuccessStories from "../pages/SuccessStories";
import TemplatesGallery from "../pages/TemplatesGallery";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import ResumeAnalizer from "../pages/ResumeAnalizer";
import ResumeFeedback from "../pages/Feedback"; 
import CVBuilder from "../pages/CVBuilder";
import { UserProfile } from "@clerk/clerk-react";
import { useRouteTransition } from '../hooks/useRouteTransition'; // Import the useRouteTransition hook

// Import the ProtectedRoute

const AppRoutes = () => {
  const { isSignedIn } = useAuth()
  useRouteTransition(); // Call the useRouteTransition hook to enable route transitions
  return (
    <Routes>
      {/* Rediret  /  to Dashboard if use logedIn otherwise show home page */}
      <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />


      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Routes */}
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/cv-builder" element={<CVBuilder />} />
      <Route path="/coverletter-builder" element={<CoverLetterBuilder />} />
      <Route path="/resume-analizer" element={<ResumeAnalizer />} />


      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/templates-gallery" element={<TemplatesGallery />} />
      <Route path="/features" element={<Features />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/feedback" element={<ResumeFeedback />} />
      <Route path="/contact" element={<Contact />} />
      


      {/* Redirect all other paths to home */}


    </Routes>
  );
};

export default AppRoutes;