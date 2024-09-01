import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const FeedbackForm = ()=>{
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const [reviewText,setReviewText] =  useState("");
    const handleSubmitReview = async (e)=>{
        e.preventDefault();
    }
    return (
        <>       
         <form action="">
            <div className="container">
                <h3 className="
                    text-black text-[16px] leading-6 font-semibold mb-4">
                    Now would you rate the overall experience
                </h3>
                <div>
                    {[...Array(5).keys()].map((_,index)=>{
                        index += 1;
                        return(
                            <button
                            key = {index}
                            type="button"
                            className= "bg-transparent border-none outline-none text-[22px] cursor-pointer"
                            onClick={()=>setRating(index)} onMouseEnter = {()=>setHover(index)} onMouseLeave = {(setHover(rating))}
                            onDoubleClick = {()=>{setHover(0);
                            setRating(0);}}>
                            
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
)
                    })}
                </div>
                <textarea 
                className="border border-solid border-[#0066ff34] focus:outline outline-blue-300 w-full px-4 py-3 rounded-md" 
                rows="5"
                onChange={(e)=>setReviewText(e.target.value)}></textarea>
            </div>
            <button type="submit" onClick={handleSubmitReview} className="bg-blue-300 px-8 mt-5 text-xl py-6 rounded-full text-white hover:bg-red-600 hover:text-black lg:px-5 lg:py-3">Submit FeedBack</button>
        </form>
        </>


    )
}
export default FeedbackForm;