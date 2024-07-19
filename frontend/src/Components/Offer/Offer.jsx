import React from "react"; 
import { BsArrowRight } from "react-icons/bs";
import hero_img from "../Assets/women.png"

const Offer = () => {
    return(
        <div className="h-screen bg-gradient-to-r from-cyan-600 to-blue-800 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center gap-5 p-5 sm:p-10 lg:pl-24 xl:pl-44 leading-tight">
                <h2 className="text-yellow-500 font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">
                    Minimalist clothing Look Charming with Simple
                </h2>
                <div>
                    <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black">
                        <p>Elevate</p>
                        <p>Your Style with</p>
                        <p><span className="text-neutral-100">Winyo</span> Fashions</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 w-full sm:w-48 md:w-64 lg:w-72 xl:w-80 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-28 rounded-3xl 
                    mt-4 bg-rose-600 text-neutral-100 font-mono cursor-pointer">
                    <div className="text-xl">Shop NOW</div>
                    <BsArrowRight size={20} className="sm:size={24} md:size={40} lg:size={36} xl:size={40}"/>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-5 sm:p-10 md:p-5 overflow-hidden">
                <img src={hero_img} alt="" className="w-full h-auto max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"/>
            </div>
        </div>   
    );
};

export default Offer;
