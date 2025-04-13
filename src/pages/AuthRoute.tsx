import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useAuthStore from '../store/useAuthStore';


interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  // Get the setUser function from Zustand store
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Set the user in Zustand store when authenticated
        setUser(user);
      } else {
        // If not authenticated, redirect to login and clear user
        setUser(null);
        console.log('unauthorized');
        navigate('/login');
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [auth, navigate, setUser]);

  return <>{children}</>; // Render the protected route if authenticated
};

export default AuthRoute;
