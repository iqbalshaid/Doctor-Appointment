import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../layout/Layout";
import axios from "axios";
const Logout = ()=>{
    const {state,dispatch} = useContext(userContext)
    const navigate = useNavigate();
    useEffect( ()=>{
        console.log("hello world");
         axios.get("http://localhost:8000/api/auth/logout").then((res)=>{
            dispatch({type:"USER",payload:false});
            alert("you have successfully logout");
               navigate("/login");
               
               if(!res.status===200){
                res.send("your are not logout ");
               }
        }).catch((err)=>{
            console.log(err);
        })
    })
    return (
        <>
            <h1>hello world</h1>
        </>
    )
}
export default Logout;