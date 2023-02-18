import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">SHOPPING</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/Login" className={"one"}>
          Login
        </NavLink>
        <NavLink to="">
          <span className="shoppingCart">
            <i class="fas fa-cart-plus"></i>
            <span className="cartcount">0</span>
          </span>
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
