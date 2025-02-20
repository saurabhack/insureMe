import express from "express"
import registerUser from "../controller/ registerUser.js"
import  contact  from "../controller/contact.js"
const Router=express.Router()

Router.post("/signUp",registerUser)
Router.post("/contact",contact)

export default Router