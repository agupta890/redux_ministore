import React from 'react'
import { ShoppingCart } from "lucide-react";
export const AddToCart = () => {
  return (
   
          <div className="relative cursor-pointer hover:text-black transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
  )
}
