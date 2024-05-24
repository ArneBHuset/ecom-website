import { Box, Typography, IconButton } from "@mui/material";
import Star from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import ApiCall from "../../api/api-call";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Paper";

export default function ViewProduct() {
  const [products, setProducts] = useState(null);
  const { productId } = useParams();
  const productIdNonNull = productId!;

  // console.log(productId);
  // console.log(products);

  useEffect(() => {
    if (productId) {
      const fetchData = async () => {
        const apiData = await ApiCall(productId.replace(":", ""));
        setProducts(apiData.data);
      };
      fetchData();
    } else {
      console.log("No product id");
    }
  }, [productId]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={12} sm={6}>
          <Item>
            <img
              src={`${products.image.url} `}
              alt={`${products.image.alt} || Image for ${products.title}`}
              width={500}
              height={500}
            ></img>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <h1>{products.title}</h1>
            <p>{products.description}</p>
            <p>{products.price}</p>
            <p>{products.discountedPrice}</p>
            <p>{products.rating}</p>
            <p>{`#${products.tags.join(" #")}`}</p>
            <Box>
              {products.reviews.map((review) => (
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
