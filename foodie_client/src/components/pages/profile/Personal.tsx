"use client"

import Image from "next/image"
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

export default function PersonalInfo(){
    return(
        <>
            <div className="w-full h-full">
                <form className="w-full flex flex-col gap-6 h-full">
                    <div className="w-full flex flex-col flex-1 gap-2 pl-1">
                        <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-start gap-6">
                            <div className="flex items-center justify-start gap-4">
                                <input type="radio" id="sex" name="sex"/>
                                <label htmlFor="sex" className="text-gray-500 text-lg">Male</label>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <input type="radio" id="sex" name="sex"/>
                                <label htmlFor="sex" className="text-gray-500 text-lg">Female</label>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-4 bg-gray-500 rounded p-2">
                            <label htmlFor="profile" className="text-white text-lg">
                                <div className="w-32 h-32 rounded-full relative cursor-pointer">
                                    <Image 
                                        src="/images/user.png"
                                        alt="user profile"
                                        fill
                                        className="object-center object-contain"
                                    />
                                    <div className="absolute w-14 h-14 z-100 flex items-center justify-center bottom-0 -right-4">
                                        <CameraAltRoundedIcon className="text-white text-[28px]!"/>
                                    </div>
                                </div>
                            </label>
                            <input type="file" id="profile" name="profile" className="hidden"/>  
                        </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName">First Name :</label>
                            <input type="text" id="firstName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="First Name :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="lastName">Last Name :</label>
                            <input type="text" id="lasttName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Last Name :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="userName">UserName :</label>
                            <input type="text" id="userName" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="UserName :" />
                        </div>
                        </div>
                        <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email :</label>
                            <input type="text" id="email" className="w-full bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Email :" />
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="phone">Phone Number :</label>
                            <input type="tel" id="phone" className="w-full bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Phone Number :" />
                        </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="address">Address :</label>
                            <input type="text" id="address" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Address :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="street">Street :</label>
                            <input type="text" id="street" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="Street :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="plot">Plot Name :</label>
                            <input type="text" id="plot" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="(optional) :" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="house">House NO :</label>
                            <input type="text" id="house" className="bg-gray-200 text-gray-600 p-3 px-4 font-bold rounded-full" placeholder="(optional) :" />
                        </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between gap-4">
                        <button className="w-1/2 p-3 rounded-md border-2 text-center font-bold border-orange-600 cursor-pointer text-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white">Discard Changes</button>
                        <button className="w-1/2 p-3 rounded-md border-2 text-center font-bold border-white bg-orange-600 text-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-600 hover:border-orange-600">Save Changes</button>
                    </div>
                </form>
            </div>
                
        </>
    )
}