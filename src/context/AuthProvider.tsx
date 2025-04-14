import { createContext, useEffect, useState, useContext } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import useAuthStore from '../store/useAuthStore';

const AuthStatusContext = createContext({ loading: true });

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore((state) => state.setUser);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, auth]);

  return (
    <AuthStatusContext.Provider value={{ loading }}>
      {children}
    </AuthStatusContext.Provider>
  );
};

export const useAuthLoading = () => useContext(AuthStatusContext);

export default AuthProvider;