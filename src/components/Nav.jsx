import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg">
      <span className="text-2xl font-extrabold tracking-wide">Redux Store</span>
      <div className="flex space-x-6">
        <Link
          className="navLink text-lg font-medium hover:text-gray-300 transition duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="navLink text-lg font-medium hover:text-gray-300 transition duration-300"
          to="/cart"
        >
          Cart
        </Link>
        <span className="cartCount text-lg font-semibold bg-white text-indigo-500 px-3 py-1 rounded-full shadow-md">
          Cart Item: {items.length}
        </span>
      </div>
    </div>
  );
};

export default Nav;
