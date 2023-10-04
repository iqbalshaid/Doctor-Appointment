import Booking from "../models/BookingSchema.js"
export const Bookingapp  = async (req,res)=>{
    const {name,doctor,patient,appointmentDate} = req.body;
    console.log(name);
    try{
        //console.log("inside thr try block");
    let booking = null;
    booking = await Booking.findOne({name});
    console.log(booking);
    if(booking){
        res.status(400).send("you book your appointmnet before anytime If you want to rebook the appointment please select the new date,new doctor and problem");
        
    }
    console.log("start");
    booking = new Booking({
        name,
        doctor,
        patient,
        appointmentDate

    })
    
     booking.save();
    res.status(200).send("your appointment are book");
}
catch(err){
    res.status(500).send("anything error");
}

}