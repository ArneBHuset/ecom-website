import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Box, useTheme } from "@mui/material";
import { useCart } from "../ui/cart/useCart";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import { Product } from "../../types/ProductInterface";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function ProductItem({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();

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
        <Box
          height={6}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        ></Box>
        <CardMedia
          component="img"
          height="180"
          image={product.image.url}
          alt={product.image.alt || `Image for ${product.title}`}
        />
        <CardContent sx={{ margin: 0, paddingBottom: 0 }}>
          <Typography
            sx={{
              textAlign: "left",
              typography: theme.typography.h6,
              textTransform: "uppercase",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            paragraph
            color="text.secondary"
            sx={{
              overflow: "hidden",
              margin: 0,
              maxHeight: 50,
              display: { xs: "none", sm: "block" },
            }}
          >
            {product.description.length > 100
              ? product.description.slice(0, 110)
              : product.description}
            {product.description.length > 100 && <ReadMoreIcon />}
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"}>
              <Icon
                aria-label="rating"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <StarIcon />
              </Icon>
              <Typography
                sx={{ display: { xs: "none", sm: "block" } }}
              >{`${product.rating}/5`}</Typography>
            </Box>
            <IconButton
              onClick={handleAddToCart}
              aria-label="add to cart"
              style={{
                color: theme.palette.common.black,
              }}
            >
              <AddShoppingCartIcon sx={{ fontSize: theme.typography.h4 }} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
