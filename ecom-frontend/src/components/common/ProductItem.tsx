import { styled } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import ApiCall from "../../api/api-call";
import { Box } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */

export default function ProductItem({ product }: any) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  {
    console.log("This is the product", product);
  }

  return (
    <Box>
      {product &&
        product.data.map((product: any) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={product.title}
              //   subheader={`${product.discountedPrice < product.price {

              //   }}`}
            />

            <CardMedia
              component="img"
              height="194"
              image={product.image.url}
              alt={product.image.alt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="rating">
                <StarIcon />
              </IconButton>
              <Typography>{`${product.rating}/5`}</Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            {/* <IconButton aria-label="add to favorites">
              <TagIcon />
            </IconButton> */}
            <Typography>{`#${product.tags.join(" #")}`}</Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {product.reviews.map((review: any) => (
                  <Box>
                    <Typography paragraph>{review.username}</Typography>
                    <Typography paragraph>{review.description}</Typography>
                    <IconButton aria-label="share">
                      <StarIcon />
                    </IconButton>
                    <Typography>This is the rating: {review.rating}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
    </Box>
  );
}
