import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Image, { StaticImageData } from "next/image";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Cart(){
    return(
        <>
            <div className="w-full h-full flex flex-col gap-2 md:rounded shadow bg-white p-1">
                <div className="w-full bg-gray-200 p-1 rounded">
                    <h1 className="font-extrabold capitalize text-lg text-black">Delivery Address</h1>
                    <div className="w-full flex items-center justify-start gap-2">
                        <LocationOnIcon className='text-gray-500 text-[20px]!'/>
                        <p className="text-gray-600 text-sm font-sans">Kisumu ndogo</p>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 mt-1">
                        <AccessAlarmIcon className='text-gray-500 text-[20px]!'/>
                        <p className="text-gray-600 font-sans text-sm">22 min</p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between p-0">
                    <div className="flex items-center justify-start">
                        <LocalMallRoundedIcon className="text-[orangered]"/>
                        <h1 className="text-black text-[14px] font-bold">Cart</h1>
                    </div>
                    <p className="flex items-center justify-end gap-4">
                        <span className="text-black font-bold">Order ID: </span>
                        <span className="text-gray-500">#40563 </span>
                    </p>
                </div>
                <div className="w-full grid grid-cols-3 gap-2 rounded-full p-1 shadow-inset border border-gray-200">
                    <button className="p-2 text-sm text-white bg-[orangered] shadow-xl font-bold rounded-full text-center capitalize cursor-pointer hover:shadow hover:bg-[orangered] hover:text-white transition-all duration-500 ease-in-out">Cart</button>
                    <button className="p-2 text-sm text-gray-500 font-bold rounded-full text-center capitalize cursor-pointer hover:bg-[orangered] hover:shadow hover:text-white transition-all duration-500 ease-in-out">Dine In</button>
                    <button className="p-2 text-sm text-gray-500 font-bold rounded-full text-center capitalize cursor-pointer hover:bg-[orangered] hover:shadow hover:text-white transition-all duration-500 ease-in-out">Takeaway</button>
                </div>
                <div className="w-full flex-1 flex flex-col gap-1 mt-2 border-b border-dotted border-black overflow-scroll">
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                    <div  className="w-full flex items-center justify-between gap-2 border border-gray-400 pr-2 py-1 rounded-md">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/samosa.png"
                                    alt="samosa"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h1 className="text-black font-bold capitalize text-sm">samosa</h1>
                                <h1 className="text-gray-400 font-bold capitalize text-sm">kshs.20.00</h1>
                                
                            </div>
                            <div className="flex-1 w-full flex items-center justify-end gap-2">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 justify-start">
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <RemoveIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                        <span className="text-black">0</span>
                                        <button className="group p-px rounded-full bg-gray-300 cursor-pointer hover:bg-[orangered] flex item-center justify-center">
                                            <AddIcon className="group-hover:text-white text-[20px]! transition-all duration-300 ease-in-out"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button  className="bg-red-400 cursor-pointer text-white hover:bg-red-600 font-bold text-sm p-2 rounded transition-all duration-300 ease-in-out">Remove</button>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="w-full border-b border-gray-400 pb-2 mt-6">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-black font-bold">Sub Total</h1>
                        <h2 className="text-gray-400 font-bold">Ksh. 100.00</h2>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-black font-bold">Delivery Charge</h1>
                        <h2 className="text-gray-400 font-bold">Ksh. 20.00</h2>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-black text-[14px] font-bold">Total Charge</h1>
                        <h2 className="text-black font-bold">Ksh. 120.00</h2>
                    </div>
                    <button className="mt-3 cursor-pointer w-full bg-[orangered] text-white font-bold text-center rounded-full p-2 text-sm">Confirm order</button>
                </div>
            </div>
        </>
    )
}