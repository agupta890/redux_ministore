import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import {CartList} from './pages/CartList'
import {HomePage} from './pages/HomePage'
import {Routes,Route} from 'react-router-dom'



function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route  path='/' element={<HomePage/>}/>
      <Route  path='/products' element={<Products/>}/>
      <Route path='/cart' element={<CartList/>}/>
    </Routes>
      
    </>
  )
}

export default App
