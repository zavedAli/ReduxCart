import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      Welcome to redux toolkit store
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
