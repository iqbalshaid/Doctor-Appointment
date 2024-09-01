import React from "react";
import Doctorcards from "../../components/doctors/Doctorcards"
import Testimonial from "../../components/Testimonial";
import { Doctor } from "../../assets/data/Doctor";

const Doctors = ()=>{
    return (
        <>
            <section className="bg-[#fff9ea]">
                <div className="container text-center">
                    <h2 className="text-xl text-center font-extrabold text-black">Find a Doctor</h2>
                    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                        <input
                        type="text"
                        className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-black"
                        placeholder="Search Doctor"
                        />
                        <button className="bg-blue-400 text-base ml-[250px] md:ml-[100px] xl:-[200px] lg:ml-[180px] py-4 px-6  text-white font-extrabold flex items-center 
                        justify-center rounded-full mt-0  rounded-r-md">Search</button>
                    </div>
                </div>
            </section>
            <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {Doctor.map((doctor,index) =><Doctorcards doctor = {doctor} index = {index} key = {doctor.id} />)}

    </div>
   
            </section>
            <section>
            <div>
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="text-xl text-center font-extrabold text-black">What Our Patients say</h2>
                    <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                                  
                </div>
                <Testimonial />
              </div>
            </section>
        </>
    )
}
export default Doctors;