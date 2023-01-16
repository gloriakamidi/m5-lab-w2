import './App.css';
import React, { Component } from "react";
import { products } from "./products.js"
import { displayProducts } from "./displayProducts"
import Navbar from "./navbar";

import "bootstrap/dist/css/bootstrap.min.css";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Shop to React",
      items: products,
    };
  }

  handleAddBtn = (renderItems, products) => {
    products.push(renderItems);
  };
  handleRemoveBtn = (renderItems, products) => {
    products.push(renderItems);
  };

  render() {
    return (
      {},
      (
        <div className="App">
          <Navbar />
        </div>
      )
    );
  }
}


export default App;

//render nav and pass data as attribute into the app 