import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, { usernameOrEmail, password });
      toast.success('Login successful!');
      Cookies.set('token', response.data.token); // Store JWT token in a cookie
      if(response.data.role === 'admin'){
        router.push('/admin-page');
      }else{
        router.push('/'); // Redirect to a protected route or dashboard

      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 text-lg font-quicksand">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm mb-1">Username or Email</span>
            <input
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm mb-1">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
          <div className="text-sm text-blue-500 cursor-pointer mt-4 text-center">
            <span onClick={() => router.push("/register")} className="underline">Register now</span> | 
            <span className="ml-2 underline" onClick={() => router.push("/forgot-password")}>Forgot password</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
