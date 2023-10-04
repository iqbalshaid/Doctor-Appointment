import User from "../models/UsersSchema.js";
export const updateUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({success:true,message:"Successfully updated",data:updateUser})
    }
    catch(err){
        res.status(500).json({success:false,message:"failed to updated"})

    }
}
export const deleteUser = async (req,res)=>{
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully deleted"})
    }
    catch(err){
        res.status(500).json({success:false,message:"failed to delete"})

    }
}
export const getSingleUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findById(id).select("-password");
        res.status(200).json({success:true,message:"user found",data:user})
    }
    catch(err){
        res.status(500).json({success:false,message:"no user found"})

    }
}
export const getAllUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.find({}).select("-password");
        res.status(200).json({success:true,message:"users found",data:user})
    }
    catch(err){
        res.status(500).json({success:false,message:"users not found"})

    }
}
