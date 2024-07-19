import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { baseUrl } from "../../urls";

const Popular = () => {

    const [popularProducts,setPopularProducts] = useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/popularinwomen`)
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data));
    },[])

    return(
        <div className="flex flex-col items-center gap-2 mt-14 min-h-screen">
            <h1 className="text-black text-4xl font-semibold">
                POPULAR IN WOMEN
            </h1>
            <hr className="border-none w-4/5 h-0.5 rounded-s bg-cyan-500"/>
            <div className="mt-12  gap-8 justify-center font-medium 
                sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:flex lg:flex-wrap xl:flex xl:flex-wrap">
                {popularProducts.map((item,index)=>{
                    return (
                        <Item  
                            key={index} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}  /> 
                    )
                })}
            </div>
        </div>
    );
};

export default Popular;
