import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="flex items-center gap-2 text-black font-normal text-sm sm:text-lg md:text-xl my-4 mx-4 sm:my-8 sm:mx-10 
            md:my-10 md:mx-20 lg:my-12 lg:mx-32 xl:my-14 xl:mx-40 capitalize overflow-hidden whitespace-nowrap text-ellipsis">
            <span>Home</span> <IoIosArrowForward />
            <span>Shop</span> <IoIosArrowForward />
            <span>{product.category}</span> <IoIosArrowForward />
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;


