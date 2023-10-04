import express from "express"
import { Bookingapp } from "../controllers/BookingController.js";
const router = express.Router();
router.post("/",Bookingapp);
console.log("data are post");
export default router;
