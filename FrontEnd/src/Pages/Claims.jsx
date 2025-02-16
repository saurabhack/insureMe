import { useState } from "react";

function Claims() {
  const [form, setForm] = useState({
    policyNumber: "",
    fullName: "",
    email: "",
    claimType: "",
    description: "",
    documents: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, documents: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Claim submitted successfully!");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?insurance,security')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Claims & Reimbursements</h1>
          <p className="text-lg mt-3 max-w-xl mx-auto">Quick, easy, and hassle-free claims process.</p>
        </div>
      </section>

      {/* How to Claim Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">How to File a Claim?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-300">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">1️⃣ Submit Your Claim</h3>
            <p>Fill in the online form with your details and supporting documents.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">2️⃣ Claim Processing</h3>
            <p>Our team reviews your claim and validates the provided information.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">3️⃣ Get Reimbursed</h3>
            <p>Once approved, your claim amount is processed and credited to your account.</p>
          </div>
        </div>
      </section>

      {/* Claim Submission Form */}
      <section className="py-12 px-6 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold mb-6">File a Claim</h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg text-left">
          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Policy Number</label>
            <input
              type="text"
              name="policyNumber"
              value={form.policyNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
          <div className="mb-4 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Claim Type</label>
            <select
              name="claimType"
              value={form.claimType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            >
              <option value="">Select Claim Type</option>
              <option value="Health">Health Insurance</option>
              <option value="Car">Car Insurance</option>
              <option value="Home">Home Insurance</option>
              <option value="Life">Life Insurance</option>
              <option value="Travel">Travel Insurance</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Claim Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Upload Supporting Documents</label>
            <input
              type="file"
              name="documents"
              onChange={handleFileChange}
              className="w-full bg-gray-600 text-white rounded cursor-pointer"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">
            Submit Claim
          </button>
        </form>
      </section>

      {/* Support Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Need Help?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          If you have any issues or queries regarding your claim, our support team is available 24/7 to assist you.
        </p>
        <a href="/contact" className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">Contact Support</a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p>© {new Date().getFullYear()} InsureMe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Claims;
