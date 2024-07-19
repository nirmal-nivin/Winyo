import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import {useNavigate} from "react-router-dom";

const PlaceOrder = () => {
  const {getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <form className="flex flex-col lg:flex-row items-start justify-between gap-12 mt-12 p-4">
      <div className="w-full max-w-lg">
        <p className="font-bold text-3xl mb-6 text-gray-800">
          Delivery Information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="First name"
          />
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="p-3 border border-gray-300 rounded-lg w-full my-4"
          type="email"
          placeholder="Email address"
        />
        <input
          className="p-3 border border-gray-300 rounded-lg w-full my-4"
          type="text"
          placeholder="Street"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="City"
          />
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Pin code"
          />
          <input
            className="p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="p-3 border border-gray-300 rounded-lg w-full my-4"
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="w-full max-w-md">
        <div className="flex flex-1 flex-col gap-6 p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 border-b border-gray-300">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-800 font-medium">
                ${getTotalCartAmount()}
              </p>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-300">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="text-gray-800 font-medium">$2</p>
            </div>
            <div className="flex justify-between py-4">
              <h3 className="font-bold text-gray-800">Total</h3>
              <h3 className="font-bold text-gray-800">
                ${getTotalCartAmount() + 2}
              </h3>
            </div>
          </div>
          <button 
           onClick={()=>navigate("/payment")}
           className="w-full h-12 outline-none border-none bg-orange-500 hover:bg-orange-600
             text-white font-medium rounded-lg transition duration-300">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

