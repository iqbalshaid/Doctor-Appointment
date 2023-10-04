import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "../backend/routes/Auth.js"
import bookingRoute from "../backend/routes/BookinRoute.js"
import userRoute from "../backend/routes/UserRoute.js"
import doctorRoute from "../backend/routes/DoctorRoute.js"
import reviewRoute from "../backend/routes/Review.js"
dotenv.config()
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // set the allowed HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"], // set the allowed request headers
    exposedHeaders: ["Content-Disposition"], // set the exposed response headers
    credentials: true, // set to true to enable sending cookies cross-origin
}
//database connection
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("database was connected")
    }catch(err){
        console.log("database was disconnected");

    }
}
app.get("/",(req,res)=>{
    res.send("api is working");
})
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/doctor",doctorRoute);
app.use("/api/booking",bookingRoute);
app.use("/api/review",reviewRoute)
app.listen(port,()=>{
    connect();
    console.log("hello how are you")
})
