import FoodCard from "@/components/ui/cards/FoodCard" 
import { useSidebar } from "@/contexts/SidebarContext"
import { foodies } from "@/data/foods"
export default function Foods(){
    const {isOpen} = useSidebar()
    return(
        <>
            <div className="w-full pt-8">
                <div className={`w-full`}>
                    {foodies.length > 1 ? (
                        <div className={`w-full grid gap-4 ${isOpen ?"md:grid-cols-4 gap-y-12 grid-cols-2":"md:grid-cols-5 grid-cols-2 gap-y-10"}`}>
                           {foodies.map((food,index)=>(
                            <FoodCard 
                            key={index}
                            id={food.id}
                            label={food.label}
                            banner={food.banner}
                            price={food.price}
                            category={food.category}
                        />
                        ))}
                        </div>
                    ):(
                        <>
                        <div className="w-full h-screen flex items-center justify-center">
                            <h1 className="text-red-500">No food ready at the moment</h1>
                        </div>
                        </>
                    )}
                </div>
            </div>
            
        </>
    )
}