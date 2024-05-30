import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "../ui/icons/search";
import { Search } from "../ui/search/Search";
import { StyledInputBase } from "../ui/search/InputBase";
import { Product } from "../../types/ProductInterface";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SearchFieldProps {
  products: Product[];
}

export default function SearchField({ products }: SearchFieldProps) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setOpen(true);
  };

  const handleCardClick = (id: string) => {
    navigate(`/Singleproduct/:${id}`);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }} margin={5}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products by title"
          inputProps={{ "aria-label": "search" }}
          value={input}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 3000)}
        />
      </Search>
      {open && input && filteredProducts.length > 0 && (
        <List
          sx={{
            position: "absolute",
            width: "auto",
            zIndex: 1,
            bgcolor: "background.paper",
          }}
        >
          {filteredProducts.map((product) => (
            <ListItem>
              <Button onClick={() => handleCardClick(product.id)}>
                <ListItemText primary={product.title} />
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
