import React from "react";

import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import About from "../components/About";
import Servicelist from "../components/service/Servicelist";
import doctor3 from "../assets/images/doctor4.webp"
import Faqlist from "../components/fag/Faqlist";
import Testimonial from "../components/Testimonial";
import Doctorlist from "../components/doctors/Doctorlist";
import doctor from "../assets/images/doctor.png"
import doctor1 from "../assets/images/doctor1.webp"
import doctor2 from "../assets/images/doctor3.jpg"
import location from "../assets/images/icon01.png"
import  Location1  from "../assets/images/icon02.png";
import  Location2  from "../assets/images/icon03.png";
import avtar from "../assets/images/avatar-icon.png"
import star from "../assets/images/Star.png"
import patient from "../assets/images/patient.jpg"



const Home = ()=>{
    return (
        <>
            <section className="hero_section pt-[60px] 2xl:h-[800px]">
            <div className="container" >
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                    <div>
                     <div className="pl-12 lg:w-[570px]">
                        <h1 className = "text-[36px] leading-9 text-green-300 font-extrabold  sm:text-[40px] md:text-[60px] md:leading-[70px]">We help a patients lives a healthy,
                        Longer life</h1>
                        <p className="text-black text-xs mt-4">lorem ipsum how are you toady is a good day,also have a nice day and along with the people<br />
                           also have a nice day and along with the people lorem ipsum how are you toady is a good day<br />
                           are enjoy so much then we are show happy lorem ipsum how are you toady is a good day<br />
                           also have nice day</p>
                           <Link to = "/appointment">   <button className="bg-blue-300 px-8 mt-5 text-xl py-6 rounded-full text-white hover:bg-red-600 hover:text-black lg:px-5 lg:py-3">Request an Appointment</button></Link>
                     </div>
                     <div className="pl-12 mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center lg:gap-[30px]">
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">30+</h2>
                        <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Years of Experience</p>
                     </div>
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">15+</h2>
                        <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Clinic Location</p>
                     </div>
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">100%</h2>
                        <span className="w-[100px] h-2 bg-green-400 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Patient Satisfaction</p>
                     </div>



                     </div>
                    </div>
                    <div className="flex gap-[30px] justify-end">
                        <div>
                            <img src = {doctor} alt = "" className="w-full"/>
                        </div>
                        <div className="mt-[30px]">
                        <img src = {doctor1} alt = "" className="w-full mb-[30px]"/>
                        <img src = {doctor2} alt = "" className="w-full mb-[30px]"/>
                        </div>
                    </div>
                </div>
            </div>
                
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="text-center mt-6 text-3xl font-extrabold text-black">Providing the best medical Services</h2>
                        <p className="text-center mt-2 text-lg text-black">WorldClass care for everyone.Our Health Systems Offers unmatched
                        expert health care</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                            <img src = {location} alt = "" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className = "text-xl text-center font-extrabold text-black">Find a Doctor</h2>
                                <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health<br/>
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                                  <Link to = "/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-b-black
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none">
                                   <BsArrowRight className="group-hover:text-white w-6 h-4" /> 
                                  </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                            <img src = {Location1} alt = "" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className = "text-xl text-center font-extrabold text-black">Find a Location</h2>
                                <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health<br/>
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                                  <Link to = "/location" className="w-[44px] h-[44px] rounded-full border border-solid border-b-black
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none">
                                   <BsArrowRight className="group-hover:text-white w-6 h-4" /> 
                                  </Link>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src = {Location2} alt = "" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className = "text-xl text-center font-extrabold text-black">Book Appointment</h2>
                                <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health<br/>
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                                  <Link to = "/appointment" className="w-[44px] h-[44px] rounded-full border border-solid border-b-black
                                  mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none">
                                   <BsArrowRight className="group-hover:text-white w-6 h-4" /> 
                                  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="text-xl text-center font-extrabold text-black">Our Medical Services</h2>
                    <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                </div>
                <Servicelist />
            </div>

            </section>
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        <div className="xl:w-[670px] mt-12">
                            <h2 className="text-xl text-center font-extrabold text-black">Get Virtual Treatment <br /> AnyTime</h2>
                            <ul className="pl-4">
                                <li className="text-center mt-1 text-[15px] text-black">
                                    1.Schedule the Appointment directly
                                </li>
                                <li className="text-center mt-1 text-[15px] text-black">
                                    2.Search for your physician here, and contact their office.
                                </li>
                                <li className="text-center mt-1 text-[15px] text-black">
                                    3.View our physicians who are accepting new patients,use the <br />
                                    online scheduling tool to select an Appointment time.
                                </li>
                               
                            </ul>
                            <Link to = "/readmore" ><button className="bg-blue-400 text-base ml-[250px] md:ml-[100px] xl:ml-[200px] lg:ml-[180px] py-2 px-6 mt-6 text-white font-extrabold flex items-center h-[44px]
                        justify-center rounded-full sm:ml-[100px] sm:text-[10px]">Learn More</button></Link>
                        </div>
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src = {doctor3} alt = ""  className=" w-3/4"/>
                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20
                            p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600]">Tue,24</p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[400]">10:00AM</p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-300 rounded py-1 px-[6px] lg:py-3
                                     lg:px-[9px]">
                                        <img src = {star} alt = "" />
                                     </span>
                                </div>
                                <div className="w-[65px] lg:w-[96px] bg-lime-400 py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
                                leading-[8px] lg:text-[17px] lg:leading-4 text-blue-700 font-medium mt-2 lg:mt-4 rounded-full">
                                    Consulation
                                </div>
                                <div className=" flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[10px]">
                                    <img src = {avtar} alt = "" />
                                    <h2 className="text-[14px] text-black font-bold">Dr.Shanshak sharma</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="text-xl text-center font-extrabold text-black">Our Great Doctors</h2>
                    <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                </div>
                <Doctorlist />
        
                </div>
            </section>
            {/*-- faq section--*/}
            <section>
                <div className="cotainer">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block"><img src = {patient} alt = "" /></div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl text-center font-extrabold text-black">Most question by our believed patient </h2>
                            <Faqlist />
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="text-xl text-center font-extrabold text-black">What Our Patients say</h2>
                    <p className="text-center mt-1 text-[15px] text-black">WorldClass care for everyone.Our Health
                                 Systems Offers unmatched<br/>
                                  expert health care</p>
                                  
                </div>
                <Testimonial />
              </div>
            </section>
        </>
    )
}
export default Home;