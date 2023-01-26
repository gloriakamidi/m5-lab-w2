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

  

  render() {
    return (
      <div className="App">
        <Navbar prods={this.state.items} titre={this.state.title} />
        {/* <Cart /> */}
      </div>
    );
  }
}

export default App;