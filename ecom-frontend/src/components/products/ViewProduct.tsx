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
import { useTheme } from "@mui/material";

import { Product } from "../../types/ProductInterface";
// import { Review } from "../../types/ProductInterface";

export default function ViewProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams();
  const { addToCart } = useCart();
  const theme = useTheme();

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
          <Box
            className="product-image-slice"
            borderRadius={40}
            height={600}
            width={450}
            sx={{
              backgroundImage: `url(${product.image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center -150px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Item>
            <Box
              display={"flex"}
              gap={20}
              borderBottom={`1px solid ${theme.palette.common.white}`}
            >
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
                  ? ` save ${Math.round(
                      product.price - product.discountedPrice
                    )}$!`
                  : null}
              </span>
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={1} marginTop={2}>
              <Icon style={{ color: theme.palette.primary.main }}>
                <Star sx={{ fontSize: theme.typography.h3 }} />
              </Icon>
              <Typography variant="h6">{`${product.rating}/5`}</Typography>
            </Box>
            <Typography
              sx={{ fontSize: theme.typography.body2 }}
              marginY={2}
            >{`#${product.tags.join(" #")}`}</Typography>
            <Box marginTop={2}>
              {product.reviews.length > 0 ? (
                <Typography
                  style={theme.typography.h4}
                  borderBottom={`1px solid ${theme.palette.common.white}`}
                >
                  Reviews
                </Typography>
              ) : null}
              {product?.reviews.map((review) => (
                <Box key={review.id} className="review-box">
                  <Typography
                    height={20}
                    marginY={2}
                    paragraph
                    display={"flex"}
                    alignItems={"center"}
                  >
                    {`${review.username} gave this product a rating of`}
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Star sx={{ fontSize: theme.typography.h2 }} />
                      {/* Larger Star */}
                      <Typography
                        component="span"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: theme.typography.h6,
                          color: theme.palette.common.white, // Ensuring text is visible on the icon
                        }}
                      >
                        {review.rating}
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography paragraph>{review.description}</Typography>
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
