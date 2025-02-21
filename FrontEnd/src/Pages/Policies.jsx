import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/allPolicies');
        setPolicies(response.data.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error(error.message);
      }
    }
getData()    
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?insurance,protection')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Our Policies</h1>
          <p className="text-lg mt-3 max-w-xl mx-auto">
            Choose the right insurance policy that best suits your needs.
          </p>
        </div>
      </section>

      {/* Policy List */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Explore Our Policies</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {policies.map((policy) => (
            <Link key={policy.id} to={`/PolicyDetails/${policy._id}`}>
              <div
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer"
                onClick={() => setSelectedPolicy(policy)}
              >
                <h3 className="text-xl font-semibold">{policy.title}</h3>
                <p className="mt-2 text-gray-300">{policy.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected Policy Details */}
      {selectedPolicy && (
        <section className="py-12 px-6 bg-gray-800 text-center">
          <h2 className="text-4xl font-semibold mb-6">Policy Details</h2>
          <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{selectedPolicy.title}</h3>
            <p className="mt-4 text-gray-300">{selectedPolicy.details}</p>
            <button
              className="mt-6 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
              onClick={() => setSelectedPolicy(null)}
            >
              Close
            </button>
          </div>
        </section>
      )}

      {/* Support Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Need Help?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          If you need assistance in choosing the right policy, our support team
          is available 24/7.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p>© {new Date().getFullYear()} InsureMe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Policies;
