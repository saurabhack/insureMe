import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/forgatePass", { email });
      setMessage(response.data.message || "Password reset link sent to your email.");
    } catch (err) {
      console.log("error ==",err)
      setError(err.response?.data?.message || "Error sending reset link. Try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
        {message && <p className="text-green-400 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
          <button
            type="submit"
            className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Remembered your password?{" "}
          <a href="/login" className="text-amber-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
