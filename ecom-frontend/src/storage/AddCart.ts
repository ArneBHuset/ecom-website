interface CartItem {
  id: string;
  title: string;
  price: number;
  imageURL: string;
}

export default function AddCart(productInCart: CartItem) {
  const existingCart = sessionStorage.getItem("cartData");
  const cartData = existingCart ? JSON.parse(existingCart) : [];

  const index = cartData.findIndex(
    (item: CartItem) => item.id === productInCart.id
  );

  if (index === -1) {
    cartData.push(productInCart);
  } else {
    cartData[index] = productInCart;
  }

  sessionStorage.setItem("cartData", JSON.stringify(cartData));
}
