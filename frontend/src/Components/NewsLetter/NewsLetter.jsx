import React from "react";

const NewsLetter = () => {
    return(
        <div className="w-full md:w-[80%] h-full flex flex-col items-center justify-center mx-auto py-8 px-4 md:px-36 mb-8 md:mb-36 bg-gradient-to-r from-orange-500 to-red-600">
            <h1 className="text-black text-4xl md:text-5xl font-semibold mt-8 md:mt-16 text-center md:text-left">
                Get Exclusive Offer On Your Email 
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 md:mt-6 text-center md:text-left">
                Subscribe To Our Newsletter and Stay Updated
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white w-full md:w-4/5 h-auto md:h-16 border border-white mt-8 md:mt-12 mb-8 md:mb-28">
                <input 
                    type="email" placeholder="Your Mail"
                    className="w-full md:w-[80%] my-4 md:my-0 md:ml-8 border-none outline-none text-black font-sans text-lg md:text-xl px-4 md:px-0"/>
                <button className="w-full md:w-64 h-16 bg-cyan-400 text-black font-extrabold cursor-pointer mt-4 md:mt-0">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;



