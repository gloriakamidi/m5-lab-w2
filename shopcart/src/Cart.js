import React from "react";
// import { useCart } from "react-use-cart";

function Cart(props) {
  
const totalValue = props;
  return (
    <div>
      {props.products.map((product) => {
        return (
          <div>
            <h1>Cart</h1>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name}/>
          </div>
        );
      })}
    </div>
  );
    }

export default Cart;






