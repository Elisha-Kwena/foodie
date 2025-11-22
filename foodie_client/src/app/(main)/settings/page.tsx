"use client"

import { useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext"

// Import icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentsIcon from '@mui/icons-material/Payments';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SecurityIcon from '@mui/icons-material/Security';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

// Import components
import PersonalInfo from "@/components/pages/settings/Personal";
import AddressesSection from "@/components/pages/settings/AddressesSection";
import Payment from "@/components/pages/settings/Payment";
import Notifications from "@/components/pages/settings/Notifications";
import Privacy from "@/components/pages/settings/Privacy";
import Security from "@/components/pages/settings/Security";
import Loyalty from "@/components/pages/settings/Loyalty";
import Order from "@/components/pages/settings/Order";
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Settings(){
    const {isOpen} = useSidebar()
    const [selectedSection, setSelectedSection] = useState<string>("profile information")
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const toggleMenu =()=>{
        setOpenMenu((prev) => !prev)
    }

    const handleSelectedSection = (section:string) => {
        console.log("Setting section to:", section);
        setSelectedSection(section)
        setOpenMenu(false)
    }

    const settingsOptions = [
        {label:"Profile Information", icon: AccountBoxIcon, key: "profile information"},
        {label:"Addresses", icon: BusinessIcon, key: "addresses"},
        {label:"Payment Methods", icon: PaymentsIcon, key: "payment methods"},
        {label:"Notification Preferences", icon: NotificationsIcon, key: "notification preferences"},
        {label:"Privacy & Data", icon: PrivacyTipIcon, key: "privacy & data"},
        {label:"Security", icon: SecurityIcon, key: "security"},
        {label:"Loyalty & Rewards", icon: MilitaryTechIcon, key: "loyalty & rewards"},
        {label:"Order Preferences", icon: ViewStreamIcon, key: "order preferences"},
    ]

    // Simple render function to avoid component map issues
    const renderActiveSection = () => {
        console.log("Rendering section:", selectedSection);
        
        switch(selectedSection) {
            case "profile information":
                return <PersonalInfo />;
            case "addresses":
                return <AddressesSection />;
            case "payment methods":
                return <Payment />;
            case "notification preferences":
                return <Notifications />;
            case "privacy & data":
                return <Privacy />;
            case "security":
                return <Security />;
            case "loyalty & rewards":
                return <Loyalty />;
            case "order preferences":
                return <Order />;
            default:
                return <PersonalInfo />;
        }
    }
    
    return(
        <>
            <div className={`min-h-screen bg-gray-200 md:pt-16 pt-12 transition-all duration-700 ease-in-out ${isOpen?"md:ml-74 ml-0":"ml-0 md:ml-18"}`}>
                <div className={`bg-gray-200 flex flex-col h-full gap-2 transition-all duration-700 ease-in-out ${isOpen?"md:left-74 left-0":"md:left-18 left-0"}`}>
                    {/* Header */}
                    <div className="w-full md:w-[80%] mx-auto mt-4 flex items-center justify-between md:justify-start px-1 md:px-0 relative">
                        <div className="">
                            <h1 className="text-lg md:text-3xl font-bold text-gray-900">Account Settings</h1>
                            <p className="text-gray-600 md:mt-2 text-sm md:text-md">Manage your account preferences and settings</p>
                        </div>

                        {/* mobile menu button */}
                        <button 
                        onClick={toggleMenu}
                        className="md:hidden z-100 fixed right-1 items-center justify-center p-2 rounded bg-orange-600">
                            {openMenu ?(
                                <CloseRoundedIcon className="text-white"/>
                            ):(
                                <MenuIcon className="text-white"/>
                            )}
                        </button>

                        {/* mobile menu */}
                        <div className={`fixed md:hidden z-50 bg-white top-28 left-[25%] right-1 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${openMenu ? "max-h-100" : "max-h-0"}`}>
                            <div className="p-3 flex flex-col gap-2">
                            {settingsOptions.map((option, index) => {
                                const IconComponent = option.icon
                                const isActive = selectedSection === option.key;
                                
                                return(
                                    <button 
                                        key={option.key} 
                                        onClick={() => handleSelectedSection(option.key)} 
                                        className={`group cursor-pointer transition-all duration-300 ease-in-out w-full rounded p-2 flex items-center justify-start gap-2 ${
                                            isActive 
                                                ? "bg-orange-600 text-white" 
                                                : "hover:bg-orange-600 hover:text-white"
                                        }`}
                                    >
                                        <IconComponent className={`transition-all duration-300 ease-in-out ${
                                            isActive ? "text-white" : "text-black group-hover:text-white"
                                        }`}/>
                                        <span className={`text-sm capitalize font-bold transition-all duration-300 ease-in-out ${
                                            isActive ? "text-white" : "text-gray-500 group-hover:text-white"
                                        }`}>
                                            {option.label}
                                        </span>
                                    </button>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="px-1 md:px-0 w-full md:w-[80%] mx-auto flex items-start justify-between gap-4 pb-8 mt-6">
                        {/* Sidebar Navigation */}
                        <div className="w-1/4 rounded shadow bg-white p-2 hidden md:flex flex-col gap-1">
                            {settingsOptions.map((option, index) => {
                                const IconComponent = option.icon
                                const isActive = selectedSection === option.key;
                                
                                return(
                                    <button 
                                        key={option.key} 
                                        onClick={() => handleSelectedSection(option.key)} 
                                        className={`group cursor-pointer transition-all duration-300 ease-in-out w-full rounded p-2 flex items-center justify-start gap-2 ${
                                            isActive 
                                                ? "bg-orange-600 text-white" 
                                                : "hover:bg-orange-600 hover:text-white"
                                        }`}
                                    >
                                        <IconComponent className={`transition-all duration-300 ease-in-out ${
                                            isActive ? "text-white" : "text-black group-hover:text-white"
                                        }`}/>
                                        <span className={`text-sm capitalize font-bold transition-all duration-300 ease-in-out ${
                                            isActive ? "text-white" : "text-gray-500 group-hover:text-white"
                                        }`}>
                                            {option.label}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                        
                        {/* Content Area */}
                        <div className="flex-1">
                            {renderActiveSection()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}