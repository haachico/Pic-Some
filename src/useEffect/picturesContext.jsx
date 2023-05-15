import { createContext, useEffect, useState } from "react";

export const picturesContext = createContext();

export const Provider = ({ children }) => {
  const [picsData, setPicsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleFavorite = (id) => {
    setPicsData(
      picsData.map((e) =>
        e.id === id ? { ...e, isFavorite: !e.isFavorite } : e
      )
    );
  };

  const handleAddToCart = (id) => {
    setCartItems([...cartItems, ...picsData.filter((e) => e.id === id)]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((e) => e.id !== id));
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );

      const data = await response.json();
      setPicsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(cartItems, "CARTITEMS");

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <picturesContext.Provider
        value={{
          cartItems,
          setCartItems,
          picsData,
          setPicsData,
          toggleFavorite,
          handleAddToCart,
          handleRemoveFromCart,
        }}
      >
        {children}
      </picturesContext.Provider>
    </div>
  );
};
