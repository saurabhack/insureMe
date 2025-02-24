import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; 

function UPIPaymentPage() {
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  setAmount()
  setUpiId("9881910567@ypi")
  const handleGenerateQR = (e) => {
    e.preventDefault();
    if (upiId.trim() === "" || amount.trim() === "") {
      alert("Please enter a valid UPI ID and amount.");
      return;
    }
    setShowQR(true);
  };

  const upiLink = `upi://pay?pa=${upiId}&pn=User&am=${amount}&cu=INR`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">UPI Payment</h2>
        <form onSubmit={handleGenerateQR}>
          <div className="mb-4">
            <label className="block text-gray-300">UPI ID</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-amber-400"
              placeholder="example@upi"
              required
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Amount (INR)</label>
            <input
              type="number"
              className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-amber-400"
              placeholder="Enter amount"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
          >
            Generate QR Code
          </button>
        </form>

        {showQR && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Scan to Pay</p>
            <div className="flex justify-center p-4 bg-white rounded-md">
              <QRCodeCanvas value={upiLink} size={200} />
            </div>
            <p className="mt-2 text-gray-400">{upiId}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UPIPaymentPage;
