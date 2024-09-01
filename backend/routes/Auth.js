import express from "express"
import { register,login,contact } from "../controllers/Auth.js";
import jwt from "jsonwebtoken"
const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.post("/contact",contact);
router.get("/logout",(req,res)=>{
    //console.log("how are you");
    res.clearCookie(jwt,{path:"/"});
    res.status(200).send("you are logout");
})
export default router;
