/**
 * The base URL for the API call.
 */
export const URL = "https://v2.api.noroff.dev/online-shop";
/**
 * Default configuration for fetch requests.
 * Includes method type and headers that specify JSON as the content type.
 */
export const content = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
