import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col items-center gap-8 md:gap-12 px-4">
            <div className="text-blue-800 font-bold text-4xl md:text-6xl cursor-pointer">
                <h1>Winyo</h1>
            </div>
            <ul className="flex flex-wrap justify-center list-none gap-4 md:gap-12 text-black font-medium text-lg md:text-xl cursor-pointer">
                <li>About</li>
                <li>Product</li>
                <li>Office</li>
                <li>Contact</li>
            </ul>
            <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
                <p className="text-lg md:text-xl text-blue-700 font-bold m-2 md:m-4">Follow Us</p>
                <div className="p-2 pb-4 flex gap-5 mt-2 md:mt-5 cursor-pointer">
                    <a href="https://www.instagram.com/winyoindia?igsh=MXVxc29yN3A1dXV4Mw==">
                        <FaInstagram size={30} className="md:size={40}" />
                    </a>
                    <FaWhatsapp size={30} className="md:size={40}" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-6 mb-4 md:mb-8 text-black font-bold w-full">
                <hr className="border-none w-full md:w-4/5 h-0.5 rounded bg-cyan-500" />
                <p className="text-center text-sm md:text-base">@2024 winyo.com - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
