import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import { useCart } from "../ui/cart/CartContext";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import { Product } from "../../types/ProductInterface";

export default function ProductItem({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      imageURL: product.image.url,
      quantity: 1,
    });
  };

  const handleCardClick = () => {
    navigate(`/Singleproduct/:${product.id}`);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
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

          <Icon aria-label="rating">
            <StarIcon />
          </Icon>
          <Typography>{`${product.rating}/5`}</Typography>
          <Typography>{`#${product.tags.join(" #")}`}</Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
