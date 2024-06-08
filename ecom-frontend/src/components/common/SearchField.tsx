import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper } from "../ui/icons/search";
import { StyledInputBase } from "../ui/search/InputBase";
import { Product } from "../../types/ProductInterface";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "../ui/search/Search";
import { useTheme } from "@mui/material";

interface SearchFieldProps {
  products: Product[];
}

/**
 * Represents a search input field that dynamically filters products based on titles.
 * Displays a dropdown list of matching products. Each product can be clicked to navigate to its detailed product page.
 * @param {SearchFieldProps} props - The props passed to the component.
 * @param {Product[]} props.products - An array of Product objects to search through.
 * @returns {JSX.Element} The SearchField component renders a search bar with auto-complete suggestions
 *                        that appear as the user types, and provides navigation functionality to the product details.
 */
export default function SearchField({ products }: SearchFieldProps) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

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
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{ background: theme.palette.primary.main }}
    >
      <Box maxWidth="md" marginTop={4} sx={{ marginRight: { md: 55 } }}>
        <Search>
          <SearchIconWrapper color="red" sx={{ zIndex: "10" }}>
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
              width: { xs: "26ch", sm: "36ch" },
              maxHeight: 300,
              overflowY: "auto",
              marginLeft: 3,
              zIndex: 1000,
              bgcolor: theme.palette.common.white,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          >
            {filteredProducts.map((product) => (
              <ListItem tabIndex={0}>
                <Button
                  onClick={() => handleCardClick(product.id)}
                  sx={{
                    color: theme.palette.common.black,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.black,
                      textDecoration: "underline",
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          textAlign: "center",
                          paddingLeft: 2,
                          fontSize: theme.typography.h6,
                        }}
                      >
                        {product.title}
                      </Typography>
                    }
                  />
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}
