import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
export const Header = ({cart}) => {
  return (
    <div className='nav'>
    <div className="logo">Swiggy</div>
    <ul>
        <li> <Link to={"/"}>Home</Link> </li>
        <li> <Link to={"/Cart"}><span className='num'>{cart.length}</span>View cart</Link> </li>
        
    </ul>
    </div>
  )
}
