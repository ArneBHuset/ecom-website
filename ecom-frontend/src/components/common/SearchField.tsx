import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "../ui/icons/search";
import { Search } from "../ui/search/Search";
import { StyledInputBase } from "../ui/search/InputBase";
import { Product } from "../../types/ProductInterface";
import { useState } from "react";

interface SearchFieldProps {
  products: Product[];
}

export default function SearchField({ products }: SearchFieldProps) {
  const [input, setInput] = useState("");
  console.log(input);
  console.log(products);

  //   const productTitles = products.map((product: Product) => product.title);
  //   console.log("Using .map", productTitles);

  if (products) {
    for (const product of products) {
      const { productTitles } = product.title;
      productTitles.filter();
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} margin={5}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for proudcts by title"
          inputProps={{ "aria-label": "search" }}
          //   value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </Search>
    </Box>
  );
}
