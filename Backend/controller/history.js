import Policy from "../models/policies.model.js";
import User from "../models/users.models.js";
async function history(req, res) {
    try {
        const { id } = req.params;
        const {email}=req.body 
        const policyBy = await Policy.findById(id);
        if (!policyBy) {
            return res.status(404).json({ message: "Policy not found" });
        }
        const arr=[]
        arr.push(policyBy._id)
        const updateUser = await User.findOneAndUpdate(
            {email ,$push:{parchaseId: arr} }
        );
        if (!updateUser) {
            return res.status(404).json({ message: "User not found or not updated" });
        }
        return res.status(200).json(updateUser);
    } catch (error) {
        console.error("Error in history function:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}
export default history;
