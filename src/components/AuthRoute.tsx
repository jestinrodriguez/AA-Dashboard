import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { useAuthLoading } from '../context/AuthProvider';

interface AuthRouteProps {
  children: React.ReactNode;
  redirectIfAuthenticated?: boolean;
}

const AuthRoute = ({
  children,
  redirectIfAuthenticated = false,
}: AuthRouteProps) => {
    const { loading } = useAuthLoading();
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
  
      if (user && redirectIfAuthenticated) {
        navigate('/');
      } else if (!user && !redirectIfAuthenticated) {
        navigate('/login');
      }
    }, [loading, user, redirectIfAuthenticated, navigate]);
  
    if (loading) {
      return <div>Loading...</div>; // block render
    }
  
    // Protects private routes
    if (!user && !redirectIfAuthenticated) return null;
  
    return <>{children}</>;
  
};

export default AuthRoute;
