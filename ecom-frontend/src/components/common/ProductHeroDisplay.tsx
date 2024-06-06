import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Item } from "../ui/other/Item";
import { Product } from "../../types/ProductInterface";
import { useTheme } from "@mui/material";

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

  const assignRandomProducts = useCallback(() => {
    const randomIndices = generateRandomIndices(5, products.length);
    setProduct1(products[randomIndices[0]]);
    setProduct2(products[randomIndices[1]]);
    setProduct3(products[randomIndices[2]]);
    setProduct4(products[randomIndices[3]]);
    setProduct5(products[randomIndices[4]]);
  }, [products]);

  useEffect(() => {
    if (products.length >= 5) {
      assignRandomProducts();
    }
  }, [products, assignRandomProducts]);

  const handleNavigate = (productId: string) => {
    navigate(`/Singleproduct/${productId}`);
  };

  if (!product1 || !product2 || !product3 || !product4 || !product5) {
    return <CircularProgress />;
  }

  return (
    <Grid container maxWidth="md" marginX={"auto"}>
      <Grid item sm={6} marginTop={-28}>
        <Box
          className="hero-products-hover"
          onClick={() => handleNavigate(product1.id)}
          border={1}
          borderRadius={40}
          height={440}
          width={340}
          marginX={"auto"}
          sx={{
            backgroundImage: `url(${product1.image.url})`,

            backgroundSize: "cover",
            backgroundPosition: "center -80px",
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
        marginTop={-28}
        sm={6}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Box
          className="hero-products-hover-up product-image-slice"
          onClick={() => handleNavigate(product2.id)}
          borderRadius={40}
          height={420}
          width={400}
          marginX={"auto"}
          sx={{
            backgroundImage: `url(${product2.image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center -120px",
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
      <Grid item sm={6}>
        <Box>
          {/* <Typography
            variant="h6"
            width={"100%"}
            display={"flex"}
            paddingLeft={15}
          >
            Check out these finds!
          </Typography> */}
        </Box>
        <Stack
          direction="row"
          marginTop={4}
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
              marginX={"auto"}
              sx={{
                backgroundImage: `url(${product.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center -10px",
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
      <Grid item sm={6} height={200} zIndex={50}>
        <Item
          sx={{
            textAlign: "left",

            background: theme.palette.secondary.main,
            marginTop: -27.2,
            height: "100%",
            paddingRight: 10,
          }}
        >
          <Typography variant="h4" marginTop={4}>
            Welcome to FlashFinds
          </Typography>
          <Typography paragraph color={"white"} marginTop={4}>
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
