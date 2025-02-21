import mongoose from "mongoose";
const policySchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    coverage:{
        type:Array,
        require:true,
    },
    cost:{
        type:String,
        require:true,
    },
    terms:{
        type:String,
        require:true
    }
})
const policy=mongoose.model('policy',policySchema)
export default policy