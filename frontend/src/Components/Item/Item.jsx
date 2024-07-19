import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="mt-6 mb-0 hover:scale-105 duration-200 w-full xl:w-72 lg:w-52 md:w-40 sm:w-28">
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className="w-full"/>
            </Link>

            <p className="my-2 mx-0 text-base xl:text-lg lg:text-base md:text-sm sm:text-xs">{props.name}</p>

            <div className="flex gap-4">
                <div className="text-black text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-medium">
                    ${props.new_price}
                </div>

                <div className="text-red-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-medium line-through">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;
