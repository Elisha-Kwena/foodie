"use client"
export default function Loyalty(){
    return(
        <>
            <div id="loyalty" className="section bg-white rounded-lg shadow-sm p-6 ">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Loyalty & Rewards</h2>
                        <p className="text-gray-600 mt-2">Track your points and redeem rewards</p>
                    </div>

                    {/* <!-- Points Card --> */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-8">
                        <div className="text-center mb-6">
                            <div className="text-5xl font-bold mb-2">1,250</div>
                            <div className="text-orange-100">Points</div>
                        </div>
                        <div className="space-y-3">
                            <div className="w-full bg-orange-400 rounded-full h-3">
                                <div className="bg-white h-3 rounded-full w-[62%]"></div>
                            </div>
                            <div className="text-orange-100 text-sm text-center">625 points until next reward</div>
                        </div>
                    </div>

                    {/* <!-- Rewards --> */}
                    <div className="space-y-4 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Rewards</h3>
                        
                        <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="px-3 py-2 bg-green-500 text-white rounded-lg font-bold text-sm">500 pts</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">$5 Off</h4>
                                    <p className="text-gray-600 text-sm">Get $5 off your next order</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">Redeem</button>
                        </div>

                        <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="px-3 py-2 bg-green-500 text-white rounded-lg font-bold text-sm">1,000 pts</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                                    <p className="text-gray-600 text-sm">Free delivery on your next order</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">Redeem</button>
                        </div>

                        <div className="flex items-center justify-between p-4 border border-gray-200 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="px-3 py-2 bg-gray-400 text-white rounded-lg font-bold text-sm">1,875 pts</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">$15 Off</h4>
                                    <p className="text-gray-600 text-sm">Get $15 off any order over $30</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed font-medium" disabled>Need 625 pts</button>
                        </div>
                    </div>

                    {/* <!-- Auto Apply --> */}
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg mb-8">
                        <span className="font-medium text-gray-700">Automatically apply rewards at checkout</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked/>
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>

                    {/* <!-- Activity --> */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                                <span className="text-gray-700">+50 points - Order completed</span>
                                <span className="text-gray-500 text-sm">Today</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                                <span className="text-gray-700">Redeemed - Free Delivery</span>
                                <span className="text-gray-500 text-sm">2 days ago</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                                <span className="text-gray-700">+75 points - Order completed</span>
                                <span className="text-gray-500 text-sm">1 week ago</span>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}