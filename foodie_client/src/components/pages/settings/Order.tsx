"use client"

import { useState } from "react";

export default function Order(){
    const [formData, setFormData] = useState({
        instructions: "Leave at front desk, please don't ring bell",
        dietaryPreferences: {
            vegetarian: false,
            vegan: true,
            glutenFree: false,
            dairyFree: false,
            keto: false,
            lowCarb: false
        },
        sustainability: {
            includeCutlery: false,
            ecoFriendlyPackaging: true
        },
        favoriteCuisines: {
            italian: true,
            mexican: true,
            chinese: false,
            indian: false,
            japanese: true,
            american: false
        }
    });

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            instructions: e.target.value
        }));
    };

    const handleDietaryChange = (preference: keyof typeof formData.dietaryPreferences) => {
        setFormData(prev => ({
            ...prev,
            dietaryPreferences: {
                ...prev.dietaryPreferences,
                [preference]: !prev.dietaryPreferences[preference]
            }
        }));
    };

    const handleSustainabilityChange = (option: keyof typeof formData.sustainability) => {
        setFormData(prev => ({
            ...prev,
            sustainability: {
                ...prev.sustainability,
                [option]: !prev.sustainability[option]
            }
        }));
    };

    const handleCuisineChange = (cuisine: keyof typeof formData.favoriteCuisines) => {
        setFormData(prev => ({
            ...prev,
            favoriteCuisines: {
                ...prev.favoriteCuisines,
                [cuisine]: !prev.favoriteCuisines[cuisine]
            }
        }));
    };

    const handleReset = () => {
        setFormData({
            instructions: "",
            dietaryPreferences: {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                keto: false,
                lowCarb: false
            },
            sustainability: {
                includeCutlery: false,
                ecoFriendlyPackaging: true
            },
            favoriteCuisines: {
                italian: false,
                mexican: false,
                chinese: false,
                indian: false,
                japanese: false,
                american: false
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Order preferences saved:", formData);
    };

    return(
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Order Preferences</h2>
                    <p className="text-gray-600 mt-2">Customize your ordering experience</p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Delivery Instructions */}
                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                            Default Delivery Instructions
                        </label>
                        <textarea 
                            id="instructions" 
                            value={formData.instructions}
                            onChange={handleTextareaChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                            placeholder="E.g., Leave at front door, call upon arrival, etc."
                            rows={3}
                        />
                    </div>

                    {/* Dietary Preferences */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Dietary Preferences</h3>
                        <p className="text-gray-600 mb-4">Help us recommend better options for you</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="vegetarian" 
                                    checked={formData.dietaryPreferences.vegetarian}
                                    onChange={() => handleDietaryChange('vegetarian')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Vegetarian</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="vegan" 
                                    checked={formData.dietaryPreferences.vegan}
                                    onChange={() => handleDietaryChange('vegan')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Vegan</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="gluten-free" 
                                    checked={formData.dietaryPreferences.glutenFree}
                                    onChange={() => handleDietaryChange('glutenFree')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Gluten-Free</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="dairy-free" 
                                    checked={formData.dietaryPreferences.dairyFree}
                                    onChange={() => handleDietaryChange('dairyFree')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Dairy-Free</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="keto" 
                                    checked={formData.dietaryPreferences.keto}
                                    onChange={() => handleDietaryChange('keto')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Keto</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="dietary" 
                                    value="low-carb" 
                                    checked={formData.dietaryPreferences.lowCarb}
                                    onChange={() => handleDietaryChange('lowCarb')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Low-Carb</span>
                            </label>
                        </div>
                    </div>

                    {/* Sustainability */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Sustainability Options</h3>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">Always include cutlery and napkins</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer"
                                    checked={formData.sustainability.includeCutlery}
                                    onChange={() => handleSustainabilityChange('includeCutlery')}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">Opt for eco-friendly packaging when available</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={formData.sustainability.ecoFriendlyPackaging}
                                    onChange={() => handleSustainabilityChange('ecoFriendlyPackaging')}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>
                    </div>

                    {/* Favorite Cuisines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Favorite Cuisines</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="italian" 
                                    checked={formData.favoriteCuisines.italian}
                                    onChange={() => handleCuisineChange('italian')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Italian</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="mexican" 
                                    checked={formData.favoriteCuisines.mexican}
                                    onChange={() => handleCuisineChange('mexican')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Mexican</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="chinese" 
                                    checked={formData.favoriteCuisines.chinese}
                                    onChange={() => handleCuisineChange('chinese')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Chinese</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="indian" 
                                    checked={formData.favoriteCuisines.indian}
                                    onChange={() => handleCuisineChange('indian')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Indian</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="japanese" 
                                    checked={formData.favoriteCuisines.japanese}
                                    onChange={() => handleCuisineChange('japanese')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>Japanese</span>
                            </label>
                            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-orange-300">
                                <input 
                                    type="checkbox" 
                                    name="cuisine" 
                                    value="american" 
                                    checked={formData.favoriteCuisines.american}
                                    onChange={() => handleCuisineChange('american')}
                                    className="mr-3 text-orange-500 focus:ring-orange-500"
                                />
                                <span>American</span>
                            </label>
                        </div>
                    </div>
                </form>

                <div className="flex gap-4 pt-6 mt-8 border-t border-gray-200">
                    <button 
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        Reset to Defaults
                    </button>
                    <button 
                        type="submit"
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </>
    )
}