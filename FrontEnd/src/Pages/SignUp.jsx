import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with:", username, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm mb-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-gray-300">
              I agree to the{" "}
              <a href="#" className="text-amber-400 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Google Signup */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">Or sign up with</p>
          <button className="w-full py-3 mt-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
            Google Signup
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-amber-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
