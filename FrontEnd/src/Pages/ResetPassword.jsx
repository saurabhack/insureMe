import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const {email} = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/resetPassword/${email}`, {password});
      setMessage(response.data.message);
      window.location.href = "/login"; 
    } catch (err) {
      setMessage("Error resetting password.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
        {message && <p className="text-green-400 text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
            placeholder="Enter new password"
            required
          />
          <button className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword;