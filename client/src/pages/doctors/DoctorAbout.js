import React from "react";
import { formateDate } from "../../utils/formateDate";
const DoctorAbout = ()=>{
    return (
        <div className="container">
            <div>
                <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">About used<span className="text-blue-300
                font-bold text-[24px] leading-9">Md Shahid Iqbal</span></h3>
                <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health
                                 Systems Offers unmatchedlorem ipsum how are you toady is a good day,also have a nice day and along with the people<br />
                           also have a nice day and along with the people lorem ipsum how are you toady is a good day<br />
                           are enjoy so much then we are show happy lorem ipsum how are you toady is a good day<br />
                           also have nice day expert health care</p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">Education</h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-blue-300 text-[15px] leading-6 font-semibold">{formateDate('12-10-2020') - formateDate('22-10-2020')}</span>
                            <p className="text-center mt-1 text-[15px] text-black">PHD in Surgeon</p>
                        </div>
                        <p className="text-center mt-1 text-[15px] text-black">New TATA Memorial Hospital,New Mumbai</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-blue-300 text-[15px] leading-6 font-semibold">{formateDate('12-10-2020') - formateDate('22-10-2020')}</span>
                            <p className="text-center mt-1 text-[15px] text-black">PHD in Surgeon</p>
                        </div>
                        <p className="text-center mt-1 text-[15px] text-black">New TATA Memorial Hospital,New Mumbai</p>
                    </li>

                </ul>
            </div>
            <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">Experience</h3>  
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-white">
                    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">{formateDate('12-10-2020') - formateDate('22-10-2020')}</span>
                    <p className="text-center mt-1 text-[15px] text-black">sr. Surgeon</p>
                    <p className="text-center mt-1 text-[15px] text-black">New TATA Memorial Hospital,New Mumbai</p>
                </li>
                <li className="p-4 rounded bg-white">
                    <span className="text-yellow-400 text-[15px] leading-6 font-semibold">{formateDate('12-10-2020') - formateDate('22-10-2020')}</span>
                    <p className="text-center mt-1 text-[15px] text-black">sr. Surgeon</p>
                    <p className="text-center mt-1 text-[15px] text-black">New TATA Memorial Hospital,New Mumbai</p>
                </li>
            </ul>
            </div>
        </div>

    )
}
export default DoctorAbout;