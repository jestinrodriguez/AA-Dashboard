import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import useAuthStore from "../store/useAuthStore";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { loginSchema } from "../schema/authSchema";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { email, password, setEmail, setPassword } = useAuthStore();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const validation = loginSchema.safeParse({ email, password });

    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.dismiss();
      toast.error(firstError.message);
      return;
    }
    setIsLoggingIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    setError("");
    try {
      await doSignInWithGoogle();
      navigate("/");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message);
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-full bg-background flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-4xl font-bold mb-2">Login</h3>
          </div>
          <form onSubmit={handleLogin}>
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
            </div>
            <div className="w-full flex flex-col mb-4">
              <Button variant="primary" disabled={isLoggingIn} type="submit">
                Log In With Email and Password
              </Button>
            </div>
            <div className="w-full flex items-center justify-center relative py-4">
              OR
            </div>
            <Button
              variant="secondary"
              onClick={handleGoogleLogin}
              disabled={isLoggingIn}
              className="w-full"
            >
              Log In With Google
            </Button>
          </form>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Don't have an account?{" "}
            <span className="font-semibold text-white cursor-pointer underline">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
