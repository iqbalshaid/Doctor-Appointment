import express from "express";
import Review from "../models/ReviewSchema.js"
import {createReview,getAllReview} from "../controllers/ReviewController.js"
import { authenticate,restrict } from "../auth/Verifytoken.js";
const router = express.Router({mergeParams:true});

router.get("/",authenticate,restrict(["patient"]),getAllReview)

router.post("/",authenticate,restrict(["patient"]),createReview)
export default router;