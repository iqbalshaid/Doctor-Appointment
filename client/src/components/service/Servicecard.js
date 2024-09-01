import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Servicecard = ({items,index})=>{
    const {name,desc,bgcolor,textcolor,photo} = items;
    return(
        <div className="py-[30px] px-3 lg:px-5">
        <img src = {photo} alt = "" className="w-full rounded-full text-center shadow-md"/>
            <h2 className="text-xl text-center font-extrabold text-black">{name}</h2>
            <p className="text-center mt-1 text-[15px] text-black">{desc}</p>
            <div className="flex items-center justify-between mt-[30px]">
            <Link to = "/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-b-black
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none">
                                   <BsArrowRight className="group-hover:text-white w-6 h-4" /> 
                                  </Link>
            <span className="w-[44px] h-[44px] flex items-center justify-between text-[18px] leading-[30px] font-semibold"
            style = {{
                background:'${bgcolor}',
                color:'${textcolor}',
                borderRadius:"6px 0 0 6px",
            }}></span>
            </div>
        </div>

    )
}
export default Servicecard;