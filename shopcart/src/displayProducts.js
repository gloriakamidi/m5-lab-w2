import React, { Component } from "react";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { products } from "./products.js";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";

class displayProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Shop to React",
      items: products,
    };
  }

  renderItems(items) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
      setShow(true);
      setShowImge(item);
    };

    return (
      <div>
        {items.map((item) => (
          <ListGroupItem className="align-self-center py-2 w-50">
            <div key={item.id}>
              <p>{item.name}</p>
              <span>
                <img
                  src={item.image}
                  width="60px"
                  onClick={() => handleShow(item)}
                />
              </span>
              <span className="btns">
                <button
                className="d-block d-sminline mx-auto my-3 mx-sm-2" >
                  +
                  </button>
                <button>-</button>
              </span>
              <span className="qtity">{item.quantity}</span>quantity
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{showImge.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={showImge.image}
                    width="350"
                    alt={showImge.name}
                    className="mx-5"
                  />
                  <p>
                    <span className="text-dark">Ratings:</span>{" "}
                    {showImge.ratings}/5
                  </p>
                </Modal.Body>
              </Modal>
            </div>
          </ListGroupItem>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <ListGroup>
          <h1>
            <ListGroupItem
              tag="a"
              className="align-self-center py-2 w-50 bg-info text-dark"
            >
              <span>{this.state.title}</span>
              <span className="cart">
                <FontAwesomeIcon icon={faShoppingCart} className="mx-3" />
                <faShoppingCart />0 items
              </span>
            </ListGroupItem>
          </h1>

          {this.renderItems(this.state.items)}
        </ListGroup>
      </div>
    );
  }
}


export default displayProduct;