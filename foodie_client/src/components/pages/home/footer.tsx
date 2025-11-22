import Link from "next/link"

export default function Footer(){
    return(
        <>
            <div className="bg-gray-900 rounded text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out!</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Our daily specials change every 24 hours. Order now to enjoy these exclusive deals before they're gone!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/home" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                            Browse All Menu Items
                        </Link>
                        <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                            Download Our App
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}