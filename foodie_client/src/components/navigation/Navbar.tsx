"use client"
import { useSidebar } from "@/contexts/SidebarContext"
import Search from "./Search"
import Link from "next/link"
import Image from "next/image"
// import { useCart } from "@/contexts/CartContext"
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
export default function Navbar(){
    const {isOpen,toggleSidebar} = useSidebar()
    // const {isCartOpen,toggleCart} = useCart()
    return(
        <>
            <header className={`z-100 fixed shadow grid place-items-center h-14 md:top-1 p-2 bg-white md:rounded md:right-1 right-0 transition-all duration-700 ease-in-out ${isOpen ?"left-0 md:left-74":"left-0 md:left-18"}`}>
                <nav className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center justify-start gap-2">
                        <button onClick={toggleSidebar} className="group cursor-pointer relative rounded overflow-hidden p-1 ">
                            <SpaceDashboardRoundedIcon className="text-[orangered] text-[34px]! group-hover:text-black"/>
                        </button>
                        <Search/>
                        <button className="flex items-center justify-center md:hidden w-10 h-10 rounded-full bg-[orangered] p-1">
                            <SearchRoundedIcon className="text-white text-[28px]!"/>
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-6">
                        {/* <Link href="" className="flex items-center justify-start gap-2 group">
                            <div className="w-8 h-8 relative rounded-full bg-gray-400">
                                <Image 
                                    src="/icons/logo.png"
                                    alt="user avatar"
                                    fill
                                    className="object-cover object-center rounded-full"
                                />
                                <div className="absolute w-3 h-3 rounded-full top-0 right-0 bg-green-500"></div>
                            </div>
                            <p className="font-sans group-hover:text-[orangered] text-black font-bold">RedHat_109</p>
                        </Link> */}
                        <Link href="/signup" className="text-orange-600 font-bold font-sans flex items-center justify-start gap-1">
                            <LoginRoundedIcon/>
                            <span>SignUp</span>
                        </Link>
                        <div className="flex items-center justify-between gap-4">
                            <button className="w-8 h-8 flex items-center justify-center rounded relative">
                                <ForumRoundedIcon className="text-gray-500 text-[28px]!"/>
                                <div className="absolute w-3 h-3 rounded-full -top-1 right-0 bg-red-500"></div>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded relative">
                                <NotificationsRoundedIcon className="text-yellow-500 text-[28px]!"/>
                                <div className="absolute w-3 h-3 rounded-full -top-1 right-0 bg-red-500"></div>
                            </button>
                        </div>
                        
                    </div>
                    
                </nav>
            </header>
        </>
    )
}