import express from "express"
import mongoose from "mongoose"

const app=express()
const port=3000



app.listen(port,()=>{
    console.log(`server is listening on the port of http://localhost:${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/insurance').then(()=>{
    console.log("Mongodb connected successfully")
}).catch((error)=>{
    console.error(error)
})
