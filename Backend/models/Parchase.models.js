import mongoose from "mongoose"
const ParchasedSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        required:true
    },
    monthlyIncreament:{
        type:String,    
    },
    percentageOfIncreament:{
        type:String,
    }
})
const Parchase=mongoose.model('Parchase',ParchasedSchema)
export default Parchase