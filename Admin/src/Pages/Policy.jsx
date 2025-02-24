import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
const initialPolicies = [
  { id: 1, name: "Health Insurance", type: "Medical", premium: "$300/month" },
  { id: 2, name: "Car Insurance", type: "Vehicle", premium: "$150/month" },
];
function Policy() {
  const [policies, setPolicies] = useState(initialPolicies);
  const [newPolicy, setNewPolicy] = useState({ name: "", type: "", premium: "" });

  const handleAddPolicy = () => {
    if (newPolicy.name && newPolicy.type && newPolicy.premium) {
      setPolicies([...policies, { ...newPolicy, id: policies.length + 1 }]);
      setNewPolicy({ name: "", type: "", premium: "" });
    }
  };
  const handleDeletePolicy = (id) => {
    setPolicies(policies.filter((policy) => policy.id !== id));
  };
  useEffect(()=>{
    axios.get("http://localhost:3000/allPolicies").then((res)=>{
        console.log(res.data.data[0])
        setPolicies(res.data.data)
    }).catch((error)=>{
        console.error("something went wrong",error.message)
    })
  },[])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Policies Management</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaPlusCircle className="text-green-600" /> Add New Policy
        </h3>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Policy Name"
            value={newPolicy.name}
            onChange={(e) => setNewPolicy({ ...newPolicy, name: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="Policy Type"
            value={newPolicy.type}
            onChange={(e) => setNewPolicy({ ...newPolicy, type: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="Premium Amount"
            value={newPolicy.premium}
            onChange={(e) => setNewPolicy({ ...newPolicy, premium: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleAddPolicy}
          >
            Add
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3">Policy Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Premium</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id} className="border-b text-center">
                <td className="p-3">{policy.title}</td>
                <td className="p-3">{policy.description}</td>
                <td className="p-3">{policy.cost}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-red-600"
                    onClick={() => handleDeletePolicy(policy.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Policy;