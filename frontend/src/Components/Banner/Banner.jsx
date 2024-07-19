import React from "react";
import { BsArrowRight } from "react-icons/bs";
import sale_img from "../Assets/sale.png"

const Banner = () => {
    return (
        <div className="w-4/5 mx-auto my-0 py-0 mb-20 mt-8 md:mb-36 bg-gradient-to-r from-orange-500 to-red-600">
            <div className="flex flex-col justify-center md:flex-row">
                <div className="flex-1 flex flex-col justify-center px-6 md:px-14 mt-8">
                    <h1 className="text-black text-5xl font-semibold mt-3">
                        Exclusive
                    </h1>
                    <h1 className="text-6xl font-bold mt-4 md:mt-6 text-white">
                        Offers For You
                    </h1>
                    <p className="text-3xl md:text-6xl font-bold mt-4 md:mt-6 text-violet-700">
                        ONLY ON BEST SELLERS PRODUCTS
                    </p>
                    <button className="flex items-center justify-center gap-4 w-full md:w-64 h-14 rounded-md bg-cyan-400 text-teal-900 font-semibold text-xl mt-5 md:m-12">
                        Grab Now <BsArrowRight size={30} />
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center pt-12 md:pt-0">
                    <img src={sale_img} alt="Sale" className="max-w-full h-auto md:max-h-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;



