import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ProductItem from "../common/ProductItem";
import ApiCall from "../../api/api-call";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductList() {
  const [products, setProducts] = useState(null);

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
        {products.map((product) => (
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
