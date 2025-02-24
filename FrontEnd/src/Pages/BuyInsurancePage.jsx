import { useState } from "react";
import { useAuth } from "../contextAPI/context";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function BuyInsurancePage() {
  const {user} = useAuth()
  const {id}=useParams()
  const navigate=useNavigate()
  console.log("user is ===", user)
  const [formData, setFormData] = useState({
    fullName: `${user.name}`,
    email: `${user.email}`,
    phone: "",
    dob: "",
    address: "",
    aadhar: "",
    pan: "",
    policyType: "Health Insurance",
    coverageAmount: "5,00,000",
    paymentMethod: "credit_card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.aadhar.match(/^\d{12}$/)) newErrors.aadhar = "Aadhar must be 12 digits";
    if (!formData.pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) newErrors.pan = "Invalid PAN format";
    if (formData.paymentMethod === "credit_card") {
      if (!formData.cardNumber.match(/^\d{16}$/)) newErrors.cardNumber = "Card Number must be 16 digits";
      if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) newErrors.expiryDate = "Invalid expiry date (MM/YY)";
      if (!formData.cvv.match(/^\d{3}$/)) newErrors.cvv = "CVV must be 3 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange =async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" }); 
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return; // Stop execution if form is invalid

  try {
    // Send policy purchase request
    await axios.post("http://localhost:3000/policyBuy", {
      policyType: formData.policyType,
      buyerName: formData.fullName,
      buyerEmail: formData.email,
      AdharCard: formData.aadhar,
      PanNum: formData.pan,
      method: formData.paymentMethod,
      PhoneNumber: formData.phone,
    });

    console.log("Policy purchase submitted successfully");

    // Add purchase history after policy purchase 
    await axios.post(`http://localhost:3000/addHistory/${id}`, { email: user.email });

    console.log("History updated successfully");

    alert("Payment Successful! Your policy is now active.");

  } catch (error) {
    console.error("Error submitting form:", error.message);
    alert("Error occurred while processing your request. Please try again.");
  }
};

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Buy Insurance Policy</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300">Full Name</label>
              <input type="text" disabled name="fullName" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <p className="text-red-400">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input type="email" disabled name="email" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-300">Phone</label>
              <input type="tel" name="phone" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="text-red-400">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-gray-300">Date of Birth</label>
              <input type="date" name="dob" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.dob} onChange={handleChange} />
              {errors.dob && <p className="text-red-400">{errors.dob}</p>}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-300">Address</label>
            <textarea name="address" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.address} onChange={handleChange} />
            {errors.address && <p className="text-red-400">{errors.address}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-300">Aadhar Card Number</label>
              <input type="text" name="aadhar" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.aadhar} onChange={handleChange} />
              {errors.aadhar && <p className="text-red-400">{errors.aadhar}</p>}
            </div>
            <div>
              <label className="block text-gray-300">PAN Card Number</label>
              <input type="text" name="pan" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.pan} onChange={handleChange} />
              {errors.pan && <p className="text-red-400">{errors.pan}</p>}
            </div>
          </div>
          {/* Payment Details */}
          <div className="mt-4">
            <label className="block text-gray-300">Payment Method</label>
            <select name="paymentMethod" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.paymentMethod} onChange={handleChange}>
              <option value="credit_card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="net_banking">Net Banking</option>
              <option value="emi">EMI</option>
            </select>
          </div>

          {formData.paymentMethod === "credit_card" && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-300">Card Number</label>
                <input type="text" name="cardNumber" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.cardNumber} onChange={handleChange} />
                {errors.cardNumber && <p className="text-red-400">{errors.cardNumber}</p>}
              </div>
              <div>
                <label className="block text-gray-300">Expiry Date</label>
                <input type="text" name="expiryDate" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.expiryDate} onChange={handleChange} />
                {errors.expiryDate && <p className="text-red-400">{errors.expiryDate}</p>}
              </div>
              <div>
                <label className="block text-gray-300">CVV</label>
                <input type="text" name="cvv" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.cvv} onChange={handleChange} />
                {errors.cvv && <p className="text-red-400">{errors.cvv}</p>}
              </div>
            </div>
          )}
          {formData.paymentMethod === "upi" && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300">UPI ID</label>
                <input type="text" name="upiId" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.upiId} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-300">Password</label>
                <input type="password" name="upiPassword" className="w-full p-3 rounded bg-gray-700 text-white" value={formData.upiPassword} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-300">Amount</label>
                <input type="text" name="amount" disabled className="w-full p-3 rounded bg-gray-600 text-white" value={`₹${formData.coverageAmount}`} />
              </div>
            </div>
          )}
                <button type="submit" className="w-full py-3 mt-6 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">
            Pay & Activate Policy
          </button>      
        </form>
      </div>
    </div>
  );
}
export default BuyInsurancePage;