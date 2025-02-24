import { useState } from "react";

const dummyClaims = [
  { id: 1, policyHolder: "John Doe", amount: "$5,000", status: "Pending" },
  { id: 2, policyHolder: "Jane Smith", amount: "$3,200", status: "Pending" },
  { id: 3, policyHolder: "Alice Johnson", amount: "$2,750", status: "Pending" },
];

function ClaimsTable() {
  const [claims, setClaims] = useState(dummyClaims);

  const updateStatus = (id, newStatus) => {
    const updatedClaims = claims.map((claim) =>
      claim.id === id ? { ...claim, status: newStatus } : claim
    );
    setClaims(updatedClaims);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Claim ID</th>
            <th className="p-3 border">Policy Holder</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id} className="text-center">
              <td className="p-3 border">{claim.id}</td>
              <td className="p-3 border">{claim.policyHolder}</td>
              <td className="p-3 border">{claim.amount}</td>
              <td
                className={`p-3 border font-bold ${
                  claim.status === "Approved"
                    ? "text-green-600"
                    : claim.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {claim.status}
              </td>
              <td className="p-3 border">
                <button
                  onClick={() => updateStatus(claim.id, "Approved")}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(claim.id, "Rejected")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimsTable;
