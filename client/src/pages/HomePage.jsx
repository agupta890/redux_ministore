import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to MiniStore 🛍️
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Discover the best products at amazing prices.
      </p>

      <Link to="/products">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
          Shop Now
        </button>
      </Link>

    </div>
  );
};
