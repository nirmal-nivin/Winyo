import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { baseUrl } from "../../urls";

const NewCollections = () => {

    const [new_collection,setNew_Collection] = useState([]);

    useEffect(()=>{
        fetch(`${baseUrl}/newcollections`)
        .then((response)=>response.json())
        .then((data)=>setNew_Collection(data));
    },[])

    return(
        <div className="flex flex-col items-center gap-2 mt-14 mb-12">
            <h1 className="text-black text-4xl font-semibold">NEW COLLECTION</h1>
             <hr className="border-none w-4/5 h-0.5 rounded-s bg-cyan-500" />
            <div  className="grid grid-cols-1 font-medium sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-8">
                {new_collection.map((item,index)=> {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
};

export default NewCollections;