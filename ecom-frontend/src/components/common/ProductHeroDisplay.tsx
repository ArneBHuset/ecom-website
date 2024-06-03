import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { Item } from "../ui/other/Item";
import { Product } from "../../types/ProductInterface";
import { useState, useEffect } from "react";

interface SearchFieldProps {
  products: Product[];
}

export default function ProductHeroDisplay(productData: SearchFieldProps) {
  console.log("Data in hero", productData);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    productData.products.map((product: Product) => {
      setProducts(product);
    });
  });

  console.log("Products in hero", products);

  return (
    <Grid container>
      <Grid item xs={6} md={5}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            margin={"auto"}
            justifyContent={"center"}
            sx={{
              display: "flexbox",
              justifyContent: "center",
            }}
          >
            <Item>
              <Box
                border={1}
                borderRadius={40}
                height={400}
                width={300}
                margin="auto"
              >
                <img src={data.image}></img>
              </Box>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="row" spacing={4}>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item1
                </Box>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item2
                </Box>
                <Box border={1} borderRadius={100} width={100} height={100}>
                  Item3
                </Box>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Item>
              <Box
                border={1}
                borderRadius={40}
                height={400}
                width={300}
                margin="auto"
              >
                {" Inserted data"}
              </Box>
            </Item>
            <Item sx={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
