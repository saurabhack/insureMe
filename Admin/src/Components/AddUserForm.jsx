import { useState } from "react";

function AddUserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "User",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", user);
    alert("User added successfully!");
    setUser({ name: "", email: "", role: "User" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Role</label>
        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
      >
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
