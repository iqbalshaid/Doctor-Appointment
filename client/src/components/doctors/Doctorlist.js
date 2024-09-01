import React from "react";
import Doctorcards from "./Doctorcards"
import { Doctor } from "../../assets/data/Doctor";

const Doctorlist = ()=>{
    return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {Doctor.map((doctor,index) =><Doctorcards doctor = {doctor} index = {index} key = {doctor.id} />)}

    </div>
        </>

    )
}
export default Doctorlist;