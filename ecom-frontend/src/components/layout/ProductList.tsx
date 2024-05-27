import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from "../common/ProductItem";
import ApiCall from "../../api/api-call";
import { useState, useEffect } from "react";
import { Product } from "../../types/ProductInterface";
import { Item } from "../ui/other/Item";

export default function ProductList() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await ApiCall();
      setProducts(apiData.data);
    };
    fetchData();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Item>
              <ProductItem product={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
