import React, { useState } from "react";
import Doctors from "./Doctors"
import FeedBack from "./FeedBack";
import star from "../../assets/images/Star.png"
import doctor from "../../assets/images/doctor.png"
const DoctorDetails = ()=>{
    const [tab,setTab] = useState();
    return (
        <>
            <section>
                <div className="max-w-[1170px] px-5 mx-auto">
                    <div className="grid md:grid-cols-3 gap-[50px]">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-5">
                                <figure className="max-w-[200px] max-h-[200px]">
                                    <img src = {doctor} alt = "" />
                                </figure>
                            
                            <span className="bg-[#CCF0F3] text-blue-300 py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                            leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">Surgeon</span>
                            <h3 className="text-blacktext-[22px] leading-9 mt-3 font-bold"> Dr.Hitesh sharma</h3>
                            <div className="flex items-center gap-[6px]">
                                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                                lg:leading-7 font-semibold text-black">
                                    <img src = {star} alt = "" />4.8
                                </span>
                                <span className="text-[14px] leading-5 lg:text-[16px]
                                lg:leading-7 font-semibold text-black">(272)</span>
                            </div>
                            <p className="text-[14px] leading-5 md:text-[15px] max-w-[390px]">lorem is a one of the most movement and doctor are used original toolkittext
                            </p>
                            </div>
                            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                                <button
                                onClick={()=>setTab('about')}
                                className="py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold">
                                    About
                                </button>
                                <button
                                onClick={()=>setTab('feedback')}
                                className="py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold">
                                    FeedBack
                                </button>
                            </div>
                            <div className="mt-[50px]">
                                {tab === "about" && <Doctors />}
                                {tab === "feedback" && <FeedBack />}
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>
        </>
    )
}
export default DoctorDetails;