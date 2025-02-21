import policy from "../models/policies.model.js";

async function getByIdPolicies(req,res){
    try{
    const {id}=req.params;
    const data=await policy.findById({_id:id})
    return res.json({data:data})
    }catch(error){
        console.error(error.message)
        return res.json({message:error.message})
    }
}
export default getByIdPolicies