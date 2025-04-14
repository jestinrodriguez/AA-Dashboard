import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from './firebase';
import useAuthStore from '../store/useAuthStore';
import { toast } from 'sonner';

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    useAuthStore.getState().setUser(user); // Or user object if needed
  } catch (error: any) {
    toast.dismiss();
    toast.error(error.message);
  }
};

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    useAuthStore.getState().setUser(user); // Or user object if needed
  } catch (error: any) {
    toast.dismiss();
    toast.error(error.message);
  }
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    useAuthStore.getState().setUser(user); // Or user object if needed
    // You can add logic here to store user info in Firestore if necessary
  } catch (error: any) {
    toast.dismiss();
    toast.error(error.message);
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
    useAuthStore.getState().setUser(null); // Clear user state on sign out
  } catch (error: any) {
    toast.dismiss();
    toast.error(error.message);
  }
};
