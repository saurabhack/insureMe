import Policy from "../models/policies.model.js";
import User from "../models/users.models.js";

async function fetchHistory(req, res) {
    try {
        const { email } = req.params;

        // Find the user by email
        const user = await User.findOne({ email }).lean();

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User found:", user);

        // If user has no purchase history, return an empty array
        if (!user.parchase || user.parchase.length === 0) {
            return res.status(200).json({ histories: [] });
        }

        // Extract policy IDs and fetch all policies in parallel
        const policyIds = user.parchase.map((item) => item.insuranceId);
        const policies = await Policy.find({ _id: { $in: policyIds } }).lean();

        // Convert policies to a dictionary for quick lookup
        const policyMap = new Map(policies.map((policy) => [policy._id.toString(), policy]));

        // Merge policy data with purchase details
        const histories = user.parchase.map((purchase) => {
            const policy = policyMap.get(purchase.insuranceId.toString());
            if (policy) {
                return {
                    ...policy,  // Spread policy details
                    startingDate: new Date(purchase.startedDate).toLocaleString(),
                    endingDate: new Date(purchase.endingDate).toLocaleString()
                };
            }
            return null;
        }).filter(Boolean); // Remove null values if a policy wasn't found

        console.log("Histories:", histories);

        return res.status(200).json({ histories });
    } catch (error) {
        console.error("Error fetching history:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export default fetchHistory;
