import { useParams, useNavigate } from "react-router-dom";

const policyData = {
  1: {
    name: "Health Insurance",
    description: "Comprehensive health coverage for medical expenses, hospitalization, and emergency care.",
    coverage: "✔ Hospitalization ✔ Doctor Visits ✔ Prescription Drugs",
    premium: "$200/month",
    terms: "Covers pre-existing conditions after 2 years. No coverage for cosmetic treatments.",
    image: "https://source.unsplash.com/800x500/?hospital,healthcare",
  },
  2: {
    name: "Car Insurance",
    description: "Protect your vehicle from accidents, theft, and damages.",
    coverage: "✔ Accidental Damage ✔ Theft ✔ Third-Party Liability",
    premium: "$150/month",
    terms: "Covers damages up to $50,000. Deductible of $500 applies.",
    image: "https://source.unsplash.com/800x500/?car,insurance",
  },
  3: {
    name: "Home Insurance",
    description: "Secure your home from fire, theft, and natural disasters.",
    coverage: "✔ Fire ✔ Flood ✔ Theft ✔ Natural Disasters",
    premium: "$100/month",
    terms: "Does not cover damages due to negligence. Includes temporary accommodation costs.",
    image: "https://source.unsplash.com/800x500/?house,home",
  },
};

function PolicyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const policy = policyData[id];

  if (!policy) {
    return <h2 className="text-center text-xl mt-10">Policy not found</h2>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Insurance Image */}
          <img
            src={policy.image}
            alt={policy.name}
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
          />

          {/* Insurance Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{policy.name}</h1>
            <p className="text-gray-600 mt-2">{policy.description}</p>

            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
              <p className="text-lg font-semibold">Coverage:</p>
              <p className="text-gray-700">{policy.coverage}</p>

              <p className="text-lg font-semibold mt-3">Premium Cost:</p>
              <p className="text-gray-700">{policy.premium}</p>

              <p className="text-lg font-semibold mt-3">Terms & Conditions:</p>
              <p className="text-gray-700">{policy.terms}</p>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={() => navigate("/confirmation", { state: { policy } })}
              className="mt-6 w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyDetails;
