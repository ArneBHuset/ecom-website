/**
 * Image interface to type-check image objects.
 *
 * @param {string} url - The URL of the image.
 * @param {string} alt - The alternate text for the image, used for accessibility and when the image cannot be displayed.
 */
export interface Image {
  url: string;
  alt: string;
}

/**
 * Review interface to type-check product review objects.
 *
 * @param {string} id - The unique identifier for the review.
 * @param {string} username - The username of the user who wrote the review.
 * @param {number} rating - The rating given by the user, typically on a scale of 1 to 5.
 * @param {string} description - A textual description of the review details.
 */
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

/**
 * Product interface to type-check product objects.
 *
 * @param {string} id - The unique identifier of the product.
 * @param {string} title - The title or name of the product.
 * @param {string} description - A detailed description of the product.
 * @param {number} price - The original price of the product.
 * @param {number} discountedPrice - The discounted price of the product if available.
 * @param {Image} image - An Image object containing the URL and alternate text for the product image.
 * @param {number} rating - The average user rating of the product.
 * @param {string[]} tags - An array of tags or categories associated with the product.
 * @param {Review[]} reviews - An array of Review objects containing reviews of the product.
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}
