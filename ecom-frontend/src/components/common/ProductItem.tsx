import { styled } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TagIcon from "@mui/icons-material/Tag";
import { Box } from "@mui/material";
import AddCart from "../../storage/AddCart";
import { useCart } from "../ui/cart/CartContext";

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

export default function ProductItem({ product }) {
  const [expanded, setExpanded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      imageURL: product.image.url,
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title}
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
          <IconButton aria-label="add to cart" onClick={handleAddToCart}>
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
        <Typography>{`#${product.tags.join(" #")}`}</Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {product.reviews.map((review) => (
              <Box key={review.id}>
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
    </Box>
  );
}
