import { useState, useEffect } from "react";
import axios from "axios";

function History() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Fetch policies from backend API
    axios.get("http://localhost:3000/user-policies")
      .then((res) => setPolicies(res.data))
      .catch((err) => console.error("Error fetching policies:", err));
  }, []);

  // Function to check if policy is active
  const isActive = (endDate) => new Date(endDate) >= new Date();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Policy History</h2>

        {policies.length === 0 ? (
          <p className="text-gray-400 text-center">No policies found.</p>
        ) : (
          <div className="space-y-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className={`p-4 rounded-lg border ${
                  isActive(policy.endDate) ? "border-green-500" : "border-red-500"
                }`}
              >
                <h3 className="text-lg font-semibold">{policy.policyName}</h3>
                <p className="text-gray-300">Start Date: {policy.startDate}</p>
                <p className="text-gray-300">End Date: {policy.endDate}</p>
                <p
                  className={`mt-2 font-bold ${
                    isActive(policy.endDate) ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isActive(policy.endDate) ? "Active" : "Expired"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
