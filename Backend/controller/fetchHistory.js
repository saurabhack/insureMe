import policy from "../models/policies.model.js"
import User from "../models/users.models.js"
async function fetchHistory(req,res){
    const {email}=req.body
    const data=await User.find({email})
    console.log("data is ==",data)
    const history=data[0].parchaseId
    console.log("history",history)
    const histories=[]
    for(let i=0;i<history.length;i++){
        let act= await policy.findById(history[i])
        histories.push(act)
    }
    return res.json({histories})
}
export default fetchHistory