import { useContext } from "react";
import { CartContext } from "./CartContext";

/**
 * A hook for accessing the cart context. Ensures the context is used within its provider.
 * @returns The cart context with state and functions.
 * @throws Will throw an error if the hook is used outside of the CartProvider.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
