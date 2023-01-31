import "./App.css";
import React, { Component } from "react";
// import { useCart } from "react-use-cart";
import { products } from "./products.js";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from './Cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
    };
  }

  handleIncrement = (addquantity) => {
    if (addquantity.quantity < 10) {
      const updatedQuantity = addquantity.quantity++;
      this.setState({ updatedQuantity });
    }
  };

  handleDecrement = (subquantity) => {
    if (subquantity.quantity > 0) {
      const updatedQuantity = subquantity.quantity--;
      this.setState({ updatedQuantity });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar 
        // totalValue={this.state.products.map(prod=>prod.quantity).reduce((acc, curr, index) =>
        //   acc + curr, 0)}
        prods={this.state.items} 
        props={this.state.products}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        />
        
      </div>
    );
  }
}

export default App;
