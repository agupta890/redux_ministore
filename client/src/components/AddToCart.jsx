import React from 'react'
import { ShoppingCart } from "lucide-react";
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

export const AddToCart = () => {
  const cartValueSelector = useSelector((state)=>state.cart.items)
  

  return (
   <Link to='/cart'>
   <div className="relative cursor-pointer hover:text-black transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartValueSelector.length ? cartValueSelector.length : 0}
            </span>
          </div></Link>
          
  )
}
