import React from 'react'
import "./product.css"
export const Product = ({product,cart,setCart}) => {
  const add=()=>{
        setCart([...cart,product])
  }
  const del=()=>{
        setCart(cart.filter((c)=>c.id!==product.id))
  }
    return (
    <div className='product'>
        <div className="img">
            <img src={product.image}/>
        </div>
        <div className="details">
        <h3>{product.foodName}</h3>
        <p>price $: {product.amount}</p>
        { 
            cart.includes(product)?(
                <button onClick={del} className='remove'>Remove</button>
            ):(
                <button onClick={add}>Add to Cart</button>
            )
        }
        </div>
    </div>
  )
}
