import React from "react";
const SidePanel = ()=>{
    return (
        <div className="shadow-panelshadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="mt-0 font-semibold text-[16px] text-black">Ticket Price</p>
                <span className="text-[14px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold">
                    500 BDT
                </span>
            </div>
            <div className="mt-[30px]">
                <p className="mt-0 font-semibold text-[16px] text-black">
                    Available Time Slots
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between">
                    <p className="mt-0 font-semibold text-[16px] text-black">
                    Sunday
                </p>
                <p className="mt-0 font-semibold text-[16px] text-black">
                    4:00 PM - 9:30 PM
                </p>
                    </li>
                    <li className="flex items-center justify-between">
                    <p className="mt-0 font-semibold text-[16px] text-black">
                    Sunday
                </p>
                <p className="mt-0 font-semibold text-[16px] text-black">
                    4:00 PM - 9:30 PM
                </p>
                    </li>
                    <li className="flex items-center justify-between">
                    <p className="mt-0 font-semibold text-[16px] text-black">
                    Monday
                </p>
                <p className="mt-0 font-semibold text-[16px] text-black">
                    4:00 PM - 9:30 PM
                </p>
                    </li>
                    <li className="flex items-center justify-between">
                    <p className="mt-0 font-semibold text-[16px] text-black">
                    Tuesday
                </p>
                <p className="mt-0 font-semibold text-[16px] text-black">
                    4:00 PM - 9:30 PM
                </p>
                    </li>
                </ul>
            </div>
            <button className="px-2 w-full rounded-md">Book Appointment</button>
        </div>

    )
}
export default SidePanel;