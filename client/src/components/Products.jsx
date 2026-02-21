import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem,removeItem} from '../redux/slice/cartSlice'
import {fetchProducts} from '../redux/slice/productSlice'

export const Products = () => {
  const dispatch = useDispatch()
  const product = useSelector((state)=>state.products.items)
  const loading = useSelector((state)=>state.products.loading)
  const error = useSelector((state)=>state.products.error)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  if(loading){
    return <p className="text-center mt-10 text-xl">Loading...</p>
  }

  if(error){
    return <p className="text-center mt-10 text-red-500">{error.message}</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {
          product.map((item,id)=>(
            
            <div key={id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4">
              
              {/* Product Image */}
              <img
                src={item.thumbnail}
                alt="Product"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              {/* Product Info */}
              <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-4 font-medium">
                Rs. {item.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-black text-white py-2 rounded-lg hover:opacity-80 transition"
                  onClick={()=>dispatch(addItem(1))}
                >
                  Add to Cart
                </button>

                <button
                  className="flex-1 border border-black py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={()=>dispatch(removeItem(1))}
                >
                  Remove
                </button>
              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}