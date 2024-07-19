import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import {useNavigate} from "react-router-dom";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="my-12 mx-4 sm:my-16 sm:mx-8 md:my-24 md:mx-16 lg:my-24 lg:mx-40">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 items-center gap-4 sm:gap-8 md:gap-16 py-5 px-0 text-black text-sm sm:text-base md:text-xl font-medium">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-none w-full h-0.5 bg-cyan-500 my-4" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 items-center gap-4 sm:gap-8 md:gap-16 py-5 px-0 text-black text-xs sm:text-sm md:text-base font-medium">
                <img src={e.image} alt="" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-white bg-slate-100">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-3 sm:w-4 md:w-5 my-0 mx-2 sm:mx-4 md:mx-6 cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="flex flex-col md:flex-row my-12 md:my-24 mx-0">
        <div className="flex flex-1 flex-col mr-0 md:mr-24 gap-6 md:gap-10">
          <h1 className="text-xl md:text-2xl font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="flex justify-between py-4 px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="flex justify-between py-4 px-0">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={()=>navigate("/order")} className="w-full md:w-64 h-12 md:h-14 outline-none border-none bg-rose-600 text-neutral-100 font-medium cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 text-lg md:text-xl mt-6 md:mt-0">
          <p className="text-black font-bold text-lg md:text-xl p-3">If you have a promo code, Enter it here</p>
          <div className="w-full md:w-[504px] mt-4 pl-5 h-12 md:h-14 bg-neutral-100 flex items-center">
            <input
              type="text"
              placeholder="promo code"
              className="border-none outline-none bg-transparent text-sm md:text-base w-full h-full"
            />
          </div>
          <button className="w-full h-12 md:h-14 mt-4 md:mt-0 text-lg md:text-xl bg-blue-700 rounded-md text-neutral-100 cursor-pointer md:self-start">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
