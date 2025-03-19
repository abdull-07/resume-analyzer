import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import CoverLetterBuilder from "../pages/CoverLetterBuilder";
import Pricing from "../pages/Pricing";
import SignInPage from "../pages/auth/sign-in/signin";
import SignUpPage from "../pages/auth/log-in/login";
 // Import the ProtectedRoute

const AppRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/dashboard" element={<Dashboard />}/>
     <Route path="/signin" element={<SignInPage />}/>
     <Route path="/signup" element={<SignUpPage />}/>

     {/* Protacted Routes */}
     <Route path="/resumebuilder" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
     <Route path="/coverletterbuilder" element={<ProtectedRoute><CoverLetterBuilder /></ProtectedRoute>} />
     
     <Route path="/pricing" element={<Pricing />}/>
    </Routes>
  );
};

export default AppRoutes;