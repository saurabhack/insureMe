import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
//   const policy = location.state?.policy;
   const policy = {
    name: "Health Insurance",
    description: "Covers medical expenses, hospitalization, and emergency care.",
    coverage: "Hospitalization, Doctor Visits, Prescription Drugs",
    premium: "$200/month",
    terms: "Terms and conditions apply.",
    image: "https://source.unsplash.com/800x500/?health,insurance",
   };

  
  if (!policy) {
    return <h2 className="text-center text-xl mt-10">No Policy Selected</h2>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Order Message */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Purchase Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for purchasing <strong>{policy.name}</strong>.</p>
        <p className="text-gray-500 mt-1">Your coverage starts immediately.</p>

        {/* Policy Details */}
        <div className="mt-6 p-4 border rounded-lg text-left bg-gray-50">
          <p><strong>Policy:</strong> {policy.name}</p>
          <p><strong>Coverage:</strong> {policy.coverage}</p>
          <p><strong>Premium:</strong> {policy.premium}</p>
        </div>

        {/* Go to Dashboard Button */}
        <button 
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Confirmation;

