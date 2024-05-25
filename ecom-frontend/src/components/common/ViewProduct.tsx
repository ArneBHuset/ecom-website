import { Box, Typography, IconButton } from "@mui/material";
import Star from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import ApiCall from "../../api/api-call";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../ui/cart/CartContext";

export default function ViewProduct() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const productIdNonNull = productId!;
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      imageURL: product.image.url,
    });
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={12} sm={6}>
          <Item>
            <img
              src={`${product.image.url} `}
              alt={`${product.image.alt} || Image for ${product.title}`}
              width={500}
              height={500}
            ></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <h1>{product.title}</h1>
            <IconButton aria-label="add to cart" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
            </IconButton>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.discountedPrice}</p>
            <p>{product.rating}</p>
            <p>{`#${product.tags.join(" #")}`}</p>
            <Box>
              {product.reviews.map((review) => (
                <Box key={review.id}>
                  <Typography paragraph>{review.username}</Typography>
                  <Typography paragraph>{review.description}</Typography>
                  <IconButton aria-label="share">
                    <Star />
                  </IconButton>
                  <Typography>This is the rating: {review.rating}</Typography>
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
