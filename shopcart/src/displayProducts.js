import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ListGroup, ListGroupItem } from "reactstrap";


function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImge(item);
  };

  //for + and - buttons
const [counter, setCounter] = useState(0)
const [totalCounter, setTotalCounter] = useState(0);


//+ and - handlers
 const onIncrement = (product) => {
  setCounter((val) => val + 1); 
  product.quantity = counter;
  setTotalCounter((val) => val + 1); 
 };

  const onDecrement = (product) => {
    setCounter((val) => val - 1);
    product.quantity= counter
    setTotalCounter((val) => val - 1); 
  };



  return (
    
    <div>
      {props.products.map((product) => {
      
        return (
          <div key={product.id} className="border border-1 p-3">
            <h4 className="mx-5">{product.name}</h4>
            <img
              src={product.image}
              width="150"
              alt={product.name}
              className="mx-5"
              onClick={() => handleShow(product)}
            />
            <button
              className="btn btn-secondary mx-2"
              // onClick={() => props.onIncrement(product)}
              onClick={() => onIncrement(counter)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
            </button>
            <button
              className="btn btn-secondary mx-2"
              // onClick={() => props.onDecrement(product)}
              onClick={() => onDecrement(counter)}
              disabled={counter === 0}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
            </button>
            <div className="d-inline-block mx-4 text-center">
              <span className="d-block mb-2">Quantity</span>
              <span
                id="qty"
                className="px-3 py-2 border border-3 d-inline-block"
              >
                {/* {product.quantity} */}
                {counter}
              </span>
            </div>
          </div>
        );
      })}

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
            <span className="text-dark">Ratings:</span> {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;


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