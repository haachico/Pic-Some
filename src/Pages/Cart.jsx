import { useContext, useState } from "react";

import CartCard from "../Components/CartCard";
import { picturesContext } from "..";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(picturesContext);
  const [buttonText, setButtonText] = useState("Place order");

  const totalCost = 5.3 * cartItems.length;

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((e) => e.id !== id));
  };

  const handlePlaceOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      alert("Order Placed!");
      setButtonText("Place order");
      setCartItems([]);
    }, 3000);
  };
  return (
    <div className="cart--page">
      {cartItems.length === 0 ? (
        <h2>No items in the cart!</h2>
      ) : (
        <>
          {cartItems.map((e) => (
            <CartCard
              img={e.url}
              key={e.id}
              id={e.id}
              handleDelete={handleDelete}
            />
          ))}
          <h3>Total : ${totalCost.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder}>{buttonText}</button>{" "}
        </>
      )}
    </div>
  );
};

export default Cart;
