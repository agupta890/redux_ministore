import React from 'react'

export const Products = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        
        {/* Product Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndMcJW71HLgi9ntgoterJiJJjLxbtOVVpyA&s"
          alt="Product"
          className="rounded-xl mb-4"
        />

        {/* Product Info */}
        <h2 className="text-xl font-semibold mb-2">
          Premium Headphones
        </h2>
        <p className="text-gray-600 mb-4">$99</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
    
            className="flex-1 bg-black text-white py-2 rounded-lg hover:opacity-80 transition"
          >
            Add to Cart
          </button>

          <button
            
            className="flex-1 border border-black py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Remove
          </button>
        </div>

        {/* Cart Count */}
        <div className="mt-4 text-center text-gray-700 font-medium">
          
        </div>

      </div>

    </div>
  )
}
