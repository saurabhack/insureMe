import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      policyName,
      policyType,
      coverageAmount,
      price,
      duration,
      description,
      file,
    });
    alert("Policy Added Successfully!");
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
              onChange={handleFileChange}
              className="w-full p-2 bg-gray-700 text-white rounded cursor-pointer"
              accept=".pdf,.jpg,.png"
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
