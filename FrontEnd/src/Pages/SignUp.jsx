import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format!";

    if (!formData.password) newErrors.password = "Password is required!";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long!";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password!";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:3000/signUp", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setSuccessMessage("User created successfully!");
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      setErrors({ server: error.response?.data?.message || "Something went wrong!" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>

        {errors.server && <p className="text-red-500 text-center">{errors.server}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
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
            className={`w-full py-3 font-semibold rounded-lg transition ${
              Object.keys(errors).length ? "bg-gray-600 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-500"
            }`}
            disabled={Object.keys(errors).length > 0}
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