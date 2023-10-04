import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    phone:{type:Number},
    photo:{type:String},
    ticketprice:{type:Number},
    role:{
        type:String,
    },
    specialization:{type:String},
    qualification:{type:Array},
    experience:{type:Array},
    bio:{type:String,maxlength:50},
    about:{type:String},
    timeSlots:{type:Array},
    reviews:[{type:mongoose.Types.ObjectId,ref:"Review"}],
    averageRating:{type:String,
        default:0,
    },
    totalRating:{type:String,
        default:0,
    },
    subject:{type:String,
    required:true,},
    message:{type:String,
    required:true,},
    isApproved:{type:String,
        enum:["pending","approved","cancelled"],
        default:"pending",
    },
    appointments:[{type:mongoose.Types.ObjectId,
        ref:"Appointment"
    }],
    

});
export default mongoose.model("Doctor",DoctorSchema);