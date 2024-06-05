import {
  Box,
  Typography,
  IconButton,
  Icon,
  CircularProgress,
} from "@mui/material";
import Star from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import ApiCall from "../../api/api-call";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../ui/cart/useCart";
import { Item } from "../ui/other/Item";

import { Product } from "../../types/ProductInterface";
// import { Review } from "../../types/ProductInterface";

export default function ViewProduct() {
  const [product, setProduct] = useState<Product | null>(null);

  const { productId } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.discountedPrice,
        imageURL: product.image.url,
        quantity: 1,
      });
    }
  };

  useEffect(() => {
    if (productId) {
      const fetchData = async () => {
        const apiData = await ApiCall(productId.replace(":", ""));
        setProduct(apiData.data);
      };
      fetchData();
    } else {
      console.log("No product id");
    }
  }, [productId]);

  if (!product) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={0} marginTop={4}>
        <Grid item xs={12} sm={7}>
          <Item>
            <img
              src={`${product.image.url} `}
              alt={`${product.image.alt} || Image for ${product.title}`}
              className="product-image"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Item>
            <Box display={"flex"} gap={20}>
              <Typography variant="h4">{product.title}</Typography>
              <IconButton aria-label="add to cart" onClick={handleAddToCart}>
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
            <Typography paragraph marginTop={2}>
              {product.description}
            </Typography>
            <Typography className="discount-slash" marginTop={2}>
              {product.price === product.discountedPrice
                ? null
                : `${product.price}$`}
            </Typography>
            <Typography variant="h6" marginTop={2}>
              {product.discountedPrice}$
              <span className="discount-save">
                {product.price - product.discountedPrice > 0
                  ? ` save ${product.price - product.discountedPrice}$!`
                  : null}
              </span>
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={1} marginTop={2}>
              <Icon>
                <Star />
              </Icon>
              <Typography variant="h6">{product.rating}</Typography>
              <Typography marginLeft={6}>{`#${product.tags.join(
                " #"
              )}`}</Typography>
            </Box>
            <Box marginTop={4}>
              {product?.reviews.map((review) => (
                <Box key={review.id} className="review-box">
                  <Typography variant="h6" paragraph>
                    {review.username}
                  </Typography>
                  <Typography paragraph>{review.description}</Typography>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Icon aria-label="rating">
                      <Star />
                    </Icon>
                    <Typography variant="h6"> {review.rating} </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
