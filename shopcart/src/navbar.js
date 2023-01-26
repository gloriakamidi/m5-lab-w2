import React from "react";
import DisplayProducts from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { ListGroup, ListGroupItem } from "reactstrap";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Col, Nav, NavItem, NavbarBrand } from "reactstrap";

function Navbar(props) {
  return (
    <container>
      <Router>
        <Nav className="navbar bg-info">
          <Link to="/" className="HomeLink">
            <NavbarBrand>Shop to React</NavbarBrand>
          </Link>

          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fas fa-2x my-3  text-white"
            />
          </Link>
        </Nav>
        {/* Routes */}
        <Routes>
          <Route
            exact
            path="/"
            element={<DisplayProducts products={props.prods} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </container>
  );
}

export default Navbar;

