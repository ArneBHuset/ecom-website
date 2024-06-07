import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from "../products/ProductItem";
import ApiCall from "../../api/api-call";
import { useState, useEffect } from "react";
import { Product } from "../../types/ProductInterface";
import { Item } from "../ui/other/Item";
import SearchField from "../common/SearchField";
import ProductHeroDisplay from "../products/ProductHeroDisplay";
import { CircularProgress } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await ApiCall();
      setProducts(apiData.data);
    };
    fetchData();
  }, []);

  if (!products) {
    return (
      <>
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  return (
    <>
      <Box>
        <Box height={760} style={{ background: theme.palette.primary.main }}>
          <SearchField products={products} />
          <Box
            height={410}
            marginTop={35}
            style={{ background: theme.palette.secondary.main }}
          >
            <ProductHeroDisplay products={products} />
          </Box>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          maxWidth="md"
          marginX={"auto"}
          marginTop={10}
        >
          {products.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} marginX={"auto"}>
              <Item>
                <ProductItem product={product} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
