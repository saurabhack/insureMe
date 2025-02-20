import express from "express"
import mongoose from "mongoose"
import Router from "./Router/registerUser.js"
import cors from "cors"
const app=express()
const port=3000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use("/",Router)
app.listen(port,()=>{
    console.log(`server is listening on the port of http://localhost:${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/insurance').then(()=>{
    console.log("Mongodb connected successfully")
}).catch((error)=>{
    console.error(error)
})
