"use client"
export default function AddressesSection(){
    return(
        <>
        <div id="addresses" className="section w-full bg-white rounded-lg shadow-sm p-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
                        <p className="text-gray-600 mt-2">Manage your delivery addresses</p>
                    </div>

                    <button className="mb-6 flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                        <span className="material-icons">add</span>
                        Add New Address
                    </button>

                    <div className="grid gap-6">
                        {/* <!-- Primary Address --> */}
                        <div className="border-2 border-orange-300 bg-orange-50 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Home</span>
                                    <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">Default</span>
                                </div>
                            </div>
                            <div className="space-y-2 mb-4">
                                <p className="text-gray-900 font-medium">123 Main Street, Apt 4B</p>
                                <p className="text-gray-600">New York, NY 10001</p>
                                <p className="text-gray-600">United States</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 mb-4">
                                <p className="text-sm font-medium text-gray-900 mb-1">Delivery instructions:</p>
                                <p className="text-sm text-gray-600">Leave at front desk, call upon arrival</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm font-medium">Edit</button>
                                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm font-medium">Delete</button>
                            </div>
                        </div>

                        {/* <!-- Secondary Address --> */}
                        <div className="border border-gray-200 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Work</span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <p className="text-gray-900 font-medium">456 Business Ave, Floor 15</p>
                                <p className="text-gray-600">New York, NY 10002</p>
                                <p className="text-gray-600">United States</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors text-sm font-medium">Set as Default</button>
                                <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm font-medium">Edit</button>
                                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm font-medium">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}