import express from "express";
import { updateDoctor,deleteDoctor,getSingleDoctor,getAllDoctor } from "../controllers/DoctorController.js";
import { authenticate,restrict } from "../auth/Verifytoken.js";
import reviewRouter from "./Review.js";
const router = express.Router();
router.use("/:doctorId/review",reviewRouter)

router.get("/:id",getSingleDoctor)
router.get("/",getAllDoctor)
router.delete("/:id",authenticate,restrict(["doctor"]),deleteDoctor)
router.put("/:id",authenticate,restrict(["doctor"]),updateDoctor)
export default router;