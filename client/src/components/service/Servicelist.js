import React from "react";
import Servicecard from "./Servicecard";
import { Services } from "../../assets/data/Services";
const Servicelist = ()=>{
    return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {Services.map((items,index) =><Servicecard items = {items} index = {index} key = {index} />)}

    </div>
        </>

    )
}
export default Servicelist;