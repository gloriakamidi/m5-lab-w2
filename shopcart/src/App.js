import './App.css';
import { products } from "./products.js"
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
//import Cologne from "../products/cologne.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = products;
  

  
  }

  render() {
   return (
    {

    },
    (
      <div>
      </div>
    )
  
     );
   }
}

export default App;

//render nav and pass data as attribute into the app 