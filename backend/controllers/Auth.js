import User from "../models/UsersSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Review from "../models/ReviewSchema.js"
import Booking from "../models/BookingSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
const generatetoken = user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY ,{
        expiresIn:"30d",
    })
}
export const register = async (req,res)=>{
    const {email,password,name,role,photo,gender} = req.body;
    /*console.log(email);
    console.log(password);*/
   // console.log(role);
    //console.log(gender);
    try{
        console.log("inside try block");
        let user = null;
        if(role === "patient"){
             user = await User.findOne({email});
            }
        
        else if(role === "doctor"){
            user = await Doctor.findOne({email})
        }
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        if(role === "patient"){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role,
                //subject:"some subject",
                //message:"some message"
            })
            //console.log(user);
        }
        if(role === "doctor"){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role,
                subject:"some subject",
                message:"some message"
            })
        }
        //console.log("before await statement")
         user.save();
        //console.log("after await statement")
        res.status(200).send("User Successfully register")
    }
    catch(err){
    res.status(500).json({success:false,message:"user not registered successfully"})
    }
}
export const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        let user = null;
        const patient = await User.findOne({email});
        
        const doctor = await Doctor.findOne({email});
        if(patient){
            user = patient;
            
        }
        if(doctor){
            user = doctor;
        }
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password,user.password);

        if(!isPasswordMatch){
            return res.status(404).json({status:false,message:"user password is incorrect"})
        }
        //get token
        const token = generatetoken(user);
        const {password,role,appointments,...rest} = user._doc;
        res.status(200).json({status:true,message:"Successfully Login",token,data:{...rest},role});

    }
    catch(err){
        res.status(500).json({status:false,message:"failed to login"});
        
    }
}
export const contact = async (req,res)=>{
    const{email,subject,message,role} = req.body;
   //console.log(email);
    //console.log(subject);
    try{
        console.log("inside the try blog");
        let user = null;
        
        if(role ==="patient"){
          user =  await User.findOne({email});
        //console.log(user);
     }
        if(role ==="doctor"){
            user =  await Doctor.findOne({email});;
        }
        if(user){
            console.log("hello");
          res.status(400).send("your contact detail already present");
    }
    if(role === "patient"){
    user = new User({
        email,
        subject,
        message,
        role
    });
}
    //console.log(user);
    else if(role === "doctor"){
       // console.log(role);
    user = new Doctor({
        email,
        subject,
        message,
        role,
       
    })
    //console.log(user);
}
    //console.log(user);
     user.save();
     //console.log("after save");
     
    res.status(200).send("your contact detail inserted successfully");
    //console.log("before save");
}

catch(err){
    console.log("kon hai be");
    res.status(500).send(err);

    }
}
