import { URL } from "./api-variables";
import { content } from "./api-variables";

/**
 * Main API call for online-shop API.
 * This function constructs a URL using a base path and optional id to retrieve data.
 * @param id - The identifier for a specific product, defaults to an empty string which implies fetching all products.
 * @returns - Returns the data fetched from the API.
 *
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
export default async function ApiCall(id = "") {
  try {
    const response = await fetch(`${URL}/${id}`, content);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
}
