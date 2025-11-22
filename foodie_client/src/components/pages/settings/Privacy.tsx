"use client"

import { useState } from "react";

export default function Privacy(){
    const [settings, setSettings] = useState({
        personalizedRecommendations: true,
        locationServices: true
    });

    const handleToggle = (setting: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleDownloadData = () => {
        // Handle data download logic
        console.log("Requesting data download...");
    };

    const handleDeleteAccount = () => {
        // Handle account deletion logic
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            console.log("Deleting account...");
        }
    };

    return(
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Privacy & Data Settings</h2>
                    <p className="text-gray-600 mt-2">Control your data and privacy preferences</p>
                </div>

                <div className="space-y-6 mb-8">
                    {/* Personalized Recommendations */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                            <p className="text-gray-600 text-sm">Use my order history to show personalized restaurant suggestions</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={settings.personalizedRecommendations}
                                onChange={() => handleToggle('personalizedRecommendations')}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>

                    {/* Location Services */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Location Services</h3>
                            <p className="text-gray-600 text-sm">Allow us to use your location for better delivery estimates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={settings.locationServices}
                                onChange={() => handleToggle('locationServices')}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>
                </div>

                <div className="space-y-6 mb-8">
                    {/* Download Data */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Download Your Data</h3>
                            <p className="text-gray-600 text-sm">Get a copy of all your personal data we have</p>
                        </div>
                        <button 
                            onClick={handleDownloadData}
                            className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium"
                        >
                            Request Download
                        </button>
                    </div>

                    {/* Delete Account */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Delete Account</h3>
                            <p className="text-gray-600 text-sm">Permanently delete your account and all associated data</p>
                        </div>
                        <button 
                            onClick={handleDeleteAccount}
                            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>

                <div className="flex gap-6 pt-6 border-t border-gray-200">
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">Privacy Policy</a>
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">Terms of Service</a>
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">Cookie Policy</a>
                </div>
            </div>
        </>
    )
}