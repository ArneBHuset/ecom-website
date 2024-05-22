import { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Export a hook to use the cart context
export const useCart = () => useContext(CartContext);

// Provider component that wraps your app and provides cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      // Check if the item is already in the cart
      const itemExists = currentCart.find((product) => product.id === item.id);
      if (itemExists) {
        // If it exists, replace it with the new item (to update quantity or other properties)
        return currentCart.map((product) =>
          product.id === item.id ? item : product
        );
      }
      // If it doesn't exist, add the new item to the cart
      return [...currentCart, item];
    });
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
