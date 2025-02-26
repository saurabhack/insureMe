import Admin from "../models/adminUser.model.js"

async function createUser(req,res){
    try {
    const {name,email}=req.body
    const data=await Admin.create({name,email})
    console.log("data is here == ",data)
    return res.json(data)
    } catch (error) {
        console.error("something went wrong")
        return res.json(error.message)
    }

}
export default createUser