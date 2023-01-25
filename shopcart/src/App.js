import './App.css';
import React, { Component } from "react";
// import { useCart } from "react-use-cart";
// import { CartProvider } from "react-use-cart";
import { products } from "./products.js"
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from './Cart';
// import { ListGroup, ListGroupItem } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Shop 2 React",
      items: products,
    };
  }
  //  onIncrement = (add) => {
  // this.setState({})
  // };
  // onDecrement = (subtract) => {
    // this.setState({})
  // };

  
 
  //   const onDecrement = () => {
  //   setQuantity(prevCount => prevCount - 1 );

  // }
  // const onIncrement = () => {
  //   setQuantity((prevCount) => prevCount + 1);
  // };

  render() {
    //  <div>
    //    <ListGroup>
    //      <h1>
    //        <ListGroupItem
    //          tag="a"
    //          className="align-self-center py-2 w-50 bg-info text-dark"
    //        >
    //          <span>{this.state.title}</span>
    //          <span className="cart">
    //            <faShoppingCart />0 items
    //          </span>
    //        </ListGroupItem>
    //      </h1>
    //    </ListGroup>
    //  </div>;
    return (
      <div className="App">
        <Navbar prods={this.state.items} />
        {/* <Cart /> */}
      </div>
    );
  }
}

export default App;