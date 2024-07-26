import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4">Cart</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center border p-4 rounded shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain mr-4"
            />
            <div className="flex-grow">
              <h5 className="text-xl font-semibold">{item.title}</h5>
              <h5 className="text-gray-700">${item.price}</h5>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="p-2 border rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center border-t pt-4">
        <h4 className="text-xl font-bold">
          Total Amount: ${totalAmount.toFixed(2)}
        </h4>
        <button
          className="p-2 border rounded bg-green-500 text-white"
          onClick={() => console.log("Buy Now clicked")}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
