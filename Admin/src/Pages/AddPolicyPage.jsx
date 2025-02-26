import { useState } from "react";
import axios from "axios";

function AddPolicyPage() {
  const [policyName, setPolicyName] = useState("");
  const [policyType, setPolicyType] = useState("Health Insurance");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", policyName);
    formData.append("description", description);
    formData.append("coverage", coverageAmount);
    formData.append("cost", price);
    formData.append("duration", duration);
    formData.append("type", policyType);
    if (file) {
      formData.append("document", file);  // This must match backend field name
    }
  
    try {
      await axios.post("http://localhost:3000/createPolicies", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      alert("Policy Added Successfully!");
    } catch (error) {
      console.error("Something went wrong:", error.message);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Policy</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Policy Name */}
          <div>
            <label className="block text-gray-300">Policy Name</label>
            <input
              type="text"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter policy name"
              required
            />
          </div>

          {/* Policy Type */}
          <div>
            <label className="block text-gray-300">Policy Type</label>
            <select
              value={policyType}
              onChange={(e) => setPolicyType(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option>Health Insurance</option>
              <option>Life Insurance</option>
              <option>Car Insurance</option>
              <option>Home Insurance</option>
              <option>Travel Insurance</option>
            </select>
          </div>

          {/* Coverage Amount */}
          <div>
            <label className="block text-gray-300">Coverage Amount ($)</label>
            <input
              type="number"
              value={coverageAmount}
              onChange={(e) => setCoverageAmount(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter coverage amount"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-300">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter policy price"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-300">Duration (Years)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter policy duration"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter policy details"
              rows="4"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-300">Upload Policy Document</label>
            <input
              type="file"
              name="document"
              onChange={handleFileChange}
              className="w-full p-2 bg-gray-700 text-white rounded cursor-pointer"
              accept=".pdf,.jpg,.png"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Add Policy
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPolicyPage;
