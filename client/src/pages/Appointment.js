import React, { useState } from "react";
import appointment from "../assets/images/appointment.webp"
import axios from "axios";
const Appointment = ()=>{
    const [formData,setFormData] = useState({
        name:"",
        doctor:"",
        appointmentdate:"",
        patient:"",
    });
    
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
            await axios.post("http://localhost:8000/api/booking",formData)
            .then(response=>{alert("your appointment are book");}).catch(err=>{alert(err)});

    }
    return (
        <>
        <section className="px-5 lg:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className=" lg:block bg-blue-600 rounded-l-lg">
                        <figure className="rounded-l-lg">
                            <img src = {appointment} alt = "" />
                        </figure>
                    </div>
                    <div className="rounded-l-lg lg:pl-16 py-10">
                        <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
                        Book for an <span className="text-blue-600 ">Appointment</span></h3>
                        <form  method = "post" onSubmit={handleSubmit}>
                        <div className="mb-5">
                        <input type="name" placeholder="Enter Your name" name = "name" value={formData.name}
                           onChange={handleInputChange}
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input type="text" placeholder="Enter Doctor Name" name = "doctor" value={formData.doctor}
                           onChange={handleInputChange}
                        
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <textarea type="text" placeholder="Patient Problem" name = "patient " value={formData.patient}
                           onChange={handleInputChange}
                        
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            
                        ></textarea>
                    </div>
                    
                    <div className="mb-5">
                    <label htmlfor="appointmentdate">Appointment Date:</label> 
                    <input type = "date" name = "appointmentdate"  value={formData.appointmentdate}  onChange={handleInputChange}/> 
                    </div>
                  <div className="mt-7">
                  <button type="submit" className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg
                        px-4 py-3">Book</button>
                    </div>
                  
                  
                        </form>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Appointment;