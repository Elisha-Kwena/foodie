import food from "../../../../public/images/samosa.png"

import Image,{StaticImageData} from "next/image"

export interface FoodDetails{
    id:string | number;
    label:string;
    banner:string | StaticImageData;
    price:number;
    category?:string;

}

export default function FoodCard({label,banner,price,category}:FoodDetails){
    return(
        <>
            <div className="rounded bg-white shadow flex flex-col items-center justify-between h-auto">
                <div className="w-full h-20 relative">
                    <div className="w-full absolute h-40 -bottom-10 px-2" >
                        <div className="w-full h-full relative overflow-hidden">
                            <Image src={banner} alt="food" fill className="object-contain object-top"/>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 mt-8">
                    <h1 className="text-sm font-bold font-sans text-center capitalize text-black">{label}</h1>
                    <p className="text-center text-gray-500 capitalize">starting from</p>
                    <h2 className="font-extrabold text-center text-black">Kshs. {price.toFixed(2)}</h2>
                    <div className="w-full flex items-center justify-between gap-1">
                        <button className="w-1/2 p-2 cursor-pointer rounded bg-orange-600 text-white font-sans capitalize text-sm px-1">Add to cart</button>
                        <button className="w-1/2 p-2 cursor-pointer rounded bg-yellow-400 text-white font-sans capitalize text-sm px-1">order now</button>
                    </div>
                </div>
            </div>
        </>
    )
}