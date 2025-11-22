"use client"

import { useState } from "react";

export default function Notifications(){
    const [notificationSettings, setNotificationSettings] = useState({
        orderUpdates: {
            pushNotifications: true,
            smsAlerts: true,
            emailReceipts: true
        },
        promotions: {
            emailPromotions: false,
            pushDeals: true
        },
        newsletter: {
            weeklyInspiration: true
        }
    });

    const handleOrderUpdateChange = (type: keyof typeof notificationSettings.orderUpdates) => {
        setNotificationSettings(prev => ({
            ...prev,
            orderUpdates: {
                ...prev.orderUpdates,
                [type]: !prev.orderUpdates[type]
            }
        }));
    };

    const handlePromotionChange = (type: keyof typeof notificationSettings.promotions) => {
        setNotificationSettings(prev => ({
            ...prev,
            promotions: {
                ...prev.promotions,
                [type]: !prev.promotions[type]
            }
        }));
    };

    const handleNewsletterChange = () => {
        setNotificationSettings(prev => ({
            ...prev,
            newsletter: {
                weeklyInspiration: !prev.newsletter.weeklyInspiration
            }
        }));
    };

    const handleDiscard = () => {
        // Reset to original state
        setNotificationSettings({
            orderUpdates: {
                pushNotifications: true,
                smsAlerts: true,
                emailReceipts: true
            },
            promotions: {
                emailPromotions: false,
                pushDeals: true
            },
            newsletter: {
                weeklyInspiration: true
            }
        });
    };

    const handleSave = () => {
        // Save preferences logic
        console.log("Saving notification preferences:", notificationSettings);
    };

    return(
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                    <p className="text-gray-600 mt-2">Choose how you want to be notified</p>
                </div>

                <div className="space-y-8">
                    {/* Order Updates */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Updates</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Push Notifications</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={notificationSettings.orderUpdates.pushNotifications}
                                        onChange={() => handleOrderUpdateChange('pushNotifications')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">SMS Alerts</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={notificationSettings.orderUpdates.smsAlerts}
                                        onChange={() => handleOrderUpdateChange('smsAlerts')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Email Receipts</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={notificationSettings.orderUpdates.emailReceipts}
                                        onChange={() => handleOrderUpdateChange('emailReceipts')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Promotions & Offers */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Promotions & Offers</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Email Promotions</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer"
                                        checked={notificationSettings.promotions.emailPromotions}
                                        onChange={() => handlePromotionChange('emailPromotions')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Push Notifications for Deals</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={notificationSettings.promotions.pushDeals}
                                        onChange={() => handlePromotionChange('pushDeals')}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">Weekly Food Inspiration</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={notificationSettings.newsletter.weeklyInspiration}
                                    onChange={handleNewsletterChange}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-6 mt-8 border-t border-gray-200">
                    <button 
                        onClick={handleDiscard}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        Discard Changes
                    </button>
                    <button 
                        onClick={handleSave}
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </>
    )
}