import mongoose from "mongoose";
const buySchema=mongoose.Schema({
    policyType:{
        type:String,
        required:true
    },
    buyerName:{
        type:String,
    },
    buyerEmail:{
        type:String,
    },
    AdharCard:{
      type:String  
    },
    PanNum:{
      type:String  
    },
    method:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    
})
const Buy=mongoose.model("Buy",buySchema)
export default Buy