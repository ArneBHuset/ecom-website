import React, { createContext, useState, ReactNode } from "react";

/**
 * Interface representing a single item in the shopping cart.
 */
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string;
}

/**
 * Type definition for the shopping cart context's state and actions.
 */
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  resetCart: () => void;
}

/**
 * Creating the shopping cart context with an undefined initial value to ensure type safety.
 */
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

/**
 * Props for the CartProvider component.
 */
interface CartProviderProps {
  children: ReactNode;
}

/**
 * Provides a context provider for the shopping cart, allowing nested components
 * to access and manipulate the shopping cart state.
 */
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]); // State to hold the cart items

  /**
   * Adds an item to the cart or updates its quantity if it already exists.
   * @param item - Item to be added to the cart.
   */
  const addToCart = (item: CartItem) => {
    setCart((currentCart) => {
      const itemExists = currentCart.find((product) => product.id === item.id);
      if (itemExists) {
        return currentCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  /**
   * Resets the cart to an empty array, effectively clearing all items in the cart.
   */
  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
