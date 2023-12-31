import Doctor from "../models/DoctorSchema.js"
export const updateDoctor = async (req,res)=>{
    const id = req.params.id;
    try{
        const updateDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true,message:"Successfully updated",data:updateDoctor})
    }
    catch(err){
        res.status(500).json({success:false,message:"failed to updated"})

    }
}
export const deleteDoctor = async (req,res)=>{
    const id = req.params.id;
    try{
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully deleted"})
    }
    catch(err){
        res.status(500).json({success:false,message:"failed to delete"})

    }
}
export const getSingleDoctor = async (req,res)=>{
    const id = req.params.id;
    try{
        const doctor = await Doctor.findById(id).populate("review").select("-password");
        res.status(200).json({success:true,message:"user found",data:doctor})
    }
    catch(err){
        res.status(500).json({success:false,message:"no user found"})

    }
}
export const getAllDoctor = async (req,res)=>{
    const id = req.params.id;
    try{
        const {query} = req.query;
        let doctors;
        if(query){
            doctors = await Doctor.find({isApproved:"approved",$or:[{name:{$regex:query,$options:"i"}},
            {specialization:{$regex:query,$options:"i"}}],
        }).select("-password");
        }
        else{
         doctors = await Doctor.find({isApproved:"approved"}).select("-password");}
        res.status(200).json({success:true,message:"users found",data:doctor})
    }
    catch(err){
        res.status(500).json({success:false,message:"users not found"})

    }
}
