"use client"

import { useState } from "react"
import { useSidebar } from "@/contexts/SidebarContext"
import Special from "@/components/pages/home/Banner"
import { categories } from "@/constants/Categoies"
import Image from "next/image"
export default function Home(){
    const {isOpen} = useSidebar()

    const [selectedCategory, setSelectedCategory] = useState<string | null>("all")

    const selectCategory = (category:any) =>{
        console.log("clicked category", category)
        setSelectedCategory(category.label)
    }

    return(
        <>
            <div className={`md:min-h-screen bg-gray-200 md:pt-16 overflow-scroll transition-all duration-700 ease-in-out ${isOpen?"md:ml-74 ml-0ss":"ml-0 md:ml-18"}`}>
                <div className="w-full h-full flex items-start justify-between gap-1">
                    <div className="w-full md:w-[70%] h-full overflow-scroll">
                        <Special/>
                        <div className="w-full flex flex-col gap-1 mt-4">
                            <h1 className="text-[orangered] text-md font-bold">Choose from popular categories</h1>
                            <div className="w-full shadow rounded bg-white flex flex-wrap items-center justify-between gap-4 p-1">
                                {categories.map((cat,index)=>(
                                    <button
                                    onClick={selectCategory}
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
                    </div>

                    {/* cart div */}
                    <div className="md:w-[30%] h-full flex z-100 bottom-14 top-px"></div>
                </div>
            </div>
        </>
    )
}