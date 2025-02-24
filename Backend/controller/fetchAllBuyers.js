import Buy from "../models/buy.model.js"

async function fetchAllBuyers(req,res){
    try {
        const allBuyers=await Buy.find({})
        console.log("all Buyers",allBuyers)
        return res.json({allBuyers})
    } catch (error) {
        console.error("something went wrong",error.message)
        return res.json({message:error.message})
    }
}
export default fetchAllBuyers;