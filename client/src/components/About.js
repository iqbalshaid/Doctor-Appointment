import React from "react";
import { Link } from "react-router-dom";


import doctor1 from "../assets/images/doctor1.webp"
import doctor2 from "../assets/images/doctor2.webp"
const About = ()=>{
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0  flex-col lg:flex-row">
                        <div className="relative flex flex-col w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                            <img src = {doctor1} alt = ""  />
                            
                        </div>
                    
                    <div className="w-full lg:w-1/2 xl:w-[670px]  order-1 lg:order-2">
                        <h2 className="text-black text-3xl font-extrabold">Proud to be one of the Nations best</h2>
                        <p className="mt-[10px] text-black text-base font-light">for 30 years India news and world Report has recognized as <br />
                        as one of the best policies hospital in the nation and #1 in <br />
                        Texas.lorem has the fan of the world and most beautiful places<br />
                        are there.</p>
                        <p className="mt-[30px] text-black text-base font-light">for successfully treatment and policies are there in our hospital <br />
                        as one of the best policies hospital in the nation and #1 in <br />
                        Texas.lorem has the fan of the world and most beautiful places<br />
                        are there.</p>
                        <Link to = "/readmore">
                            <button className="bg-blue-400 text-base  py-2 px-6 mt-6 text-white font-extrabold flex items-center h-[44px]
                        justify-center rounded-full">Read More</button>
                        </Link>
                    
                    </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default About;