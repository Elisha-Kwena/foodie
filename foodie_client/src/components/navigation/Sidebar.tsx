"use client"

import { getCurrentYear } from "../../../dateutils"

import { useSidebar } from "@/contexts/SidebarContext"
import Image from "next/image"
import Link from "next/link"
import { navlinks } from "@/constants/Navigation"
import { usePathname } from "next/navigation"
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LocalMallIcon from '@mui/icons-material/LocalMall';


import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
export default function Sidebar(){
    const currentYear = getCurrentYear()
    const {isOpen,toggleSidebar} = useSidebar()
    const pathname = usePathname()
    return(
        <>
            <aside className={`z-100 hidden fixed md:flex flex-col gap-1 top-1 rounded-md p-2 bg-white md:left-1 -left-2 bottom-1 text-white transform transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 w-72' : '-translate-x-full w-16'} md:translate-x-0 z-20`}>
              <div className="top w-full flex items-center justify-start gap-1 p-0 ">
                  <div className="w-14 h-14 relative flex items-cente">
                      <Image
                          src="/icons/logo.png"
                          alt="afyaaxis logo"
                          fill
                          className="object-contain object-center"
                      />
                  </div>
                  <h1 className={`text-[38px] font-['Impact'] capitalize transition-all text-[orangered] duration-1000 ease-in-out ${isOpen?"visible":"hidden"}`}>foodie</h1>
              </div>
              <div className="flex-1 w-full flex flex-col gap-1">
                {navlinks.map((link,index)=>{
                  const ItemIcon = link.icon
                  return(
                    <Link key={index} href={link.href} className={`font-bold font-mono capitalize flex items-center gap-2 transitin-all duration-500 hover:text-white hover:bg-[orangered] rounded ${pathname === link.href ? "bg-[orangered] text-white":"bg-transparent text-gray-600"} p-1 ${isOpen ? "justify-start":"justify-center"}`}>
                        <div className={`w-8 h-8 relative rounded overflow-hidden p-1 `}>
                          <ItemIcon className="text-gray-500 "/>
                        </div>
                        <span className={`transition-all font-sans text-sm duration-1000 ease-in-out ${isOpen ?"visible":"hidden"}`}>{link.label}</span>
                    </Link>
                  )
                })}
                <button className={`text-gray-600 cursor-pointer font-bold font-mono capitalize flex items-center  gap-2 transitin-all duration-500 hover:text-white hover:bg-[orangered] rounded p-1 ${isOpen ? "justify-start":"justify-center"}`}>
                        <div className="w-8 h-8 relative rounded overflow-hidden p-1">
                          <LogoutRoundedIcon className="text-gray-500 "/>
                        </div>
                        <span className={`transition-all duration-1000 font-sans ease-in-out text-sm ${isOpen ? "visible":"hidden"}`}>Logout</span>
                </button>
              </div>
              <div className={`w-full flex flex-col transition-all duration-700 ease-in-out ${isOpen ?"h-1/3":"h-16"}`}>
                <div className="w-full flex relative overflow-hidden flex-1">
                      <Image
                          src="/icons/logo.png"
                          alt="foodie logo"
                          fill
                          className="object-contain object-left"
                      />
                </div>
                
                <div className={`w-full mt-2 transition-all duration-700 ease-in-out ${isOpen?"visible":"hidden"}`}>
                    <p className="text-[orangered] text-sm"><span className="font-extrabold">Foodie</span>  Delicacies at your Doorstep</p>
                    <p className="text-[orangered] text-sm">&copy;{currentYear} All rights reserved</p>
                </div>
              </div>
              <button onClick={toggleSidebar} className={`cursor-pointer text-[orangered] hover:text-white hover:bg-[orangered] w-full flex items-center justify-center transition-all duration-700 ease-in-out rounded bg-gray-500 p-2 ${isOpen?"hidden":"visible"}`}>
                <DoubleArrowRoundedIcon/>
              </button>
            </aside>
            <aside className={`z-100 fixed h-screen flex md:hidden flex-col gap-1 top-1 rounded-md p-2 bg-white -bottom-2 text-white transform transition-all duration-700 ease-in-out w-82 md:translate-x-0  ${isOpen ? "-left-88":"left-0"}`}>
              <div className="w-full flex items-center justify-between">
                <div className="top w-full flex items-center justify-start gap-1 p-0 ">
                    <div className="w-14 h-14 relative flex items-cente">
                        <Image
                          src="/icons/logo.png"
                          alt="afyaaxis logo"
                          fill
                          className="object-contain object-center"
                        />
                    </div>
                    <h1 className={`text-[38px] font-['Impact'] capitalize transition-all text-[orangered] duration-1000 ease-in-out`}>foodie</h1>
                </div>
                <button onClick={toggleSidebar} className={`cursor-pointer text-[orangered] hover:text-white hover:bg-[orangered] w-10 h-10 flex items-center justify-center transition-all duration-700 ease-in-out rounded bg-gray-500`}>
                  <CloseRoundedIcon className="text-[orangered text-[30px]!"/>
                </button>
              </div>
              <div className="flex-1 w-full flex flex-col gap-1">
                {navlinks.map((link,index)=>{
                  const ItemIcon = link.icon
                  return(
                    <Link key={index}
                      href={link.href}
                      onClick={toggleSidebar}
                      className={`font-bold font-mono capitalize flex items-center justify-start gap-2 transitin-all duration-500 hover:text-white hover:bg-[orangered] rounded ${pathname === link.href ? "bg-[orangered] text-white":"bg-transparent text-gray-600"} p-2`}>
                        <div className={`w-10 h-10 relative rounded overflow-hidden p-1 `}>
                          <ItemIcon className="text-gray-500 "/>
                        </div>
                        <span className={`transition-all font-sans duration-1000 ease-in-out`}>{link.label}</span>
                    </Link>
                  )
                })}
                <Link 
                href="/cart" 
                onClick={toggleSidebar}
                className={`p-2 cursor-pointer text-gray-600 font-bold font-mono capitalize flex items-center justify-start gap-2 transitin-all duration-500 hover:text-white hover:bg-[orangered] rounded`}>
                    <div className="w-10 h-10 relative rounded overflow-hidden p-1">
                        <LocalMallIcon className="text-gray-500 "/>
                    </div>
                    <span className={`transition-all font-sans duration-1000 ease-in-out`}>Cart</span>
                </Link>
                <button className={`p-2 cursor-pointer text-gray-600 font-bold font-mono capitalize flex items-center justify-start gap-2 transitin-all duration-500 hover:text-white hover:bg-[orangered] rounded`}>
                    <div className="w-10 h-10 relative rounded overflow-hidden p-1">
                        <LogoutRoundedIcon className="text-gray-500 "/>
                    </div>
                    <span className={`transition-all font-sans duration-1000 ease-in-out`}>Logout</span>
                </button>
              </div>
              <div className={`w-full h-72 flex flex-col transition-all duration-700 ease-in-out`}>
                <div className="w-full flex relative overflow-hidden flex-1">
                      <Image
                          src="/icons/logo.png"
                          alt="foodie logo"
                          fill
                          className="object-contain object-center"
                      />
                </div>
                
                <div className={`w-full mt-2 transition-all duration-700 ease-in-out`}>
                    <p className="text-[orangered] text-sm"><span className="font-extrabold">Foodie</span>  Delicacies at your Doorstep</p>
                    <p className="text-[orangered] text-sm">&copy;{currentYear} All rights reserved</p>
                </div>
              </div>
              <button onClick={toggleSidebar} className={`cursor-pointer text-[orangered] hover:text-white hover:bg-[orangered] w-full flex items-center justify-center transition-all duration-700 ease-in-out rounded bg-gray-500 ${isOpen?"max-h-0 p-0":"max-h-8 p-1"}`}></button>
            </aside>
        </>
    )
}