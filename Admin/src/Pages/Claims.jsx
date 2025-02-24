import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaFilePdf, FaImage } from "react-icons/fa";

const claimsData = [
  {
    id: 1,
    user: "John Doe",
    claimType: "Health Insurance",
    amount: "$5,000",
    status: "Pending",
    document: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Example PDF
  },
  {
    id: 2,
    user: "Jane Smith",
    claimType: "Car Insurance",
    amount: "$2,500",
    status: "Pending",
    document: "https://via.placeholder.com/150", // Example Image
  },
];

function Claims() {
  const [claims, setClaims] = useState(claimsData);

  const handleStatusChange = (id, newStatus) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === id ? { ...claim, status: newStatus } : claim
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Claims Management</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3">User</th>
              <th className="p-3">Claim Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Document</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim.id} className="border-b text-center">
                <td className="p-3">{claim.user}</td>
                <td className="p-3">{claim.claimType}</td>
                <td className="p-3">{claim.amount}</td>
                <td className="p-3">
                  {claim.document.endsWith(".pdf") ? (
                    <a
                      href={claim.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
                    >
                      <FaFilePdf className="text-red-500 text-xl" /> View PDF
                    </a>
                  ) : (
                    <a
                      href={claim.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-green-600 hover:underline"
                    >
                      <FaImage className="text-green-500 text-xl" /> View Image
                    </a>
                  )}
                </td>
                <td className={`p-3 font-semibold ${claim.status === "Approved" ? "text-green-600" : claim.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                  {claim.status}
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600"
                    onClick={() => handleStatusChange(claim.id, "Approved")}
                  >
                    <FaCheckCircle /> Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-600"
                    onClick={() => handleStatusChange(claim.id, "Rejected")}
                  >
                    <FaTimesCircle /> Reject
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

export default Claims;
