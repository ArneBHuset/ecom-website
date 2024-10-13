/**
 * Interface representing a single item in the shopping cart.
 */
export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string;
}
