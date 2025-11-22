"use client"

import { useState } from "react"
import { useSidebar } from "@/contexts/SidebarContext"
import Special from "@/components/pages/home/Banner"
import { categories } from "@/constants/Categoies"
import Image from "next/image"

import Foods from "@/components/pages/home/Foods"
import Cart from "@/components/pages/home/Cart"

import Footer from "@/components/pages/home/footer"

export default function Home(){
    const {isOpen} = useSidebar()
    const [selectedCategory, setSelectedCategory] = useState<string | null>("all")

    const selectCategory = (category:any) =>{
        console.log("clicked category", category)
        setSelectedCategory(category.label)
    }

    return(
        <>
            <div className={`min-h-screen bg-gray-200 md:pt-16 pt-14 transition-all duration-700 ease-in-out ${isOpen?"md:ml-74 ml-0":"ml-0 md:ml-18"}`}>
                <div className="w-full flex flex-col md:flex-row items-start gap-1 pb-1">
                    {/* foods container - scrollable */}
                    <div className="w-full md:w-[70%] flex flex-col gap-4">
                        <div className="shrink-0">
                            <Special/>
                        </div>
                        <div className="shrink-0 w-full flex flex-col gap-1 mt-2 px-0.5">
                            <h1 className="text-[orangered] text-md font-bold">Choose from popular categories</h1>
                            <div className="w-full shadow rounded bg-white flex flex-wrap items-center justify-between gap-4 p-1">
                                {categories.map((cat,index)=>(
                                    <button
                                    onClick={() => selectCategory(cat)}
                                    key={index} className={`flex items-center justify-between gap-2 p-1 rounded group cursor-pointer transition-all duration-300 ease-in-out hover:bg-[orangered] ${selectedCategory === cat.label?"bg-[orangered]":"bg-transparent"}`}>
                                        <div className="w-6 h-6 rounded bg-gray-300 relative">
                                            <Image
                                                src={cat.icon}
                                                alt={cat.label}
                                                fill
                                                className="object-contain object-center"
                                            />
                                        </div>
                                        <span className={`text-black font-bold capitalize group-hover:text-white transition-all duration-300 ease-in-out text-sm ${selectedCategory === cat.label ?"text-white":"text-black"}`}>{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* food stuffs - this is the scrollable part */}
                        <div className="w-full overflow-y-auto grow px-0.5">
                            <Foods/>
                        </div>

                        <div className="w-full">
                            <Footer/>
                        </div>
                    </div>

                    {/* cart div - fixed */}
                    <div className="hidden md:block md:w-[30%] sticky top-16 pb-1 h-[calc(100vh-4rem)] px-1">
                        <div className="w-full h-full">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}