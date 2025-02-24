import Buy from "../models/buy.model.js";

async function policyBuyers(req, res) {
  try {
    const { policyType, buyerName, buyerEmail, AdharCard, PanNum, method, PhoneNumber } = req.body;
    console.log("body is here==",req.body)
    // Check if all required fields are provided
    if (!policyType || !buyerName || !buyerEmail || !AdharCard || !PanNum || !method || !PhoneNumber) {
      return res.status(400).json({ message: "All fields are required." });
    }

    
    const saveData = await Buy.create({
      policyType,
      buyerName,
      buyerEmail,
      AdharCard,
      PanNum,
      method,
      PhoneNumber,
    });
    console.log("data is successfully submitted!!")
    return res.status(201).json({
      message: "Successfully created",
      data: saveData,
    });

  } catch (error) {
    console.error("Error in policyBuyers:", error.message);
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
}

export default policyBuyers;
