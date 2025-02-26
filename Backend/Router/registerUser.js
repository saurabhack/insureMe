import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Import controllers
import registerUser from "../controller/ registerUser.js"
import contact from "../controller/contact.js";
import loginUser from "../controller/loginUser.js";
import decoding from "../controller/decoding.js";
import forgatePassword from "../controller/forgatePassword.js";
import resetPassword from "../controller/resetPassword.js";
// import addPolicies from "../controller/addPolicies.js";
import policiesData from "../controller/policiesData.js";
import getByIdPolicies from "../controller/getByIdPolicies.js";
import history from "../controller/history.js";
import fetchHistory from "../controller/fetchHistory.js";
import policyBuyers from "../controller/policyBuyers.js";
import allUsers from "../controller/allUsers.js";
import fetchAllBuyers from "../controller/fetchAllBuyers.js";
import createUser from "../controller/createUser.js";
import createPolicies from "../controller/createPolicies.js";

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the "uploads" directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });  // Creates uploads directory if missing
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);  // Ensure files are saved in "uploads"
    },
    filename: (req, file, cb) => {  
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const uploadDir1 = path.join(__dirname, "claims");
if (!fs.existsSync(uploadDir1)) {
    fs.mkdirSync(uploadDir1, { recursive: true });  // Creates uploads directory if missing
}

// Configure Multer for file uploads
const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);  // Ensure files are saved in "uploads"
    },
    filename: (req, file, cb) => {  
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const claims = multer({ storage });
// Initialize Express Router
const Router = express.Router();

// Define Routes
Router.post("/signUp", registerUser);
Router.post("/contact", contact);
Router.post("/login", loginUser);
Router.post("/decoding", decoding);
Router.post("/forgatepass", forgatePassword);
Router.post("/resetPassword/:email", resetPassword);
// Router.post("/addPolicy", addPolicies);
Router.get("/allPolicies", policiesData);
Router.get("/getPolicyById/:id", getByIdPolicies);
Router.post("/addHistory/:id", history);
Router.get("/history/:email", fetchHistory);
Router.post("/policyBuy", policyBuyers);
Router.get("/AllUsers", allUsers);
Router.get("/activePolicies", fetchAllBuyers);
Router.post("/createUser", createUser);
Router.post("/createPolicies", upload.single("document"), createPolicies);

// Export Router
export default Router;
