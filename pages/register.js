import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        Cookies.set("token", data.token); // Store the token in a cookie
        toast.success(data.message);
        router.push("/"); // Redirect to the home page
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 hidden md:block relative">
        <img
          src="/bb.png"
          alt="Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative z-10">
          <div className="text-center mb-6">
            <img
              src="/logo.png"
              alt="Bakery Logo"
              className="mx-auto w-40 h-40 object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Create an Account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 rounded-lg flex flex-col gap-6"
          >
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                placeholder=" "
                value={formData.username}
                onChange={handleChange}
                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <label
                htmlFor="username"
                className="absolute left-4 top-1/2 px-2 -translate-y-7 z-10 bg-white text-gray-500 text-sm font-medium transition-transform duration-300 transform origin-top-left peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white peer-focus:px-1"
              >
                User Name
              </label>
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 px-2 -translate-y-7 z-10 bg-white text-gray-500 text-sm font-medium transition-transform duration-300 transform origin-top-left peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white peer-focus:px-1"
              >
                Email
              </label>
            </div>

            <div className="relative mb-6">
              <input
                id="password"
                name="password"
                type="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-1/2 px-2 -translate-y-7 z-10 bg-white text-gray-500 text-sm font-medium transition-transform duration-300 transform origin-top-left peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:bg-white peer-focus:px-1"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
