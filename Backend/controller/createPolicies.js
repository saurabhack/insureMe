import policy from "../models/policies.model.js";

async function createPolicies(req, res) {
  try {
    const { title, description, coverage, cost, terms, duration, type } = req.body;

    // Handle file upload
    const img = req.file ? req.file.filename : null;

    // Create policy entry in the database
    const data = await policy.create({ title, description, coverage, cost, terms, img, duration, type });

    console.log("Policy successfully created:", data);

    return res.status(201).json({
      success: true,
      message: "Policy created successfully",
      policy: data,
    });
  } catch (error) {
    console.error("Error creating policy:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export default createPolicies;
