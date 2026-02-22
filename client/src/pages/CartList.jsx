import React from 'react'
import {useSelector} from 'react-redux'
export const CartList = () => {
  const cartItem = useSelector((state)=>state.cart.items)
  console.log(cartItem)
  return (
    <div>CartList</div>
  )
}
