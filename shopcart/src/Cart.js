import React from "react";
// import { useCart } from "react-use-cart";

function Cart(props) {
      let addedProduct = addedProduct.filter(props.map.prod.id);
// const totalValue = props;
// let item= [...products];
// item = item.filter((prods)) => prods.id !== prod.id);
  return (
    <div>
      {props.prods.map((prod) => {
        return (
          <div key={prod.id} className="border border-1 p-3">
            <img
              src={prod.image}
              width="150"
              alt={prod.name}
              className="mx-5"
              //   onClick={() => handleShow(product)}
            />
            <h4 className="mx-5">{prod.name}</h4><span>{prod.quantity}</span>
            

            {/* {props.filter(prod) === prod.id} */}
            {/* {prod.filter(prod) === prod.id} */}
            {/* {Cart.length === 0 && <p>Cart: (empty)</p>}
            {Cart.length >0 && <p>Cart: (empty)</p>} */}
            {/* {`${prod.name} : ${prod.quantity}`} */}
            {/* <input onClick={() => props.onIncrement(prod)} /> */}
          </div>
        );
      })}
    </div>
  );
    }

export default Cart;






