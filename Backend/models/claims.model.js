import mongoose from "mongoose";
const claims=mongoose.Schema({
    name:{
        type:String,
    }
})

const Claims=mongoose.model("Claims",claims)