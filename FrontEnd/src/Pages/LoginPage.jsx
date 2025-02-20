import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      const token = response.data.token;
      
      console.log("Token received:", token);
      localStorage.setItem("token", token);
      window.location.href = "/"; 
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
          <Link to="/forgate"><p  className="text-amber-400 hover:underline">Forgot Password?</p></Link>  
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-400">Or login with</p>
          <button className="w-full py-3 mt-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
            Google Login
          </button>
        </div>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-amber-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;