import express from "express"
import mongoose from "mongoose"
import Router from "./Router/registerUser.js"
import cors from "cors"
const app=express()
const port=3000
import { fileURLToPath } from "url";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const phone_pe_hostUrl=""
app.use(express.json())
const allowedOrigins = [
    "http://localhost:5173", 
    "http://localhost:5174"
];

app.use(cors({
    origin: allowedOrigins,  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
}));
const imageDirectory='/home/saurabh/insure/insureMe/Backend/Router/uploads'
app.use("/uploads", express.static(imageDirectory));

app.use("/",Router)
app.listen(port,()=>{
    console.log(`server is listening on the port of http://localhost:${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/insurance').then(()=>{
    console.log("Mongodb connected successfully")
}).catch((error)=>{
    console.error(error)
})
