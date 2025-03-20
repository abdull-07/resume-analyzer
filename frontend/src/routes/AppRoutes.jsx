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
 // Import the ProtectedRoute

const AppRoutes = () => {
  const {isSignedIn} = useAuth()
  return (
    <Routes>
     {/* Rediret  /  to Dashboard if use logedIn otherwise show home page */}
     <Route path="/" element={isSignedIn ? <Dashboard /> : <Home />} />


     <Route path="/signin" element = {<SignInPage />} />
     <Route path="/signup" element = {<SignUpPage />} />

     {/* Protected Routes */}
     <Route path="/ResumeBuilder" element = {<ResumeBuilder/>} />
     <Route path="/CoverLetterBuilder" element = {<CoverLetterBuilder />} />


     <Route path="/pricing" element={<Pricing />}/>
    </Routes>
  );
};

export default AppRoutes;