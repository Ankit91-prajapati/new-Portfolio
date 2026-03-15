"use client"
import { NavLinks } from "../../../constant/constant";
import Logo from "../../helper/logo";

import Link from "next/link";
import ThemeToggler from "../../theme/theme-toggler";
import {  DownloadIcon, MenuIcon, } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";

const Nav = () => {
  const [openNav, setOpenNav] =useState<boolean>(false)
  const[navBg , setNavBg] =useState(false)
  useEffect(()=>{
   const bgHandler =()=>{
    if(window.scrollY>=90) setNavBg(true)
      if(window.scrollY<90) setNavBg(false)
   }
  window.addEventListener("scroll",bgHandler)
  return ()=>window.removeEventListener("scroll",bgHandler)
  }, [])
  return (
    <>  <div className={`transition-all ${navBg?"dark:bg-gray-800 shadow-md":"fixed"} duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Logo />

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-black dark:text-white hover:text-sky-300 dark:hover:text-orange-400 font-semibold transition-all duration-500 rounded"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-3">
            <button className="px-8 py-3.5 text-lg cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-800 transition-all duration-200 text-white flex items-center space-x-2 h-13">
              <DownloadIcon className="w-5 h-5"/>
              <span>Download CV</span>
            </button>
            <ThemeToggler/>
            <MenuIcon className=" transition-transform hover:scale-120 lg:hidden " onClick={()=>setOpenNav(true)}/>
        </div>
      </div>
    </div>

    {openNav && <MobileNav closeNav = {()=>setOpenNav(false)} openNav ={openNav} />}
    </>
  
  );
};

export default Nav;