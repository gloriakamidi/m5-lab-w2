// import React from "react";
// import { useCart } from "react-use-cart";

// function Cart(props) {


// }
// props.onDecrement(product);

// export default Cart;







// const Cart = () => {
//     const { 
//         isEmpty,
//         totalUniqueItems,
//         products,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart,  
//     } = useCart(); 
//     if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
//     return (
//       <section className="py-4 container">
//         <div className="row justify-content-center">
//           <h5>
//             Cart ({totalUniqueItems}) total Items: ({totalItems}){" "}
//           </h5>
//           <table className="table table-light table-hover m-0">
//             {products.map((product, index) => {
//               <tr key={index}>
//                 <td>
//                   <img src={product.image} style={{ height: "6rem" }} />
//                 </td>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td>{product.qty}</td>
//               </tr>;
//             })}
//           </table>
//         </div>
//       </section>
//     );
// };
