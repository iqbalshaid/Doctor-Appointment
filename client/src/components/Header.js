import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useEffect,useRef} from "react";
import logo from "../assets/images/logo.png"
import doctor from "../assets/images/doctor.png"
import {BiMenu} from "react-icons/bi"
import { userContext } from "../layout/Layout";

const navlinks = [
    {
        path:"/home",
        display:"Home"
    },
    {
        path:"/doctors",
        display:"Find a Doctor"
    },
    {
        path:"/service",
        display:"Services"
    },
    {
        path:"/contactus",
        display:"Contact"
    },
]
const Header = ()=>{
    const {state,dispatch} = useContext(userContext);
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const handleStickyHeader = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
            }

        })
    }
    useEffect(()=>{
        handleStickyHeader()
        return ()=>window.removeEventListener('scroll',handleStickyHeader)

    })
    const toggleMenu = ()=>menuRef.current.classList.toggle('show_menu')
   const RenderMenu = ()=>{
    if(state){
        console.log("how are you");
        return (
            <>
        <Link to = "/logout">
        <button className="bg-red-200 text-base  py-2 px-6 mt-6 text-white font-extrabold flex items-center h-[44px]
        justify-center rounded-full  hover:bg-red-600 hover:text-black">Logout</button>
    </Link>
    </>
        )
   
    }
    else{
        return (
            <>
        <Link to = "/login">
        <button className="bg-red-200 text-base  py-2 px-6 mt-6 text-white font-extrabold flex items-center h-[44px]
        justify-center rounded-full  hover:bg-red-600 hover:text-black">Login</button>
    </Link>
    </>
        )
   
    }
   }
    return (
        <header className="heading " ref = {headerRef}>
        <div className="container fixed">
            <div className="flex items-center justify-between  ">
                <div className = "">
                    <img src = {logo} alt = ""/>
                </div>
                
                <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                    <ul className = "menu flex items-center gap-16  no-underline ">
                        {
                            navlinks.map((source,index)=><li key = {index} >
                                <Link to = {source.path}  className=" text-red-300 list-none text-base leading-4  font-bold hover:bg-blue-400 hover:text-white hover:rounded-full"
                                >{source.display}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-4 ">
                    <div>
                        <Link to = "/home">
                            <figure className = "w-9 h-9 rounded-full">
                                <img src = {doctor} alt = "" />
                            </figure>
                        </Link>
                    </div>
                    <RenderMenu />
                    <span className="md:hidden" onClick={toggleMenu}>
                    <BiMenu className = "w-6 h-6 cursor-pointer" />
                        
                    </span>
                
            </div>
        </div>
        </div>

    
        </header>
    )
}
export default Header;