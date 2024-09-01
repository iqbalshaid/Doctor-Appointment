import React, { useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
import avtar from "../../assets/images/avatar-icon.png"
const FeedBack = ()=>{
    const [showFeedbackForm,setShowFeedbackForm] = useState(false);
    return (
        <>
            <div className="container">
                <div className="mb-[50px]">
                    <h4 className="text-[20px] leading-[30px] font-bold text-black mb-[30px]">
                        All reviews (272)
                    </h4>
                    <div className="flex justify-between gap-10 mb-[30px]">
                        <div className="flex gap-3">
                            <figure className="w-10 h-10 rounded-full"><img src = {avtar} alt = "" /></figure>
                            <div>
                                <h5 className="text-[16px] leading-6 text-blue-700 font-bold">
                                    Md Shahid Iqbal
                                </h5>
                                <p className="text-[14px] leading-6 text-black">{formateDate("10-10-2023")}</p>
                                <p className="mt-3 font-medium text-[15px]">Good  Services.highly recommended</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(5).keys()].map((_,index) => {
                                <AiFillStar key = {index} color = "#0067FF" />
                            })}
                        </div>
                    </div>
                </div>
              {!showFeedbackForm &&   <div className="text-center"><button  onClick = {()=>setShowFeedbackForm(true) } className="bg-blue-300 px-8 mt-5 text-xl py-6 rounded-full text-white hover:bg-red-600 hover:text-black lg:px-5 lg:py-3">Give FeedBack</button></div>}
              {showFeedbackForm && <FeedbackForm />}
            </div>
        </>

    )
}
export default FeedBack;