"use client"

export default function Payment(){
    return(
        <>
             <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <div className="mb-6 md:mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Payment Methods</h2>
                        <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">Manage your saved payment options</p>
                    </div>

                    <button className="mb-4 md:mb-6 flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium w-full md:w-auto justify-center">
                        <span className="material-icons">add</span>
                        Add New Payment Method
                    </button>

                    <div className="space-y-4 md:space-y-6">
                        {/* Primary Card */}
                        <div className="border-2 border-orange-300 bg-orange-50 rounded-xl p-4 md:p-6">
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <span className="px-2 md:px-3 py-1 md:py-2 bg-blue-900 text-white rounded text-xs md:text-sm font-bold">VISA</span>
                                    <span className="px-2 md:px-3 py-1 bg-orange-500 text-white rounded-full text-xs md:text-sm font-medium">Default</span>
                                </div>
                            </div>
                            <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                                <p className="text-lg md:text-xl font-semibold text-gray-900">•••• •••• •••• 1234</p>
                                <p className="text-gray-600 text-sm md:text-base">Expires 12/2025</p>
                                <p className="text-gray-600 text-sm md:text-base">Billing address: Same as Home</p>
                            </div>
                            <div className="flex gap-2 md:gap-3 flex-wrap">
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-xs md:text-sm font-medium">Edit</button>
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-xs md:text-sm font-medium">Remove</button>
                            </div>
                        </div>

                        {/* Secondary Card */}
                        <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <span className="px-2 md:px-3 py-1 md:py-2 bg-red-600 text-white rounded text-xs md:text-sm font-bold">MC</span>
                            </div>
                            <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                                <p className="text-lg md:text-xl font-semibold text-gray-900">•••• •••• •••• 5678</p>
                                <p className="text-gray-600 text-sm md:text-base">Expires 03/2026</p>
                                <p className="text-gray-600 text-sm md:text-base">Billing address: Same as Work</p>
                            </div>
                            <div className="flex gap-2 md:gap-3 flex-wrap">
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors text-xs md:text-sm font-medium">Set as Default</button>
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-xs md:text-sm font-medium">Edit</button>
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-xs md:text-sm font-medium">Remove</button>
                            </div>
                        </div>

                        {/* PayPal */}
                        <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                <div className="px-3 md:px-4 py-2 md:py-3 bg-blue-600 text-white rounded-lg font-bold text-xs md:text-sm w-fit">PayPal</div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 text-sm md:text-base">john.doe@example.com</p>
                                    <p className="text-green-600 text-xs md:text-sm">Connected</p>
                                </div>
                                <button className="px-3 md:px-4 py-1 md:py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-xs md:text-sm font-medium w-full md:w-auto">Disconnect</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}