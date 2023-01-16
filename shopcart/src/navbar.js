import React from "react";
import 
{ BrowserRouter as Router, 
    Routes, 
    Route, 
    Link } from "react-router-dom";

    function Navbar (props) {
        return (
          <div>
            <Router>
              {/* Navigation */}
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="fas fa-2x my-3 mr-2 text-white"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="fas fa-2x my-3  text-white"
                    />
                  </Link>
                </li>
              </ul>

              {/* Routes */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/cart">
                  <Cart
                    addItem={this.handleAddBtn}
                    removeItem={this.handleRemoveBtn}
                  />
                </Route>
              </Switch>
            </Router>
          </div>
        );
    }

    export default Navbar;
