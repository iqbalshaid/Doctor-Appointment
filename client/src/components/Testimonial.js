import React from "react";
import {Pagination} from "swiper/modules"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";

import {HiStar} from "react-icons/hi"
import patient from "../assets/images/patient.jpg"
const Testimonial = ()=>{
    return(
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper modules={{Pagination}} spaceBetween={30} slidesPerView={1} pagination = {{clickable:true}}
            breakpoints={{
                640:{
                    slidesPerView:1,
                    spaceBetween:0,
                },
                768:{
                    slidesPerView:2,
                    spaceBetween:20,
                },
                1024:{
                    slidesPerView:3,
                    spaceBetween:30,
        
            },
            }}>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = ""  className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">Rohan Khan</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = "" className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">Yathesth choudary</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and  
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = "" className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">Harsh singh</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and  
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = "" className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">sonu kumar</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and  
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = "" className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">Md shajid iqbal</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and  
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src = {patient} alt = "" className="w-[30%] rounded-full"/>
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-black">Aman ansari</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                            <HiStar className = "text-yellow-600 w-[18px] h-5" />
                        </div></div>
                    </div>
                    <p className="text-[16px] text-black leading-7 mt-4 font-[400]">I have taken medical services from them. They treat so well and  
                    they are providing the best medical services</p>
                </div>
            </SwiperSlide>


            </Swiper>
        </div>
        

    )
}
export default Testimonial;