import mongoose, { SchemaType } from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    parchaseId:{
        type:[mongoose.SchemaTypes.ObjectId],
    }
})

const User=mongoose.model("User",userSchema)
export default User