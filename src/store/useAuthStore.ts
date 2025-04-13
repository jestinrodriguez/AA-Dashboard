import { User } from 'firebase/auth';
import { create } from 'zustand';


interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmedPassword: (confirmPassword: string) => void;
  resetCredentials: () => void;
  user: User | null; // This should be of type `User | null`
  setUser: (user: User | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  confirmPassword: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmedPassword: (confirmPassword) => set({ confirmPassword }),
  resetCredentials: () => set({ email: '', password: '' }),
  user: null, // Default user state is null
  setUser: (user) => set({ user }), // This function sets the user,
}));

export default useAuthStore;
