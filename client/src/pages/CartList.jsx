import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem,clearCart } from '../redux/slice/cartSlice'
import {useNavigate} from 'react-router-dom'

export const CartList = () => {
  const navigate = useNavigate()
  const cartItem = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItem.reduce((sum, item) => sum + item.price, 0)
// place order
const handleOrder =()=>{
  localStorage.clear()
  alert("Oder placed")
  dispatch(clearCart())
  navigate('/')

}
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-8 text-center">
        🛒 Cart Items
      </h1>

      {cartItem.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* cart products */}
          <div className="md:col-span-2 space-y-6">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-4 flex items-center gap-6"
              >
                <div className="w-24 h-24 shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-medium mb-3">
                    ₹{item.price}
                  </p>

                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* cart details */}
          <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-6">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total Price:</span>
              <span className="text-green-600">
                ₹{totalPrice}
              </span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition" onClick={handleOrder}>
              Place Order
            </button>
          </div>

        </div>
      ) : (
        <h1 className="text-center text-xl text-gray-500">
          No Products
        </h1>
      )}

    </div>
  )
}