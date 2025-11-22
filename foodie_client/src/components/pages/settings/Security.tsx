"use client"

import { useState } from "react";
import PasswordModal from "@/components/ui/modals/PasswordModal";

export default function Security(){
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    const handlePasswordSubmit = (passwordData: {
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    }) => {
        // Handle password change logic here
        console.log("Changing password:", passwordData);
        setIsPasswordModalOpen(false);
    };

    return(
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Login & Security</h2>
                    <p className="text-gray-600 mt-2">Manage your account security settings</p>
                </div>

                <div className="space-y-6">
                    {/* Change Password */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Change Password</h3>
                            <p className="text-gray-600 text-sm">Update your password to keep your account secure</p>
                        </div>
                        <button 
                            onClick={() => setIsPasswordModalOpen(true)}
                            className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium"
                        >
                            Change Password
                        </button>
                    </div>

                    {/* 2FA */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Two-Factor Authentication</h3>
                            <p className="text-gray-600 text-sm mb-2">Add an extra layer of security to your account</p>
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Enabled</span>
                        </div>
                        <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium">Manage 2FA</button>
                    </div>

                    {/* Logged-in Devices */}
                    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Logged-in Devices</h3>
                            <p className="text-gray-600 text-sm">See devices that are currently logged into your account</p>
                        </div>
                        <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium">View Devices</button>
                    </div>
                </div>
            </div>

            {/* Password Modal */}
            <PasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                onSubmit={handlePasswordSubmit}
            />
        </>
    );
}