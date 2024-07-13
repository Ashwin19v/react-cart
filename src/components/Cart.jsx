import React, { useEffect, useState } from "react";
import "./cart.css";
export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + parseFloat(curr.amount), 0).toFixed(2)
    );
  }, [cart]);

  const dele = (x) => {
    setCart(cart.filter((c) => c.id !== x));
  };
  return (
    <>
      <h1 className="head">Cart products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-prod" key={product.id}>
            <div className="img">
              <img src={product.image} />
            </div>
            <div className="details">
              <h3>{product.foodName}</h3>
              <p>price : $ {product.amount}</p>
              {cart.includes(product) ? (
                <button onClick={() => dele(product.id)} className="remove">
                  Remove
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        <h2 className="amt">Total amount : ${total}</h2>
      </div>
    </>
  );
};
