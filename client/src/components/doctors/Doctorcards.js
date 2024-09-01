import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import star from "../../assets/images/Star.png"
import logo from "../../assets/images/logo.png"
const Doctorcards = ({doctor,index})=>{
    const {name,
    speciality,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital} = doctor;
    
return (
    <>
    <div className="p-3 lg:p-5">
    <div>
        <img src = {photo} alt = "" />
        </div>
    
    <h2 className="text-xl text-center font-extrabold text-black mt-4">{name}</h2>
    <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-blue-400 py-1 px-2 lg:py-2 lg:px-6 text-[18px] rounded font-semibold lg:text-[16px] lg:leading-7">{speciality}<img src ={logo} alt = "" /></span>
        <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[14px] lg:leading-7
            font-semibold text-black"><img src = {star} alt = "" />{avgRating}</span>
            <span className="text-[14px] leading-6 lg:text-[14px] lg:leading-7
            font-[400] text-black">{totalRating}</span>
        </div>
    </div>
    <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
            <h2 className="text-[14px] leading-6 lg:text-[14px] lg:leading-7
            font-[400] text-black">{totalPatients}Patients</h2>
            <p className="text-[14px] leading-6 font-normal text-black">{hospital}</p>
        </div>
        <Link to = "/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-b-black
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none">
                                   <BsArrowRight className="group-hover:text-white w-6 h-4" /> 
                                  </Link>
    </div>
    </div>
    </>

)
}
export default Doctorcards;