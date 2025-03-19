import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (isLoaded) setAuthChecked(true);
  }, [isLoaded]);

  if (!authChecked) return null; // Prevent flickering

  return isSignedIn ? children : <Navigate to="/signin" state={{ from: location }} replace />;
};

export default ProtectedRoute;
