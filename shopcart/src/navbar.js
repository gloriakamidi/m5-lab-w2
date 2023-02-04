import React, { useState } from "react";
import DisplayProducts from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
// import React, { useState } from "react";
import Cart from "./Cart";
import SignIn from "./signin";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Col, Nav, NavItem, NavbarBrand } from "reactstrap";

export default function Navbar(props) {
  const { prods } = props;
  let prodsKept = prods.map(({ id, value, ...rest }) => rest);
  const [sword, setSWord] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const res = prodsKept.filter(obj =>
      Object.values(obj).some(val => val.includes(sword))
    );

    handleShow(res);
  };

  const [show, setShow] = useState(false);
  const [showProd, setShowProd] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (res) => {
    setShow(true);
    setShowProd(res);
    console.log(res);
  };

  return (
    <React.Fragment>
      <Router>
        <Nav className="navbar bg-info">
          <Link to="/" className="HomeLink">
            <NavbarBrand>Shop 2 React</NavbarBrand>
          </Link>

          <Link to="/cart">
            0 items
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fas fa-2x my-3  text-white"
            />
          </Link>
        </Nav>
        {/* Routes  */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DisplayProducts
                products={props.prods}
                onIncrement={props.handleIncrement}
                onDecrement={props.handleDecrement}
              />
            }
          />
          <Route path="/cart" element={<Cart prods={props.prods} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

// export default Navbar;


// {/* <container>
//   <Router>
//     <Nav className="navbar bg-info">
//       <Link to="/" className="HomeLink">
//         <NavbarBrand>Shop 2 React</NavbarBrand>
//       </Link>

//       <Link to="/cart">
//         0 items
//         <FontAwesomeIcon
//           icon={faShoppingCart}
//           className="fas fa-2x my-3  text-white"
//         />
//       </Link>
//     </Nav>
//     {/* Routes  */}
//     <Routes>
//       <Route
//         exact
//         path="/"
//         element={
//           <DisplayProducts
//             products={props.prods}
//             onIncrement={props.handleIncrement}
//             onDecrement={props.handleDecrement}
//           />
//         }
//       />
//       <Route path="/cart" element={<Cart prods={props.prods} />} />
//     </Routes>
//   </Router>
// </container>; */}