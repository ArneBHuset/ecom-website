import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Item } from "../ui/other/Item";
import { Product } from "../../types/ProductInterface";
import { useTheme } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

interface SearchFieldProps {
  products: Product[];
}

export default function ProductHeroDisplay({ products }: SearchFieldProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  // Initialize states for each Box with products
  const [product1, setProduct1] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [product3, setProduct3] = useState<Product | null>(null);
  const [product4, setProduct4] = useState<Product | null>(null);
  const [product5, setProduct5] = useState<Product | null>(null);

  const generateRandomIndices = (num: number, max: number): number[] => {
    const indices = new Set<number>();
    while (indices.size < num) {
      const randomIndex = Math.floor(Math.random() * max);
      indices.add(randomIndex);
    }
    return Array.from(indices);
  };

  // Function to assign random products to each Box
  const assignRandomProducts = () => {
    const randomIndices = generateRandomIndices(5, products.length);
    setProduct1(products[randomIndices[0]]);
    setProduct2(products[randomIndices[1]]);
    setProduct3(products[randomIndices[2]]);
    setProduct4(products[randomIndices[3]]);
    setProduct5(products[randomIndices[4]]);
  };

  // Effect to update products on initial render or when products change
  useEffect(() => {
    if (products.length >= 5) {
      assignRandomProducts();
    }
  }, [products]);

  const handleNavigate = (productId: string) => {
    navigate(`/Singleproduct/${productId}`);
  };

  if (!product1 || !product2 || !product3 || !product4 || !product5) {
    return <CircularProgress />;
  }

  return (
    <Grid container maxWidth="md">
      <Grid
        item
        sm={6}
        height={250}
        sx={{ background: theme.palette.primary.main }}
        zIndex={100}
      >
        <Box
          className="hero-products-hover"
          style={{ color: theme.palette.primary.main }}
          onClick={() => handleNavigate(product1.id)}
          border={1}
          borderRadius={40}
          height={440}
          width={340}
          margin="auto"
          sx={{
            backgroundImage: `url(${product1.image.url})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textShadow: "1px 1px 3px black",
            cursor: "pointer",
          }}
        >
          <Typography variant="h5" paddingBottom={30}>
            {product1.title}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        height={250}
        zIndex={0}
        sm={6}
        sx={{
          display: {
            xs: "none",
            md: "block",
            background: theme.palette.primary.main,
          },
        }}
      >
        <Box
          className="hero-products-hover-up"
          onClick={() => handleNavigate(product2.id)}
          border={1}
          borderRadius={40}
          height={420}
          width={400}
          margin="auto"
          sx={{
            backgroundImage: `url(${product2.image.url})`,
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textShadow: "1px 1px 3px black",
            cursor: "pointer",
          }}
        >
          <Typography variant="h5" paddingBottom={33}>
            {product2.title}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        sm={6}
        height={350}
        sx={{ background: theme.palette.secondary.main }}
        zIndex={50}
      >
        <Box marginTop={23}>
          <Typography
            variant="h6"
            width={"100%"}
            display={"flex"}
            paddingLeft={8}
          >
            Check out these finds!
          </Typography>
        </Box>
        <Stack
          direction="row"
          marginTop={2}
          spacing={2}
          justifyContent={"center"}
        >
          {[product3, product4, product5].map((product, index) => (
            <Box
              key={index}
              className="hero-products-hover"
              onClick={() => handleNavigate(product.id)}
              border={1}
              borderRadius={40}
              height={100}
              width={100}
              margin="auto"
              sx={{
                backgroundImage: `url(${product.image.url})`,
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                textShadow: "1px 1px 3px black",
                cursor: "pointer",
              }}
            ></Box>
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        sm={6}
        height={350}
        sx={{ background: theme.palette.secondary.main }}
        zIndex={50}
      >
        <Item
          sx={{
            textAlign: "left",
            background: theme.palette.secondary.main,
            marginLeft: "-12%",
            paddingRight: 10,
          }}
        >
          <Typography variant="h4" marginTop={4}>
            Welcome to FlashFinds
          </Typography>
          <Typography paragraph color={"white"}>
            Welcome to FlashFinds, your ultimate online destination for
            discovering incredible deals on must-have products! Explore a wide
            range of items that combine quality, variety, and unbeatable prices,
            all at your fingertips.
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}
