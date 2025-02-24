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
    parchase:[
        {
            insuranceId:mongoose.SchemaTypes.ObjectId,
            startedDate:{type:Date,default:Date.now},
            endingDate:{type:Date}
        }
    ]
})

const User=mongoose.model("User",userSchema)
export default User