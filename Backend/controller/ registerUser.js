import bcrypt from 'bcrypt';
import User from '../models/users.models.js'; 
async function registerUser(req, res) {
    console.log("body is here==",req.body)
    try {
        const { name, email, password,repassword } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }else if(repassword!=password){
            return res.status(400).json({ message: 'password does not matched' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
export default registerUser;