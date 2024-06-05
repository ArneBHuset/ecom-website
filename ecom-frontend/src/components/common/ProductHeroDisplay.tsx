import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Item } from "../ui/other/Item";
import { Product } from "../../types/ProductInterface";

interface SearchFieldProps {
  products: Product[];
}

export default function ProductHeroDisplay({ products }: SearchFieldProps) {
  const navigate = useNavigate();

  // We will display the first product for demonstration
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);

  const randomNumber = () => {
    let count = 0;
    products.forEach(() => {
      count += 1;
    });
    const randomIndex = Math.floor(Math.random() * count);
    console.log(randomIndex);
    return randomIndex;
  };

  useEffect(() => {
    if (products.length > 0) {
      setFeaturedProduct(products[randomNumber()]);
    }
  }, [products]);

  // Navigate to product details page
  const handleNavigate = () => {
    if (featuredProduct) {
      navigate(`/Singleproduct/${featuredProduct.id}`);
    }
  };

  if (!featuredProduct) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
  //   sx={{ backgroundColor: "red" }}

  return (
    <Grid container>
      <Grid item sm={6} height={250} sx={{ background: "red" }} zIndex={100}>
        <Box
          className="hero-products-hover"
          onClick={handleNavigate}
          border={1}
          borderRadius={40}
          height={400}
          width={300}
          margin="auto"
          sx={{
            backgroundImage: `url(${featuredProduct.image.url})`,
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
          <Typography variant="h5">{featuredProduct.title}</Typography>
        </Box>
      </Grid>
      <Grid
        item
        height={250}
        zIndex={0}
        sm={6}
        sx={{
          background: "red",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          className="hero-products-hover-up"
          onClick={handleNavigate}
          border={1}
          borderRadius={40}
          height={420}
          width={400}
          margin="auto"
          sx={{
            backgroundImage: `url(${featuredProduct.image.url})`,
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
          <Typography variant="h5">{featuredProduct.title}</Typography>
        </Box>
      </Grid>
      <Grid item sm={6} height={350} sx={{ background: "blue" }} zIndex={50}>
        <Stack
          direction="row"
          spacing={2}
          marginTop={25}
          justifyContent={"center"}
        >
          <Box
            className="hero-products-hover"
            onClick={handleNavigate}
            border={1}
            borderRadius={40}
            height={100}
            width={100}
            margin="auto"
            sx={{
              backgroundImage: `url(${featuredProduct.image.url})`,
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "1px 1px 3px black",
              cursor: "pointer",
            }}
          ></Box>
          <Box
            className="hero-products-hover"
            onClick={handleNavigate}
            border={1}
            borderRadius={40}
            height={100}
            width={100}
            margin="auto"
            sx={{
              backgroundImage: `url(${featuredProduct.image.url})`,
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "1px 1px 3px black",
              cursor: "pointer",
            }}
          ></Box>
          <Box
            className="hero-products-hover"
            onClick={handleNavigate}
            border={1}
            borderRadius={40}
            height={100}
            width={100}
            margin="auto"
            sx={{
              backgroundImage: `url(${featuredProduct.image.url})`,
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textShadow: "1px 1px 3px black",
              cursor: "pointer",
            }}
          ></Box>
        </Stack>
      </Grid>
      <Grid item sm={6} height={350} sx={{ background: "blue" }} zIndex={50}>
        <Item
          sx={{
            textAlign: "left",
            background: "blue",
            marginLeft: "-12%",
            paddingRight: 10,
          }}
        >
          <Typography variant="h4" marginTop={4}>
            Welcome to FlashFinds
          </Typography>
          <Typography paragraph color={"white"}>
            Welcome to FlashFinds your ultimate online destination for
            discovering incredible deals on must-have products! Explore a wide
            range of items that combine quality, variety, and unbeatable prices,
            all at your fingertips.
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}
