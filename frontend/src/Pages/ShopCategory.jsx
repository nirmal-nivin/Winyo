import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { RiArrowDropDownLine } from "react-icons/ri";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return(
        <div>
            <img src={props.banner} alt="" className="block my-7 mx-auto w-11/12 sm:w-4/5"/>
            <div className="flex flex-col sm:flex-row my-0 mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 justify-between items-center">
                <p className="font-semibold">
                    <span>Showing 1-12</span> Out of 36 products
                </p>
                <div className="flex py-2.5 px-5 border border-black rounded-2xl mt-4 sm:mt-0">
                    Sort by <RiArrowDropDownLine size={25}/>
                </div>
            </div>

            <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-40 my-5 grid grid-cols-2
                 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-14 xl:gap-28"
            >

                {all_product.map((item,index)=>{
                    if (props.category===item.category) {
                        return ( 
                            <Item 
                                key={index} 
                                id={item.id} 
                                name={item.name} 
                                image={item.image} 
                                new_price={item.new_price} 
                                old_price={item.old_price} 
                            /> 
                        );
                    }
                    else {
                        return null;
                    }
                })}
            </div>

            <div className="flex justify-center items-center my-10 mx-auto w-48 sm:w-56 h-12 sm:h-16 rounded-full
                bg-red-600 text-neutral-100 font-medium text-md sm:text-lg">
                <p>Explore More</p>
            </div>
        </div>
    );
};

export default ShopCategory;
