import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // API call to backend login endpoint can be added here
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-amber-500 to-orange-600 text-white flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">InsureMe</h1>
        <p className="text-lg text-center px-10">
          Secure your future with the best insurance plans.
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-900 text-white p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-amber-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-amber-400 hover:underline">
              Contact Admin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
