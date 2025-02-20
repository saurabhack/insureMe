import User from "../models/users.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
async function loginUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log("body",req.body)
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ id: user._id,name:user.name ,email:user.email}, "insure", { expiresIn: "1h" });
      console.log("token",token)
      res.json({ message: "Login successful", token });
    } catch (error) {
        console.log(error.message)
      res.status(500).json({ message: "Server error" });
    }
  }
export default loginUser  