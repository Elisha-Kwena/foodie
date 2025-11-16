import Image from "next/image"
import Signup from "@/components/pages/auth/Signup"
export default function SignupPage(){
    return(
        <>
            <div className="w-full h-screen relative pb-4 grid place-items-center bg-[orangered] overflow-y-scroll overflow-x-hidden md:overflow-hidden">

                <div className="w-full md:w-[80%] z-100 flex items-center md:flex-row flex-col justify-between gap-4 h-screen md:h-[85%] md:p-0 p-1">
                    <div className="h-full w-full md:w-[70%] bg-white/10 backdrop-blur rounded-md flex items-center justify-between">
                        <div className="h-full w-full md:w-[60%] flex items-center justify-center">
                            <Signup/>
                        </div>
                        <div className="flex-1 hidden md:flex flex-col h-full">
                            <div className="w-full relative flex item-start h-64 justify-center">
                                <div className="w-full absolute -top-20 left-0 right-0 bottom-0">
                                    <div className="w-full relative h-96">
                                        <Image
                                            src="/images/banner1.png"
                                            alt="banner"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  pl-4 mt-5 pr-1">
                                <h1 className="font-mono text-[24px] text-white font-extrabold">Taste the best that </h1>
                                <h1 className="font-mono text-[24px] text-white font-extrabold">Surprises you </h1>
                                <div className="w-full grid grid-cols-2 gap-2 mt-4">
                                    <div className="flex flex-col gap-2 rounded-md backdrop-blur p-2">
                                        <div className="w-full relative h-24">
                                            <Image
                                                src="/images/smocha2.png"
                                                alt="smocha"
                                                fill
                                                className="object-contain object-center"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <h1 className="text-sm text-center font-bold text-black">Smocha</h1>
                                            <h1 className="text-sm text-center text-gray-400">Starting from</h1>
                                            <h1 className="text-sm text-center font-bold text-black">Ksh.50.00</h1>
                                        </div>
                                        <div className="w-full flex items-center justify-between gap-2">
                                            <button className="w-1/2 p-1 cursor-pointer bg-orange-600 rounded font-bold text-[10px] text-white">Add to Cart</button>
                                            <button className="w-1/2 p-1 cursor-pointer bg-yellow-400 rounded font-bold text-[10px] text-white">Order Now</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 rounded-md backdrop-blur p-2">
                                        <div className="w-full relative h-24">
                                            <Image
                                                src="/images/samosa.png"
                                                alt="samosa"
                                                fill
                                                className="object-contain object-center"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <h1 className="text-sm text-center font-bold text-black">Samosa</h1>
                                            <h1 className="text-sm text-center text-gray-400">Starting from</h1>
                                            <h1 className="text-sm text-center font-bold text-black">Ksh.20.00</h1>
                                        </div>
                                        <div className="w-full flex items-center justify-between gap-2">
                                            <button className="w-1/2 p-1 bg-orange-600 rounded font-bold text-[10px] cursor-pointer text-white">Add to Cart</button>
                                            <button className="w-1/2 p-1 bg-yellow-400 rounded font-bold text-[10px] cursor-pointer text-white">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full md:flex-1 bg-white/20 backdrop-blur rounded-md flex flex-col items-start justify-between">
                        <div className="w-full p-4">
                            <h1 className="text-white font-bold text-[24px]">Best and Fastest Delivery</h1>
                        </div>
                        <div className="h-50 md:flex-1 w-full relative">
                            <div className="absolute left-0 md:left-30 w-full h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/loginbanner.png"
                                        alt="banner"
                                        fill
                                        className="object-contain object-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3 text-center md:text-left">
                            <h2 className="text-3xl md:text-3xl font-black mb-3 leading-tight">
                                Hungry? <span className="text-yellow-300">Order in 60 sec</span>
                            </h2>

                            <p className="text-lg md:text-xl font-medium mb-4 max-w-xl">
                              Get **$10 OFF** your first order + **free delivery** for the next 7 days.
                              <br />
                              <span className="text-sm opacity-90">
                                Over 500+ restaurants • 30-min avg. delivery
                              </span>
                            </p>

                            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-sm">
                              <span className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.39 2.83 1.03-6-4.36-4.25 6.03-.88L10 2l2.69 4.7 6.03.88-4.36 4.25 1.03 6L10 15z"/></svg>
                                4.8 (12k+ reviews)
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6-2c0 5.523-4.477 10-10 10S2 13.523 2 8 6.477 0 12 0s10 4.477 10 10z"/></svg>
                                Secure checkout
                              </span>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* circles */}
                <div className="absolute w-112 h-112 rounded-full bg-red-600 -bottom-40 -left-30"></div>
                <div className="absolute w-112 h-112 rounded-full bg-yellow-600 -top-40 -right-30"></div>
                <div className="absolute w-90 h-90 rounded-full bg-orange-400 bottom-30 right-30 z-50"></div>
                <div className="absolute w-40 h-40 rounded-full bg-red-600 bottom-20 right-20 z-10"></div>
                <div className="absolute w-10 h-10 rounded-full bg-red-600 top-10 left-20 z-10"></div>
                <div className="absolute w-10 h-10 rounded-full bg-orange-400 top-50 left-40 z-10"></div>
                <div className="absolute w-6 h-6 rounded-full bg-orange-400 top-70 left-90 z-10"></div>
                <div className="absolute w-6 h-6 rounded-full bg-red-600 top-60 left-1/2 z-10"></div>
            </div>
        </>
    )
}