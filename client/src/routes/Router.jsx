import React from "react";
import Home from "../pages/Home";
import Service from "../components/service/Servicelist";
import Login from "../pages/Login"
import Signin from "../pages/Signin";
import Contactus from "../pages/Contactus";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
import Readmore from "../pages/Readmore";
import Appointment from "../pages/Appointment";
import Logout from "../pages/Logout";
import { Routes,Route } from "react-router-dom";
import  Location  from "../pages/Location";
const Router = ()=>{
    return (
        <>
            <Routes>
                <Route exact path = "/" element = {<Home />}>                <Route exact path = "/home" element = {<Home />}/>
                <Route exact path = "/service" element = {<Service />}/>
                <Route exact path = "/login" element = {<Login />}/>
                <Route exact path = "/register" element = {<Signin />}/>
                <Route exact path = "/appointment" element = {<Appointment />} />
                <Route exact path = "/readmore" element = {<Readmore />} />
                <Route exact path = "/contactus" element = {<Contactus />}/>
                <Route exact path = "/doctors" element = {<Doctors />}/>
                <Route exact path = "/location" element = {<Location />} />
                <Route exact path = "/doctors/:id" element = {<DoctorDetails />}/>
                <Route exact path = "/logout" element = {<Logout />}/>
                </Route>

                
            </Routes>
        </>
    )
}
export default Router;