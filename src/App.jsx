import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Header} from "./components/Header.jsx"
import {Home} from "./components/Home.jsx"
import {Cart} from "./components/Cart.jsx"
import { useState } from 'react'
function App() {
 const[cart,setCart]=useState([]);

  return (
    <>
   <BrowserRouter>
   <Header cart={cart}/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/>} ></Route>
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} ></Route>
      </Routes>
    </div>
   </BrowserRouter>
    </>
  )
}

export default App
