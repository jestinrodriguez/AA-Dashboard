import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { signupSchema } from "../schema/authSchema";
import { toast } from "sonner";
import Spinner from "../components/Spinner";

const Signup = () => {
  const navigate = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(false);

  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmedPassword,
  } = useAuthStore();

  // Function to handle sign-up with Google
  const handleSignUpGoogle = async () => {
    setIsSigningUp(true);
    try {
      await doSignInWithGoogle();
      navigate("/");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      setIsSigningUp(false);
    }
  };

  // Function to handle sign-up with email and password
  const handleSignUp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const validation = signupSchema.safeParse({ email, password, confirmPassword });

    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.dismiss();
      toast.error(firstError.message);
      return;
    }
    setIsSigningUp(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      setIsSigningUp(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-full bg-background flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-4xl font-bold mb-2">Sign Up</h3>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="w-full flex flex-col mb-6">
              <Input
                type="email"
                placeholder="Email"
                className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Re-Enter Password"
                className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
                value={confirmPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <Button
                type="submit"
                disabled={isSigningUp}
                variant="primary"
              >
                {isSigningUp ? <Spinner /> : 'Sign Up With Email and Password'}
              </Button>
            </div>
            <div className="w-full flex items-center justify-center relative py-4">
                OR
            </div>
            <Button
              onClick={handleSignUpGoogle}
              disabled={isSigningUp}
              variant="secondary"
              className="w-full"
            >
                {isSigningUp ? <Spinner /> : 'Sign Up With Google'}
            </Button>
          </form>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Already have an account?{" "}
            <span className="font-semibold text-white cursor-pointer underline">
              <a href="/login">Log In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
