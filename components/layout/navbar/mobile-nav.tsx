"use client"

import { NavLinks } from "@/constant/constant"
import Link from "next/link"
import { X } from "lucide-react"

const MobileNav = ({openNav,closeNav}:{openNav:boolean,closeNav:()=>void}) => {

  return (
    <div className={`fixed inset-0 z-[10000] lg:hidden transition-opacity duration-300 
      ${openNav ? "opacity-100 visible" : "opacity-0 invisible"}
    `}>

      {/* overlay */}
      <div 
        className="absolute inset-0 dark:bg-black/60 bg-white"
        onClick={closeNav}
      ></div>

      {/* sidebar */}
      <div className={`absolute right-0 top-0 h-screen w-80 bg-blue-500
      transform transition-transform duration-600
      ${openNav ? "translate-x-0" : "translate-x-full"}
      `}>

        <X
          className="absolute top-6 right-6 text-white cursor-pointer"
          onClick={closeNav}
        />

        <div className="flex flex-col items-center justify-center h-full gap-10">
          {NavLinks.map((link,index)=>(
            <Link key={index} href={link.href} onClick={closeNav}>
              <p className="text-2xl text-white hover:text-sky-300">
                {link.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MobileNav