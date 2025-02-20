import User from "../models/users.models.js"
import nodemailer from "nodemailer"
async function forgatePassword(req,res){
    const {email}=req.body
    const user=await User.findOne({email})
    console.log("user is === ",user)
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'kamanesaurabh68@gmail.com',
            pass:'cvby rptv koxf yflb'
        },
    });
    const resetLink=`http://localhost:5173/reset-password/${email}`
    const mailOptions={
        from:'kamanesaurabh68@gmail.com',
        to:user.email,
        subject:"password reset",
        text:`click this link to reset this password ${resetLink}`
    }
    transporter.sendMail(mailOptions, (error) => {
        if (error) return res.status(500).json({ message: "Error sending email" , error:error.message});
        res.json({ message: "Password reset link sent to your email." });
      });
}
export default forgatePassword