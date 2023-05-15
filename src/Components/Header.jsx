import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { picturesContext } from "..";
const Header = () => {
  const { cartItems } = useContext(picturesContext);
  return (
    <div className="header">
      <NavLink to="/">
        {" "}
        <h1>Pic some</h1>{" "}
      </NavLink>
      <NavLink to="/cart">
        Cart
        {cartItems.length === 0 ? (
          <i class="fa-solid fa-cart-plus"></i>
        ) : (
          <i class="fa-solid fa-cart-shopping"></i>
        )}
      </NavLink>
    </div>
  );
};

export default Header;
