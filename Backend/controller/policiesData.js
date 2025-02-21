import policy from "../models/policies.model.js"

async function policiesData(req,res){
    try{
        const data=await policy.find()
        return res.json({message:"data is achieved",data:data})
    }catch(error){
        console.error(error.message)
        return res.json({message:"something went wrong!!"})
    }
}
export default policiesData