import Policy from "../models/policies.model.js";
import User from "../models/users.models.js";

async function history(req, res) {
    try {
        const { id } = req.params;
        const { email } = req.body;

        // Check if the policy exists
        const policyBy = await Policy.findById(id);
        if (!policyBy) {
            return res.status(404).json({ message: "Policy not found" });
        }

        // Calculate dates
        const today = new Date();
        const after10Years = new Date();
        after10Years.setFullYear(today.getFullYear() + 10);

        // Policy purchase object
        const purchaseObject = {
            insuranceId: policyBy._id,
            startedDate: today.toISOString(), // Store in ISO format
            endingDate: after10Years.toISOString()
        };

        // Update user and push the new purchase
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $push: { parchase: purchaseObject } }, 
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found or update failed" });
        }

        return res.status(200).json({ message: "Purchase added successfully", user: updatedUser });

    } catch (error) {
        console.error("Error in history function:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export default history;
