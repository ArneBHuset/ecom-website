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
import { useCart } from "../ui/cart/useCart";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import { Product } from "../../types/ProductInterface";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

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
      <Card
        sx={{ maxWidth: 345, maxHeight: { xs: 350, sm: 355 }, minHeight: 290 }}
        onClick={handleCardClick}
      >
        <CardHeader
          title={product.title}
          sx={{ textAlign: "center", textTransform: "uppercase" }}
          action={
            <IconButton aria-label="add to cart" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="180"
          image={product.image.url}
          alt={product.image.alt || `Image for ${product.title}`}
        />
        <CardContent sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography
            paragraph
            color="text.secondary"
            sx={{ overflow: "hidden", maxHeight: 50 }}
          >
            {product.description.length > 100
              ? product.description.slice(0, 110)
              : product.description}
            {product.description.length > 100 && <ReadMoreIcon />}
          </Typography>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Icon aria-label="rating">
              <StarIcon />
            </Icon>
            <Typography>{`${product.rating}/5`}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
