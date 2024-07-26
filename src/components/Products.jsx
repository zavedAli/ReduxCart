import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return { products };
};

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useFetchProducts();

  const memoizedProducts = useMemo(() => products, [products]);

  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAdd = (product) => {
    dispatch(add(product));
    setAddedProduct(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {memoizedProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            <div className="w-full h-48 mb-2 flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">
              {product.title}
            </h2>
            <p className="text-gray-700 text-center mb-4">${product.price}</p>
            <button
              onClick={() => handleAdd(product)}
              type="button"
              className="p-2 border rounded bg-customPurple text-white mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showPopup && addedProduct && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg transition duration-300">
          item added to cart!
        </div>
      )}
    </div>
  );
};

export default Products;
