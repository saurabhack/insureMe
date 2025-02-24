import axios from "axios";
import { useState, useEffect } from "react";

const ActivePolicies = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Fetch active policies from backend
    axios("http://localhost:3000/activePolicies")
      .then((response) => {
        const data=response.data.allBuyers
        console.log(data)
        setPolicies(data)
      })
      .catch((error) => console.error("Error fetching policies:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Active Policies</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Policy Title</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Buyer</th>
              <th className="p-2 border">Cost</th>
            </tr>
          </thead>
          <tbody>
            {policies.length > 0 ? (
              policies.map((policy) => (
                <tr key={policy.id} className="text-center">
                  <td className="p-2 border">{policy.title}</td>
                  <td className="p-2 border">{policy.policyType}</td>
                  <td className="p-2 border">{policy.buyerName}</td>
                  <td className="p-2 border">${policy.cost}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-2 text-center">No active policies found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivePolicies;
