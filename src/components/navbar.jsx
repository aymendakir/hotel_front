"use client";
import Logo from "./Logo";
import React, {useEffect, useState} from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import Authuser from "@/api/Authuser.js";
import axios from "axios";

export default function Navbar() {
    const [isactiv, setIsactiv] = useState(false);
    const [isactiv2, setIsactiv2] = useState(false);
    const [navacc, setNavacc] = useState(false);
    const [navacc2, setNavacc2] = useState(false);
    const [profil, setProfil] = useState(false);

    const { http } = Authuser();

    axios.defaults.withCredentials=true;
    const [name,setName]=useState()

const handlelogout=()=>{
        http.get("/logout").then(res=>{
                location.reload(true)

        }
        ).catch(err=>{
            console.log(err)
        })
}

    useEffect(() => {
        http.get("/")
            .then((res) => {
                if (res.data.Status === "Success"){
                    setName(res.data.name)
                    setNavacc(true)
                    setNavacc2(false)
                }
                else {
                    setNavacc2(true)
                    setNavacc(false)
                }
            })
            .catch(err=>console.log(err))
    }, );
    return (
        <>
            {navacc &&(
                /**************************nav client is login*****************************/

                <nav className="w-[80%] flex justify-between items-center mt-5  pb-5 mx-auto font_home">

                <Logo/>
                <div className="flex space-x-10 md:space-x-14 items-center">
                    <ul className="  md:hidden flex space-x-12 items-center  font_home  ">
                        <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-[1.5px] after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500 transition-all duration-1000  before:right-0 hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-black  hover:before:bottom-0 ">
                            <Link to="/">home</Link>
                        </li>

                        <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-0.5 after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500 transition-all duration-1000  before:right-0 hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-black  hover:before:bottom-0 ">
                            <Link to="/Contact_us">Contact us</Link>
                        </li>
                    </ul>
                    <ul className="md:space-x-3  flex space-x-7 items-center -ml-14">
                        <li className="text-3xl cursor-pointer text-black/60">
                            <Link to="/Cart">
                                <AiOutlineShoppingCart/>
                            </Link>
                        </li>

<li className="relative" >
    <div className="cursor-pointer" onClick={e => {
        e.preventDefault();
        if (profil===false) {

            setProfil(true)
        }
        else {
            setProfil(false)
        }
    }}>
<img className=" w-9 h-9 rounded-full bg-black" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" />
    </div>
    { profil &&(
    <div className="absolute right-0 z-30 bg-white w-[270px] h-[300px] shadow-md shadow-black/30 rounded-md  flex flex-col items-center">
       <div className="absolute top-0 uppercase pt-3 bg-zinc-400/40 w-full flex justify-center  ">
           <p>my account</p>
       </div>
        <div className="mt-14 mb-7 w-[80%]">
            <button className="w-[100%]  ">
            <p className="capitalize p-2 rounded-sm text-start font-medium text-black hover:bg-gray-600/15 hover:text-blue-600 hover:underline">Profile</p>
            </button>
        </div>
        <button className="p-3 hover:bg-blue-600 rounded-md w-[80%] border-2 border-blue-500 hover:text-white " onClick={handlelogout}>
            <span className="uppercase font-medium text-md ">sign out</span>
        </button>

    </div>)}
</li>




                        {isactiv2 && (
                            <div id="profileshow" className=" ">
                                {name}
                            </div>
                        )}
                    </ul>
                </div>
            </nav>)}
            {navacc2 && (
                /**************************nav client is not login*****************************/

                <nav className="w-[80%] flex justify-between items-center mt-5  pb-5 mx-auto">
                <Logo/>
                <div className="flex space-x-10 md:space-x-14 items-center">
                    <ul className="  md:hidden flex space-x-12 items-center  font_home  ">
                        <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-[1.5px] after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500 transition-all duration-1000  before:right-0 hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-black  hover:before:bottom-0 ">
                            <Link to="/">home</Link>
                        </li>

                        <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-0.5 after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500 transition-all duration-1000  before:right-0 hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-black  hover:before:bottom-0 ">
                            <Link to="/Contact_us">Contact us</Link>
                        </li>

                        <li className="  text-blue-400 font-medium px-3 py-1.5  rounded-md hover:bg-blue-300 hover:text-amber-50 cursor-pointer text-lg ">
                            <Link to="/Login">Sign in</Link>
                        </li>
                        <li className="  capitalize px-3 py-2  text-blue-400 font-semibold border-2 border-blue-400 rounded-md hover:bg-blue-300 hover:text-black cursor-pointer">
                            <Link to="/creataccount"> create account</Link>
                        </li>
                    </ul>
                    <ul className="md:space-x-3  flex space-x-7 items-center -ml-14">
                        <li className="text-3xl cursor-pointer text-black/60">
                            <Link to="/Cart">
                                <AiOutlineShoppingCart/>
                            </Link>
                        </li>
                        <li
                            className="text-3xl cursor-pointer"
                            onClick={() => {
                                if (window.innerWidth <= 980) {
                                    setIsactiv(!isactiv);
                                    setIsactiv2(false);
                                } else if (window.innerWidth >= 981) {
                                    setIsactiv2(!isactiv2);
                                    setIsactiv(false);
                                }
                                /*************************************nabscrol**************************************/
                            }}
                        >
                            <RxHamburgerMenu/>
                        </li>

                        {isactiv && (
                            /**************************nav parameter*****************************/

                            <div
                                id="naviconmob"
                                className=" md:absolute md:w-full md:h-full md:top-0 md:right-0 md:border-2 md:bg-[#F9F8F8] z-20 md:flex flex-col  hidden   "
                            >
                                <div
                                    className="md:top-0 text-webkit-right md:mt-2 md:mr-2 md:text-5xl cursor-pointer md:block hidden "
                                    onClick={(e) => setIsactiv(false)}
                                >
                                    <MdOutlineClose/>
                                </div>
                                <div className="flex flex-col justify-center items-center w-full ">
                  <span className="uppercase text-start py-1.5 bg-gray-300 w-full font-semibold pl-1.5 ">
                    sign in
                  </span>
                                    <Link
                                        to=""
                                        className="font-medium border-2 borde_color my-8 px-24 py-1.5 rounded-lg bg-bg"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to=""
                                        className="font-medium border-2 borde_color mb-8 px-24 py-1.5 rounded-lg text-white bg-bgr"
                                    >
                                        Create account
                                    </Link>
                                    <span
                                        className="uppercase text-start py-1.5 bg-gray-300 w-full font-semibold pl-1.5">
                    settings
                  </span>
                                </div>
                            </div>
                        )}

                        {isactiv2 && (
                            <div id="profileshow" className=" ">
                                person
                            </div>
                        )}
                    </ul>
                </div>
            </nav>)}

        </>
    );
}
