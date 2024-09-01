import React, { createContext, useReducer } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import  Router from "../routes/Router";
import { initialState,reducer } from "../UserContext";
export const userContext = createContext();
const Layout = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <>
        <userContext.Provider value={{state,dispatch}}>
         <Header />
         <Router />
         </userContext.Provider>
         <Footer />
        </>
    )
}
export default Layout;