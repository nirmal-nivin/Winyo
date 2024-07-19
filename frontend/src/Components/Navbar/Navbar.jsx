import React, { useContext, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="flex justify-between items-center p-4 pl-20 pr-20 shadow-xl w-full">
      <div className="flex items-center gap-2.5">
        <h1 className="text-blue-800 font-bold text-5xl cursor-pointer xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
          Winyo
        </h1>
      </div>
      <FiMenu
        size={25}
        onClick={dropdown_toggle}
        className="block md:hidden cursor-pointer ml-18"
      />

      <ul
        ref={menuRef}
        className="hidden md:flex md:items-center md:justify-center list-none gap-12 text-black font-medium flex-col md:flex-row md:gap-6 
                lg:gap-8 xl:gap-10 bg-white w-full md:w-auto md:static absolute top-16 left-0 md:top-auto md:left-auto"
      >
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="flex flex-col items-center justify-center cursor-pointer gap-1 hover:scale-105 duration-200"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-4/5 h-1 rounded-s bg-cyan-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          className="flex flex-col items-center justify-center cursor-pointer gap-1 hover:scale-105 duration-200"
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? (
            <hr className="border-none w-4/5 h-1 rounded-s bg-cyan-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          className="flex flex-col items-center justify-center cursor-pointer gap-1 hover:scale-105 duration-200"
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? (
            <hr className="border-none w-4/5 h-1 rounded-s bg-cyan-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="flex flex-col items-center justify-center cursor-pointer gap-1 hover:scale-105 duration-200"
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="border-none w-4/5 h-1 rounded-s bg-cyan-500" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      {/* //Login */}
      <div className="flex items-center gap-4 lg:gap-6 xl:gap-4">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="px-4 py-2 bg-blue-700 text-white rounded-xl font-bold cursor-pointer hover:scale-105 duration-200
               active:bg-blue-400 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <FaShoppingCart size={25} className="md:w-6" />
        </Link>
        <div className="w-6 h-6 flex items-center justify-center -mt-5 -ml-5 rounded-full font-medium bg-red-600 text-white cursor-pointer lg:w-5 lg:h-5 xl:w-6 xl:h-6 top-1 mr-4">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
