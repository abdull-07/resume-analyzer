import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';

export const useRouteTransition = () => {
  const { setIsLoading } = useLoader();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show loader for 1 second

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);
};