import express from "express"
import registerUser from "../controller/ registerUser.js"
import  contact  from "../controller/contact.js"
import loginUser from "../controller/loginUser.js"
import decoding from "../controller/decoding.js"
import forgatePassword from "../controller/forgatePassword.js"
import resetPassword from "../controller/resetPassword.js"
import addPolicies from "../controller/addPolicies.js"
import policiesData from "../controller/policiesData.js"
import getByIdPolicies from "../controller/getByIdPolicies.js"
import history from "../controller/history.js"
import fetchHistory from "../controller/fetchHistory.js"
import policyBuyers from "../controller/policyBuyers.js"
const Router=express.Router()
Router.post("/signUp",registerUser)
Router.post("/contact",contact)
Router.post("/login",loginUser)
Router.post("/decoding",decoding)
Router.post("/forgatepass",forgatePassword)
Router.post("/resetPassword/:email",resetPassword)
Router.post("/addPolicy",addPolicies)
Router.get("/allPolicies",policiesData)
Router.get("/getPolicyById/:id",getByIdPolicies)
Router.post("/addHistory/:id",history)
Router.get("/history/:email",fetchHistory)
Router.post("/policyBuy",policyBuyers)
export default Router