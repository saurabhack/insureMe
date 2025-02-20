import mongoose from "mongoose";

const contactScema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },    
    message:{
        type:String,
        require:true
    }
})
const Contact=mongoose.model("Contact",contactScema)
export default Contact
