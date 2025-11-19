"use client"
import Image from "next/image"
import { useSidebar } from "@/contexts/SidebarContext"

import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import SocialLinks from "@/components/pages/support/Social";
import ContactForm from "@/components/pages/support/ContactForm";

export default function Support(){
    const {isOpen} = useSidebar()
    return(
        <>
            <div className={`min-h-screen bg-gray-200 md:pt-16 pt-12 transition-all duration-700 ease-in-out ${isOpen?"md:ml-74 ml-0":"ml-0 md:ml-18"}`}>
                <div className={`bg-gray-200 flex flex-col h-full gap-2 md:fixed right-1 md:pb-17 md:overflow-auto transition-all duration-700 ease-in-out ${isOpen?"md:left-74 left-0":"md:left-18 left-0"}`}>

                    {/* contact div - full height on mobile only */}
                    <div className="px-2 md:px-0 w-full md:h-full bg-white shadow md:rounded md:flex-row flex-col-reverse flex items-center justify-start gap-4 pb-4 md:pb-0">
                        <div className="w-full md:w-[5%] h-full">
                            <SocialLinks/>
                        </div>
                        <div className="w-full md:w-[35%] h-full flex items-center justify-center py-4 md:py-0">
                            <div className="w-full">
                                <h1 className="uppercase text-black font-extrabold text-2xl md:text-4xl md:text-left text-center">Contact Us</h1>
                                <p className="uppercase text-black font-bold text-md md:text-lg md:mt-6 mt-2 md:text-left text-center">DROP A MESSAGE</p>
                                <div className="w-full md:mt-0 mt-4">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:flex-1 h-64 md:h-full">
                            <div className="w-full h-full relative">
                                <Image src="/images/contact.png" fill alt="contact" className="object-contain object-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}