import FoodCard from "@/components/ui/cards/FoodCard"
import { useSidebar } from "@/contexts/SidebarContext"
import { foodies } from "@/data/foods"

import special1 from "../../../../public/special/beef.jpeg"
import Image from "next/image"
import Link from "next/link"
import { dailySpecials } from "@/data/foods"

export default function Foods(){
    const {isOpen} = useSidebar()
    
    // Determine the breakpoints for showing special food divs
    const firstBreakpoint = isOpen ? 8 : 10
    const secondBreakpoint = isOpen ? 16 : 20
    
    // Check if we have enough items to show the special divs
    const showFirstSpecial = foodies.length > firstBreakpoint
    const showSecondSpecial = foodies.length > secondBreakpoint
    
    return(
        <>
            <div className="w-full pt-8">
                <div className={`w-full`}>
                    {foodies.length > 1 ? (
                        <div className={`w-full grid gap-4 ${isOpen ?"md:grid-cols-4 gap-y-12 grid-cols-2":"md:grid-cols-5 grid-cols-2 gap-y-10"}`}>
                            {/* First part of foods */}
                            {foodies.slice(0, firstBreakpoint).map((food,index) => (
                                <FoodCard 
                                    key={index}
                                    id={food.id}
                                    label={food.label}
                                    banner={food.banner}
                                    price={food.price}
                                    category={food.category}
                                />
                            ))}
                            
                            {/* First Special Food Promotion - Only show if we have enough items */}
                            {showFirstSpecial && (
                                <div className={`${isOpen ? "md:col-span-4" : "md:col-span-5"} col-span-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 md:p-6 text-white shadow-lg`}>
                                    {dailySpecials.slice(-1).map((food, index) => (
                                        <div key={index} className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 h-auto md:h-48">
                                            {/* Image Section */}
                                            <div className="w-full md:w-48 h-48 md:h-full relative overflow-hidden rounded-lg">
                                                <Image 
                                                    src={food.image} 
                                                    fill 
                                                    alt="special" 
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            
                                            {/* Content Section */}
                                            <div className="flex-1 w-full text-center md:text-left">
                                                <h3 className="text-xl md:text-2xl font-bold mb-2">🔥 Today's Special</h3>
                                                <h1 className="font-extrabold text-yellow-300 text-lg md:text-2xl mb-2 md:mb-3">{food.name}</h1>
                                                <p className="text-orange-100 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                                                    {food.description}
                                                </p>
                                                
                                                {/* Price Section */}
                                                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 md:mb-4">
                                                    <p className="text-2xl md:text-3xl font-bold">Ksh {food.price.toFixed(2)}</p>
                                                    <span className="px-3 py-1 rounded-full bg-white text-orange-600 text-xs md:text-sm font-bold">
                                                        SAVE Ksh {(food.originalPrice-food.price).toFixed(2)}
                                                    </span>
                                                </div>
                                                
                                                {/* Action Buttons */}
                                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 md:gap-3">
                                                    <button className="w-full sm:w-auto bg-orange-600 px-4 py-2 md:py-3 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 text-sm md:text-base">
                                                        Add to Cart
                                                    </button>
                                                    <button className="w-full sm:w-auto bg-yellow-500 px-4 py-2 md:py-3 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 text-sm md:text-base">
                                                        Order Now
                                                    </button>
                                                    <Link 
                                                        href="/special" 
                                                        className="w-full sm:w-auto bg-white px-4 py-2 md:py-3 text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base text-center"
                                                    >
                                                        View All Specials
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {/* Second part of foods - Only show if we have items after first breakpoint */}
                            {foodies.slice(firstBreakpoint, showSecondSpecial ? secondBreakpoint : undefined).map((food,index) => (
                                <FoodCard 
                                    key={firstBreakpoint + index}
                                    id={food.id}
                                    label={food.label}
                                    banner={food.banner}
                                    price={food.price}
                                    category={food.category}
                                />
                            ))}
                            
                            {/* Second Special Food Promotion - Only show if we have enough items */}
                            {showSecondSpecial && (
                                <div className={`${isOpen ? "md:col-span-4" : "md:col-span-5"} col-span-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 md:p-4 text-white shadow-lg`}>
                                    {dailySpecials.slice(1,2).map((food, index) => (
                                        <div key={index} className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 h-auto md:h-60">
                                            {/* Image Section */}
                                            <div className="w-full md:w-48 h-48 md:h-full relative overflow-hidden rounded-lg">
                                                <Image 
                                                    src={food.image} 
                                                    fill 
                                                    alt="special" 
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            
                                            {/* Content Section */}
                                            <div className="flex-1 w-full text-center md:text-left">
                                                <h3 className="text-xl md:text-2xl font-bold mb-2">⭐ Premium Pick</h3>
                                                <h1 className="font-extrabold text-yellow-300 text-lg md:text-2xl mb-2 md:mb-3">{food.name}</h1>
                                                <p className="text-blue-100 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                                                    {food.description}
                                                </p>
                                                
                                                {/* Price Section */}
                                                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 md:mb-4">
                                                    <p className="text-2xl md:text-3xl font-bold">Ksh {food.price.toFixed(2)}</p>
                                                    <span className="px-3 py-1 rounded-full bg-white text-blue-600 text-xs md:text-sm font-bold">
                                                        SAVE Ksh {(food.originalPrice-food.price).toFixed(2)}
                                                    </span>
                                                </div>
                                                
                                                {/* Action Buttons */}
                                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 md:gap-3">
                                                    <button className="w-full sm:w-auto bg-blue-600 px-4 py-2 md:py-3 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base">
                                                        Add to Cart
                                                    </button>
                                                    <button className="w-full sm:w-auto bg-purple-500 px-4 py-2 md:py-3 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300 text-sm md:text-base">
                                                        Order Now
                                                    </button>
                                                    <Link 
                                                        href="/special" 
                                                        className="w-full sm:w-auto bg-white px-4 py-2 md:py-3 text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base text-center"
                                                    >
                                                        View All Specials
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {/* Third part of foods - Only show if we have items after second breakpoint */}
                            {showSecondSpecial && foodies.slice(secondBreakpoint).map((food,index) => (
                                <FoodCard 
                                    key={secondBreakpoint + index}
                                    id={food.id}
                                    label={food.label}
                                    banner={food.banner}
                                    price={food.price}
                                    category={food.category}
                                />
                            ))}
                        </div>
                    ):(
                        <div className="w-full h-screen flex items-center justify-center">
                            <h1 className="text-red-500">No food ready at the moment</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}