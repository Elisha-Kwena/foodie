"use client"
import Image from "next/image"
import Link from "next/link"
import { useSidebar } from "@/contexts/SidebarContext"
import { useState } from "react"

// Mock data for daily specials
import { dailySpecials } from "@/data/foods"
import Footer from "@/components/pages/home/footer"

export default function Special(){
    const {isOpen} = useSidebar()
    const [selectedCategory, setSelectedCategory] = useState("All")
    
    const categories = ["All", "Italian", "Japanese", "French", "Mexican", "Indian"]

    return(
        <>
            <div className={`min-h-screen  md:pt-16 pt-12 transition-all duration-700 ease-in-out ${isOpen?"md:ml-74 ml-0":"ml-0 md:ml-18"}`}>
                <div className={`flex flex-col h-full gap-2 pr-1 pl-1 md:pl-0 transition-all duration-700 ease-in-out ${isOpen?"md:left-74 left-0":"md:left-18 left-0"}`}>
                    
                    {/* Header Section */}
                    <div className="bg-gradient-to-r bg-orange-600 rounded text-white py-12 px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Today's Specials</h1>
                            <p className="text-xl md:text-2xl text-orange-100 mb-6">Exclusive deals crafted by our master chefs</p>
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
                                <span className="text-orange-100 font-semibold">Limited Time Offer • 20% OFF All Specials</span>
                            </div>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="bg-white py-3 rounded px-4 shadow-sm">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? "bg-orange-500 text-white shadow-lg"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Specials Grid */}
                    <div className="w-full md:max-w-6xl mx-auto md:px-4 px-1 md:py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dailySpecials.map(special => (
                                <div key={special.id} className="bg-white rounded shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

                                    {/* Discount Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                            SAVE Ksh {(special.originalPrice - special.price).toFixed(2)}
                                        </span>
                                    </div>

                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={special.image}
                                            alt={special.name}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-orange-500 font-semibold text-sm">{special.category}</span>
                                            
                                        </div>

                                        {/* Title and Description */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{special.name}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{special.description}</p>

                                        {/* Tags */}
                                        {/* <div className="flex flex-wrap gap-2 mb-4">
                                            {special.tags.map(tag => (
                                                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div> */}

                                        {/* Price and Calories */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-gray-900">Ksh {special.price.toFixed(2)}</span>
                                                <span className="text-lg text-gray-400 line-through">Ksh {special.originalPrice.toFixed(2)}</span>
                                            </div>
                                            {/* <span className="text-gray-500 text-sm">🔥 {special.calories} cal</span> */}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                                                Add to Cart
                                            </button>
                                            <button className="flex-1 bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                                                Order Now
                                            </button>
                                            {/* <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <Footer/>
                </div>
            </div>
        </>
    )
}