// // Define the function to search products
// const searchProduct = (searchString, products, setSearchResult) => {
//   // Clear search result if the search field is empty
//   if (!searchString.trim()) {
//     setSearchResult([]);
//     return;
//   }

//   // Normalize the search string to lower case for case-insensitive comparison
//   const normalizedSearchString = searchString.toLowerCase();

//   // Filter products based on the search criteria
//   const results = products.filter((product) => {
//     // Check if search string matches the product id, title, description or any tags
//     return (
//       product.id.toLowerCase().includes(normalizedSearchString) ||
//       product.title.toLowerCase().includes(normalizedSearchString) ||
//       product.description.toLowerCase().includes(normalizedSearchString) ||
//       product.tags.some((tag) =>
//         tag.toLowerCase().includes(normalizedSearchString)
//       )
//     );
//   });

//   // Update the search results state with the filtered products
//   setSearchResult(results);
// };

// export default searchProduct;
