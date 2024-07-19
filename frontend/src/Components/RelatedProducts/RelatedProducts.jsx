import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 xl:gap-8 my-8 md:my-12 lg:my-16 xl:my-20">
      <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">Related Products</h1>
      <hr className="border-none w-4/5 h-0.5 rounded-s bg-cyan-500" />

      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {data_product.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
