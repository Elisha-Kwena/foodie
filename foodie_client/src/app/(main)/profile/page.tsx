"use client"

import { useState } from "react"
import Image from "next/image"
import { useSidebar } from "@/contexts/SidebarContext"
import Link from "next/link"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import PersonalInfo from "@/components/pages/profile/Personal"

export default function UserProfile(){
    const {isOpen} = useSidebar()
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const toggleSidebarOpen = () =>{
        setSidebarOpen((prev) =>!prev)
    }
    
    return(
        <>
            <div className={`bg-gray-200 md:pt-16 pt-14 transition-all duration-700 ease-in-out ${isOpen?"md:ml-84 ml-0":"ml-0 md:ml-18"}`}>
                <div className={`bg-gray-200 flex flex-col gap-2 md:fixed right-1 md:overflow-auto md:pb-22 transition-all duration-700 ease-in-out ${isOpen?"md:left-84 left-0":"md:left-18 left-0"}`}>
                    <div className="mx-auto w-full md:w-[80%] flex flex-col md:flex-row items-start justify-between gap-4 p-1 h-[calc(100vh-56px)] md:h-screen">
                        {/* sidebar */}
                        <div className={`w-3/4 md:w-[30%] fixed md:relative md:flex flex-col items-start rounded shadow bg-white md:h-full h-screen p-2 transition-all duration-700 ease-in-out z-50 ${sidebarOpen ? "left-0 md:clear-left":"-left-[500px] md:left-0"}`}>
                            <div className="w-full h-46 relative rounded-full ">
                                <Image
                                    src="/images/user.png"
                                    fill
                                    alt="user"
                                    className="object-center object-contain"
                                />
                                <button
                                onClick={toggleSidebarOpen}
                                className="absolute md:hidden w-10 h-10 rounded bg-gray-500 top-0 right-0 flex items-center justify-center">
                                    <CloseRoundedIcon className="text-orange-600 text-[28px]!"/>
                                </button>
                            </div>
                            <div className="w-full">
                                <h1 className="text-black font-extrabold text-[20px] text-center">RedHat_109</h1>
                                <h1 className="text-orange-600 font-extrabold text-[14px] text-center">Cashier</h1>
                            </div>
                            <div className="w-full mt-4 flex flex-col gap-2">
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <AccountCircleRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Personal Information</span>
                                </button>
                                <Link href="/home" className="w-full block bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white items-center justify-start gap-3 group">
                                    <LocalMallRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Cart</span>
                                </Link>
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <LockRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Reset Password</span>
                                </button>
                                <button className="group w-full cursor-pointer bg-gray-200 shadow-inset p-2 rounded-full font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white flex items-center justify-start gap-3">
                                    <LogoutRoundedIcon className="text-black group-hover:text-white"/>
                                    <span className="transition-all duration-500 ease-in-out">Logout</span>
                                </button>
                            </div>
                        </div>

                        {/* contents */}
                        <div className="flex-1 flex flex-col items-start rounded shadow bg-white w-full h-full md:px-4 px-2 py-2">
                            <div className="w-full flex items-center justify-start">
                                <button
                                onClick={toggleSidebarOpen}
                                className="cursor-pointer flex md:hidden items-center justify-center hover:text-orange-600">
                                    <WidgetsRoundedIcon className="text-[30px]!"/>
                                </button>
                            </div>
                            <div className="w-full flex-1 overflow-y-auto md:mt-4">
                                <PersonalInfo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}