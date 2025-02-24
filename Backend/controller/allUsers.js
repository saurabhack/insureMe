import User from "../models/users.models.js"
async function allUsers(req,res){
    try{
        const allUsers=await User.find({})
        console.log("All users are here==",allUsers)
        return res.json({allUsers})
    }catch(error){
        console.error(error.message)
        return res.json({message:error})
    }
}
export default allUsers