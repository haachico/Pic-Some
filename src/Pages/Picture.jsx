import { useState } from "react";
import { useContext } from "react";

import { picturesContext } from "..";

const Picture = ({ img, id, className, isFavorite }) => {
  const [hover, setHover] = useState(false);

  const { cartItems, toggleFavorite, handleAddToCart, handleRemoveFromCart } =
    useContext(picturesContext);

  const heartIcon = () => {
    if (isFavorite) {
      return (
        <i
          class="fa-solid fa-heart favorite"
          onClick={() => toggleFavorite(id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          class="fa-regular fa-heart favorite"
          onClick={() => toggleFavorite(id)}
        ></i>
      );
    }
  };

  const cartIcon = () => {
    if (cartItems.map((e) => e.id === id).includes(true)) {
      return (
        <i
          class="fa-solid fa-cart-shopping cart"
          onClick={() => handleRemoveFromCart(id)}
        ></i>
      );
    } else if (hover) {
      return (
        <i
          class="fa-solid fa-cart-plus cart"
          onClick={() => handleAddToCart(id)}
        ></i>
      );
    }
  };

  console.log(hover, "HOVER");
  return (
    <div
      className={`${className} photo`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} className="image-grid" />

      {heartIcon()}

      {cartIcon()}
    </div>
  );
};

export default Picture;
