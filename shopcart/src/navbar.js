import React from "react";
import DisplayProducts from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <Router>
        <Link to="/" className="HomeLink">
            Shop to React
        </Link>
        <Link to="/displayProducts">
          <FontAwesomeIcon
            icon={faHome}
            className="fas fa-2x my-3 mr-2 text-white"
          />
        </Link>

        <Link to="/cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="fas fa-2x my-3  text-white"
          />
        </Link>
        {/* Routes */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DisplayProducts  products={props.prods} />
            }
          />
          {/* <Route path="/cart">
                    <Cart/>
                </Route> */}
        </Routes>
      </Router>
    </div>
  );
}
export default Navbar;
