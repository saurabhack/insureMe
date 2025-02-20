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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:3000/signUp", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        repassword:formData.confirmPassword
      });

      setSuccessMessage("User created successfully!");
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      setErrors({ server: error.response?.data?.message || "Something went wrong!" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 lg:px-16 pt-20">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6">Sign Up</h2>

        {errors.server && <p className="text-red-500 text-center">{errors.server}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {["username", "email", "password", "confirmPassword"].map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-gray-300 capitalize">{field.replace("confirmPassword", "Confirm Password")}</label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder={`Enter your ${field.replace("confirmPassword", "confirm password")}`}
              />
              {errors[field] && <p className="text-red-500">{errors[field]}</p>}
            </div>
          ))}

          <div className="flex items-center text-sm mb-4">
            <input type="checkbox" className="mr-2" required />
            <label className="text-gray-300">
              I agree to the <a href="#" className="text-amber-400 hover:underline">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-lg transition ${
              Object.keys(errors).length ? "bg-gray-600 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-500"
            }`}
         
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-400">Or sign up with</p>
          <button className="w-full py-3 mt-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
            Google Signup
          </button>
        </div>

        <p className="mt-4 text-center text-gray-400">
          Already have an account? <a href="#" className="text-amber-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
