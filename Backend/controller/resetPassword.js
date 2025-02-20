import User from "../models/users.models.js";
import bcrypt from "bcrypt";

async function resetPassword(req, res) {
  try {
    const { email } = req.params;
    const { password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.updateOne({ $set: { password: hashedPassword } });
    await user.save();
    console.log("Password updated successfully:", user);
    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default resetPassword;
