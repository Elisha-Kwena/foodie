export default function ContactForm(){
    return(
        <>
            <form className="w-full flex flex-col gap-2">
                <div className="w-full">
                    <input type="text" className="w-full border border-gray-400 rounded p-2 text-sm font-sans text-black" placeholder="Full names *"/>
                </div>
                <div className="w-full">
                    <input type="email" className="w-full border border-gray-400 rounded p-2 text-sm font-sans text-black" placeholder="Email *"/>
                </div>
                <div className="w-full">
                    <input type="tel" className="w-full border border-gray-400 rounded p-2 text-sm font-sans text-black" placeholder="Phone *"/>
                </div>
                <div className="w-full">
                    <input type="text" className="w-full border border-gray-400 rounded p-2 text-sm font-sans text-black" placeholder="Subject *"/>
                </div>
                <div className="w-full">
                    <textarea name="" id="" className="w-full border border-gay-400 rounded p-2 text-black font-sans text-sm min-h-52 h-52 max-h-52" placeholder="Message *"></textarea>
                </div>
                <div className="w-full">
                    <button className="w-full p-2 bg-orange-600 text-white fobt-bold text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-400 rounded uppercase">submit</button>
                </div>
            </form>
        </>
    )
}