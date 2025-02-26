import mongoose from "mongoose";
const AdminSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
const Admin=mongoose.model("Admin",AdminSchema)
export default Admin