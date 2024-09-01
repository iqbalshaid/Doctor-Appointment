import React from "react";
import Faqitems from "./Faqitems"
import { Faqs } from "../../assets/data/Faqs";
const Faqlist = ()=>{
    return (
    <>
    <ul className="mt-[38px]">
        {Faqs.map((item,index)=><Faqitems item = {item} key = {index} />)}
    </ul>
        </>

    )
}
export default Faqlist;