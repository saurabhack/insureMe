import express from "express"
import registerUser from "../controller/ registerUser.js"
import  contact  from "../controller/contact.js"
import loginUser from "../controller/loginUser.js"
import decoding from "../controller/decoding.js"
import forgatePassword from "../controller/forgatePassword.js"
import resetPassword from "../controller/resetPassword.js"
const Router=express.Router()

Router.post("/signUp",registerUser)
Router.post("/contact",contact)
Router.post("/login",loginUser)
Router.post("/decoding",decoding)
Router.post("/forgatepass",forgatePassword)
Router.post("/resetPassword/:email",resetPassword)

export default Router